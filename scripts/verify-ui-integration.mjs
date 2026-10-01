import { readFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getAnswerOptionResultState } from '../src/ui/integration/answer-state.js';
import { computeQuestionScrollTop } from '../src/ui/patterns/question-viewport/question-viewport.js';

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
expect(indexHtml.includes('class="workspace ui-question-viewport"'), 'Production workspace does not use QuestionViewport');
expect(indexHtml.includes('id="submit" class="ui-button ui-button--primary ui-button--medium"'), 'Submit button is not using the Design System Button classes');
expect(indexHtml.includes('id="prev" class="ui-button ui-button--secondary ui-button--medium"'), 'Previous button is not using the Design System Button classes');
expect(atelier.includes("import('./src/ui/components/answer-option/answer-option.js')"), 'atelier.js does not dynamically load AnswerOption');
expect(atelier.includes("import('./src/ui/components/badge/badge.js')"), 'atelier.js does not dynamically load Badge');
expect(atelier.includes("import('./src/ui/components/icon-button/icon-button.js')"), 'atelier.js does not dynamically load IconButton');
expect(atelier.includes("import('./src/ui/components/feedback-panel/feedback-panel.js')"), 'atelier.js does not dynamically load FeedbackPanel');
expect(atelier.includes("import('./src/ui/integration/answer-state.js')"), 'atelier.js does not load answer-state integration');
expect(atelier.includes("import('./src/ui/patterns/question-viewport/question-viewport.js')"), 'atelier.js does not load QuestionViewport integration');
expect(atelier.includes('UI.createAnswerOption'), 'atelier.js does not render production choices through AnswerOption');
expect(atelier.includes('UI.updateBadge'), 'atelier.js does not upgrade production badges through the Design System');
expect(atelier.includes('UI.updateIconButton'), 'atelier.js does not upgrade production icon actions through the Design System');
expect(atelier.includes('UI.createFeedbackPanel'), 'atelier.js does not render production feedback through FeedbackPanel');
expect(!atelier.includes("if(e.target.id==='modal')closeModal()"), 'Modal backdrop still closes dialogs on outside click');
expect(atelier.includes("scrollIntoView({block:'center',inline:'nearest'})"), 'Question navigator does not recenter the current question');
expect(serviceWorker.includes("azure-trainer-v2.0.7-ui-sprint8"), 'Service worker cache was not bumped for Sprint 8');
expect(serviceWorker.includes("'./src/ui/components/badge/badge.js'"), 'Service worker does not cache Badge');
expect(serviceWorker.includes("'./src/ui/components/icon-button/icon-button.js'"), 'Service worker does not cache IconButton');
expect(serviceWorker.includes("'./src/ui/components/feedback-panel/feedback-panel.js'"), 'Service worker does not cache FeedbackPanel');
expect(serviceWorker.includes("'./src/ui/integration/answer-state.js'"), 'Service worker does not cache answer-state integration');
expect(serviceWorker.includes("'./src/ui/patterns/question-viewport/question-viewport.css'"), 'Service worker does not cache QuestionViewport CSS');
expect(serviceWorker.includes("'./src/ui/patterns/question-viewport/question-viewport.js'"), 'Service worker does not cache QuestionViewport JS');
expect(!atelier.includes("document.querySelector('.workspace').offsetTop-20"), 'Legacy workspace scroll target is still present');
expect(atelier.includes('focusCurrentQuestion()'), 'Question navigation does not use the stable QuestionViewport anchor');
expect(computeQuestionScrollTop({ scrollY: 500, cardTop: 120, offset: 12 }) === 608, 'QuestionViewport scroll target calculation is incorrect');
expect(computeQuestionScrollTop({ scrollY: 0, cardTop: 5, offset: 12 }) === 0, 'QuestionViewport scroll target must not become negative');

// Regression: a selected wrong answer in a multiple-choice question must be red,
// while correct answers remain green even when the question as a whole is wrong.
const regression = {
  answerIndices: [0, 4],
  selectedIndices: ['0', '1'],
  reveal: true,
};
expect(getAnswerOptionResultState({ ...regression, optionIndex: 0 }) === 'correct', 'Multi-QCM regression: selected correct answer is not marked correct');
expect(getAnswerOptionResultState({ ...regression, optionIndex: 1 }) === 'incorrect', 'Multi-QCM regression: selected wrong answer is not marked incorrect');
expect(getAnswerOptionResultState({ ...regression, optionIndex: 2 }) === 'default', 'Multi-QCM regression: untouched distractor should stay neutral');
expect(getAnswerOptionResultState({ ...regression, optionIndex: 4 }) === 'correct', 'Multi-QCM regression: missed correct answer is not revealed as correct');

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
  'src/ui/components/feedback-panel/feedback-panel.js',
  'src/ui/patterns/question-card/question-card.js',
  'src/ui/patterns/question-viewport/question-viewport.js',
  'src/ui/integration/answer-state.js',
]) {
  const source = await text(relativePath);
  expect(!/^import\s+['"].*\.css['"];?/m.test(source), `${relativePath} still imports CSS and cannot run directly on GitHub Pages`);
}

if (failures.length) {
  console.error('\nUI integration verification failed:');
  failures.forEach((failure) => console.error(` - ${failure}`));
  process.exit(1);
}

console.log(`UI integration verification passed (${cssImports.length} shared CSS modules checked, Sprint 8 adaptive viewport + navigation regressions covered).`);
