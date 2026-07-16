import { copyFile } from 'node:fs/promises';

const prerenderedNotFound = new URL('../dist/gabrielveras.dev/browser/404/index.html', import.meta.url);
const githubPagesNotFound = new URL('../dist/gabrielveras.dev/browser/404.html', import.meta.url);

await copyFile(prerenderedNotFound, githubPagesNotFound);

console.log('Generated dist/gabrielveras.dev/browser/404.html for GitHub Pages.');
