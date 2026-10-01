import { readFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];

async function text(relativePath) {
  return readFile(resolve(root, relativePath), 'utf8');
}

function expect(condition, message) {
  if (!condition) failures.push(message);
}

const [indexHtml, atelier, uiCss, serviceWorker] = await Promise.all([
  text('index.html'),
  text('atelier.js'),
  text('src/ui/ui.css'),
  text('service-worker.js'),
]);

expect(indexHtml.includes('href="src/ui/ui.css"'), 'index.html does not load src/ui/ui.css');
expect(indexHtml.includes('id="submit" class="ui-button ui-button--primary ui-button--medium"'), 'Submit button is not using the Design System Button classes');
expect(indexHtml.includes('id="prev" class="ui-button ui-button--secondary ui-button--medium"'), 'Previous button is not using the Design System Button classes');
expect(atelier.includes("import('./src/ui/components/answer-option/answer-option.js')"), 'atelier.js does not dynamically load AnswerOption');
expect(atelier.includes('UI.createAnswerOption'), 'atelier.js does not render production choices through AnswerOption');
expect(serviceWorker.includes("azure-trainer-v2.0.7-ui-sprint5"), 'Service worker cache was not bumped for Sprint 5');
expect(serviceWorker.includes("'./src/ui/ui.css'"), 'Service worker does not cache the Design System CSS entrypoint');
expect(serviceWorker.includes("'./src/ui/components/answer-option/answer-option.js'"), 'Service worker does not cache AnswerOption');

const coreMatch = serviceWorker.match(/const CORE=\[(.*?)\];/s);
if (coreMatch) {
  const corePaths = [...coreMatch[1].matchAll(/'([^']+)'/g)].map((match) => match[1]);
  for (const corePath of corePaths) {
    if (corePath === './') continue;
    const relativePath = corePath.replace(/^\.\//, '');
    try {
      await access(resolve(root, relativePath), constants.R_OK);
    } catch {
      failures.push(`Missing Service Worker CORE asset: ${corePath}`);
    }
  }
} else {
  failures.push('Unable to parse Service Worker CORE asset list');
}

const cssImports = [...uiCss.matchAll(/@import\s+['"]([^'"]+)['"]/g)].map((match) => match[1]);
for (const importedPath of cssImports) {
  const fullPath = resolve(root, 'src/ui', importedPath);
  try {
    await access(fullPath, constants.R_OK);
  } catch {
    failures.push(`Missing CSS imported by src/ui/ui.css: ${importedPath}`);
  }
}

for (const relativePath of [
  'src/ui/components/button/button.js',
  'src/ui/components/icon-button/icon-button.js',
  'src/ui/components/badge/badge.js',
  'src/ui/components/answer-option/answer-option.js',
  'src/ui/patterns/question-card/question-card.js',
]) {
  const source = await text(relativePath);
  expect(!/^import\s+['"].*\.css['"];?/m.test(source), `${relativePath} still imports CSS and cannot run directly on GitHub Pages`);
}

if (failures.length) {
  console.error('\nUI integration verification failed:');
  failures.forEach((failure) => console.error(` - ${failure}`));
  process.exit(1);
}

console.log(`UI integration verification passed (${cssImports.length} shared CSS modules checked).`);
