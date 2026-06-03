import { readFileSync, writeFileSync } from 'node:fs';

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const content = `export const APP_VERSION = '${packageJson.version}';\n`;

writeFileSync(new URL('../src/app/core/constants/app-version.ts', import.meta.url), content);
