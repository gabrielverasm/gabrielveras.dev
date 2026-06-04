import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.AUDIT_URL ?? 'http://localhost:4200';
const OUTPUT_DIR = path.resolve('tmp/overflow-audit');

const targets = ['/', '/#experience', '/#skills', '/#projects', '/#education', '/#contact'];

const viewports = [
  { name: '320', width: 320, height: 800 },
  { name: '360', width: 360, height: 800 },
  { name: '375', width: 375, height: 812 },
  { name: '390', width: 390, height: 844 },
  { name: '414', width: 414, height: 896 },
  { name: '430', width: 430, height: 932 },
  { name: 'ipad-mini', width: 768, height: 1024 },
  { name: 'ipad-air', width: 820, height: 1180 },
  { name: 'ipad-pro-11', width: 834, height: 1194 },
  { name: 'surface-pro-7', width: 912, height: 1368 },
  { name: 'ipad-pro', width: 1024, height: 1366 },
  { name: 'tablet-landscape', width: 1180, height: 820 },
  { name: 'nest-hub-max', width: 1280, height: 800 },
  { name: 'desktop-1366', width: 1366, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1920', width: 1920, height: 1080 },
];

await fs.rm(OUTPUT_DIR, { force: true, recursive: true });
await fs.mkdir(OUTPUT_DIR, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
let hasOverflow = false;

for (const viewport of viewports) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height });

  for (const target of targets) {
    const url = `${BASE_URL}${target}`;

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);

    const result = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const viewportWidth = window.innerWidth;

      const pageMetrics = {
        documentClientWidth: doc.clientWidth,
        documentScrollWidth: doc.scrollWidth,
        bodyClientWidth: body.clientWidth,
        bodyScrollWidth: body.scrollWidth,
      };

      const getSelector = (element) => {
        if (element.id) {
          return `#${element.id}`;
        }

        const parts = [];
        let current = element;

        while (current && current.nodeType === Node.ELEMENT_NODE && parts.length < 5) {
          let part = current.tagName.toLowerCase();

          if (current.className && typeof current.className === 'string') {
            const classes = current.className.trim().split(/\s+/).filter(Boolean).slice(0, 4);

            if (classes.length) {
              part += `.${classes.join('.')}`;
            }
          }

          const parent = current.parentElement;

          if (parent) {
            const siblings = Array.from(parent.children).filter(
              (child) => child.tagName === current.tagName,
            );

            if (siblings.length > 1) {
              part += `:nth-of-type(${siblings.indexOf(current) + 1})`;
            }
          }

          parts.unshift(part);
          current = parent;
        }

        return parts.join(' > ');
      };

      const suspects = Array.from(document.querySelectorAll('body *'))
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);
          const isSuspicious =
            rect.right > viewportWidth + 1 ||
            rect.left < -1 ||
            element.scrollWidth > element.clientWidth + 1;

          if (!isSuspicious) {
            return null;
          }

          return {
            selector: getSelector(element),
            tag: element.tagName.toLowerCase(),
            id: element.id || '',
            classes: typeof element.className === 'string' ? element.className : '',
            rect: {
              left: Math.round(rect.left * 100) / 100,
              right: Math.round(rect.right * 100) / 100,
              width: Math.round(rect.width * 100) / 100,
            },
            elementClientWidth: element.clientWidth,
            elementScrollWidth: element.scrollWidth,
            css: {
              display: style.display,
              position: style.position,
              width: style.width,
              maxWidth: style.maxWidth,
              minWidth: style.minWidth,
              paddingLeft: style.paddingLeft,
              paddingRight: style.paddingRight,
              marginLeft: style.marginLeft,
              marginRight: style.marginRight,
              transform: style.transform,
              overflowX: style.overflowX,
              whiteSpace: style.whiteSpace,
            },
          };
        })
        .filter(Boolean)
        .sort((a, b) => b.rect.right - a.rect.right)
        .slice(0, 30);

      return {
        pageMetrics,
        hasOverflow:
          doc.scrollWidth > doc.clientWidth + 1 || body.scrollWidth > body.clientWidth + 1,
        suspects,
      };
    });

    if (result.hasOverflow) {
      hasOverflow = true;

      const safeTarget = target.replaceAll('/', 'root').replaceAll('#', 'hash-');
      const baseName = `${viewport.name}-${viewport.width}x${viewport.height}-${safeTarget}`;

      await page.screenshot({
        path: path.join(OUTPUT_DIR, `${baseName}.png`),
        fullPage: true,
      });

      await fs.writeFile(
        path.join(OUTPUT_DIR, `${baseName}.json`),
        JSON.stringify({ viewport, target, url, ...result }, null, 2),
      );

      console.error(`\nOverflow: ${viewport.name} ${viewport.width}x${viewport.height} ${target}`);
      console.error(result.pageMetrics);
      console.table(
        result.suspects.map((item) => ({
          selector: item.selector,
          right: item.rect.right,
          left: item.rect.left,
          width: item.rect.width,
          client: item.elementClientWidth,
          scroll: item.elementScrollWidth,
          display: item.css.display,
          position: item.css.position,
          minWidth: item.css.minWidth,
          whiteSpace: item.css.whiteSpace,
        })),
      );
    } else {
      console.log(`OK: ${viewport.name} ${viewport.width}x${viewport.height} ${target}`);
    }
  }
}

await browser.close();

if (hasOverflow) {
  console.error(`\nHorizontal overflow found. See: ${OUTPUT_DIR}`);
  process.exit(1);
}

console.log('\nNo horizontal overflow found.');
