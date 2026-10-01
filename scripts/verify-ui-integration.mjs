import { readFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getAnswerOptionResultState } from '../src/ui/integration/answer-state.js';
import { computeQuestionScrollTop } from '../src/ui/patterns/question-viewport/question-viewport.js';
import { getFocusToggleState } from '../src/ui/patterns/workspace-toolbar/workspace-toolbar.js';
import { defaultFirstRunSteps } from '../src/ui/patterns/first-run-experience/first-run-experience.js';
import { getAppShellDensity } from '../src/ui/patterns/app-shell/app-shell.js';
import { trainerPageFactories } from '../src/ui/pages/trainer-pages/trainer-pages.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];

async function text(relativePath) {
  return readFile(resolve(root, relativePath), 'utf8');
}

function expect(condition, message) {
  if (!condition) failures.push(message);
}

const [indexHtml, atelier, uiCss, serviceWorker, workspaceToolbarCss, firstRunCss, appShellProductionCss] = await Promise.all([
  text('index.html'),
  text('atelier.js'),
  text('src/ui/ui.css'),
  text('service-worker.js'),
  text('src/ui/patterns/workspace-toolbar/workspace-toolbar.css'),
  text('src/ui/patterns/first-run-experience/first-run-experience.css'),
  text('src/ui/integration/app-shell-production.css'),
]);

expect(indexHtml.includes('href="src/ui/ui.css"'), 'index.html does not load src/ui/ui.css');
expect(indexHtml.includes('class="workspace ui-question-viewport"'), 'Production workspace does not use QuestionViewport');
expect(indexHtml.includes('id="focusToggleButton"'), 'Production workspace has no direct Focus action');
expect(indexHtml.includes('class="hero hero--compact"'), 'Persistent hero was not converted to the compact product header');
expect(indexHtml.includes('id="replayOnboardingButton"'), 'Settings does not expose Revoir l’introduction');
expect(indexHtml.includes('workspace-focus-toggle__icon'), 'Focus action does not expose a visible icon');
expect(indexHtml.includes('Mode Focus'), 'Focus action is not labelled explicitly');
expect(atelier.includes("const ONBOARDING_KEY=APP_KEY+'-onboarding-v1'"), 'Onboarding persistence key is missing');
expect(atelier.includes("import('./src/ui/patterns/first-run-experience/first-run-experience.js')"), 'FirstRunExperience is not loaded by the application');
expect(atelier.includes("UI.createFirstRunExperience"), 'FirstRunExperience is not exposed through the Design System bridge');
expect(atelier.includes("openOnboarding({force:true})"), 'Revoir l’introduction is not wired to the onboarding');
expect(atelier.includes("setTimeout(()=>openOnboarding(),120)"), 'First-run onboarding is not scheduled after application startup');
expect(firstRunCss.includes('backdrop-filter: blur(16px)'), 'FirstRunExperience does not blur/fade the background');
expect(firstRunCss.includes('prefers-reduced-motion'), 'FirstRunExperience does not respect reduced motion');
expect(atelier.includes('scrollFeedbackAfterRender:questionViewport.scrollFeedbackAfterRender'), 'Feedback auto-framing is not exposed through the Design System bridge');
expect(atelier.includes('UI.scrollFeedbackAfterRender?.()'), 'Answer submission does not auto-frame the correction');
expect(firstRunCss.includes('grid-template-rows: auto minmax(0, 1fr) auto auto'), 'Onboarding panel does not keep a stable action area');
expect(firstRunCss.includes('min-width: 154px'), 'Onboarding primary CTA does not reserve a stable width');
expect(indexHtml.includes('aria-pressed="false"'), 'Direct Focus action does not expose a pressed state');
expect(indexHtml.includes('id="submit" class="ui-button ui-button--primary ui-button--medium"'), 'Submit button is not using the Design System Button classes');
expect(indexHtml.includes('id="prev" class="ui-button ui-button--secondary ui-button--medium"'), 'Previous button is not using the Design System Button classes');
expect(atelier.includes("import('./src/ui/components/answer-option/answer-option.js')"), 'atelier.js does not dynamically load AnswerOption');
expect(atelier.includes("import('./src/ui/components/badge/badge.js')"), 'atelier.js does not dynamically load Badge');
expect(atelier.includes("import('./src/ui/components/icon-button/icon-button.js')"), 'atelier.js does not dynamically load IconButton');
expect(atelier.includes("import('./src/ui/components/feedback-panel/feedback-panel.js')"), 'atelier.js does not dynamically load FeedbackPanel');
expect(atelier.includes("import('./src/ui/integration/answer-state.js')"), 'atelier.js does not load answer-state integration');
expect(atelier.includes("import('./src/ui/patterns/question-viewport/question-viewport.js')"), 'atelier.js does not load QuestionViewport integration');
expect(atelier.includes("import('./src/ui/patterns/workspace-toolbar/workspace-toolbar.js')"), 'atelier.js does not load WorkspaceToolbar integration');
expect(atelier.includes('UI.createAnswerOption'), 'atelier.js does not render production choices through AnswerOption');
expect(atelier.includes('UI.updateBadge'), 'atelier.js does not upgrade production badges through the Design System');
expect(atelier.includes('UI.updateIconButton'), 'atelier.js does not upgrade production icon actions through the Design System');
expect(atelier.includes('UI.createFeedbackPanel'), 'atelier.js does not render production feedback through FeedbackPanel');
expect(!atelier.includes("if(e.target.id==='modal')closeModal()"), 'Modal backdrop still closes dialogs on outside click');
expect(atelier.includes("scrollIntoView({block:'center',inline:'nearest'})"), 'Question navigator does not recenter the current question');
expect(serviceWorker.includes("azure-trainer-v2.0.7-ui-sprint12"), 'Service worker cache was not bumped for Sprint 10');
expect(serviceWorker.includes("'./src/ui/components/badge/badge.js'"), 'Service worker does not cache Badge');
expect(serviceWorker.includes("'./src/ui/components/icon-button/icon-button.js'"), 'Service worker does not cache IconButton');
expect(serviceWorker.includes("'./src/ui/components/feedback-panel/feedback-panel.js'"), 'Service worker does not cache FeedbackPanel');
expect(serviceWorker.includes("'./src/ui/integration/answer-state.js'"), 'Service worker does not cache answer-state integration');
expect(serviceWorker.includes("'./src/ui/patterns/question-viewport/question-viewport.css'"), 'Service worker does not cache QuestionViewport CSS');
expect(serviceWorker.includes("'./src/ui/patterns/question-viewport/question-viewport.js'"), 'Service worker does not cache QuestionViewport JS');
expect(serviceWorker.includes("'./src/ui/patterns/workspace-toolbar/workspace-toolbar.css'"), 'Service worker does not cache WorkspaceToolbar CSS');
expect(serviceWorker.includes("'./src/ui/patterns/workspace-toolbar/workspace-toolbar.js'"), 'Service worker does not cache WorkspaceToolbar JS');
expect(serviceWorker.includes("'./src/ui/patterns/first-run-experience/first-run-experience.css'"), 'Service worker does not cache FirstRunExperience CSS');
expect(serviceWorker.includes("'./src/ui/patterns/first-run-experience/first-run-experience.js'"), 'Service worker does not cache FirstRunExperience JS');
expect(atelier.includes("bind('#focusToggleButton','onclick',toggleFocus)"), 'Direct Focus action is not bound in production');
expect(atelier.includes("if(state.examFocus){e.preventDefault();setFocusMode(false);return}"), 'Escape does not exit Focus mode');
expect(atelier.includes("(e.key==='f'||e.key==='F')"), 'Focus keyboard shortcut is missing');
expect(workspaceToolbarCss.includes('body.focus-mode .rail'), 'Focus mode does not own AppShell rail visibility');
expect(workspaceToolbarCss.includes('display: none !important'), 'Focus mode does not hide the rail cleanly');
expect(!atelier.includes("document.querySelector('.workspace').offsetTop-20"), 'Legacy workspace scroll target is still present');
expect(atelier.includes('focusCurrentQuestion()'), 'Question navigation does not use the stable QuestionViewport anchor');
expect(computeQuestionScrollTop({ scrollY: 500, cardTop: 120, offset: 12 }) === 608, 'QuestionViewport scroll target calculation is incorrect');
expect(computeQuestionScrollTop({ scrollY: 0, cardTop: 5, offset: 12 }) === 0, 'QuestionViewport scroll target must not become negative');

const focusOn = getFocusToggleState(true);
const focusOff = getFocusToggleState(false);
expect(focusOn.pressed === true && focusOn.label === 'Quitter Focus', 'Focus toggle active state is inconsistent');
expect(focusOff.pressed === false && focusOff.label === 'Mode Focus', 'Focus toggle inactive state is inconsistent');
expect(focusOff.icon === '⛶' && focusOn.icon === '×', 'Focus toggle visual affordance is inconsistent');

const onboardingSteps = defaultFirstRunSteps({ trainingCode: 'AZ-104', trainingName: 'Azure Administrator' });
expect(onboardingSteps.length === 3, 'FirstRunExperience must expose exactly three concise onboarding steps');
expect(onboardingSteps[2]?.title?.includes('concentrer'), 'FirstRunExperience does not teach Focus mode');
const balancedShell = getAppShellDensity('balanced');
const compactShell = getAppShellDensity('compact');
const spaciousShell = getAppShellDensity('spacious');
expect(balancedShell.railWidth === 248 && balancedShell.topbarHeight === 60, 'AppShell balanced density is inconsistent');
expect(compactShell.railWidth < balancedShell.railWidth, 'AppShell compact density must reduce chrome width');
expect(spaciousShell.contentGutter > balancedShell.contentGutter, 'AppShell spacious density must increase content breathing room');
expect(uiCss.includes("./components/navigation-item/navigation-item.css"), 'ui.css does not load NavigationItem');
expect(uiCss.includes("./patterns/app-shell/app-shell.css"), 'ui.css does not load AppShell');
expect(serviceWorker.includes("'./src/ui/components/navigation-item/navigation-item.css'"), 'Service worker does not cache NavigationItem CSS');
expect(serviceWorker.includes("'./src/ui/patterns/app-shell/app-shell.css'"), 'Service worker does not cache AppShell CSS');
const requiredPages = ['dashboard', 'study', 'mistakes', 'exam', 'settings'];
requiredPages.forEach((page) => {
  expect(typeof trainerPageFactories[page] === 'function', `Missing Storybook page prototype: ${page}`);
});
expect(uiCss.includes("./pages/trainer-pages/trainer-pages.css"), 'ui.css does not load the complete page prototypes');
expect(serviceWorker.includes("'./src/ui/pages/trainer-pages/trainer-pages.css'"), 'Service worker does not cache page prototype CSS');


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
  'src/ui/components/navigation-item/navigation-item.js',
  'src/ui/components/badge/badge.js',
  'src/ui/components/answer-option/answer-option.js',
  'src/ui/components/feedback-panel/feedback-panel.js',
  'src/ui/patterns/question-card/question-card.js',
  'src/ui/patterns/question-viewport/question-viewport.js',
  'src/ui/patterns/workspace-toolbar/workspace-toolbar.js',
  'src/ui/patterns/first-run-experience/first-run-experience.js',
  'src/ui/patterns/app-shell/app-shell.js',
  'src/ui/pages/trainer-pages/trainer-pages.js',
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

expect(indexHtml.includes('app-shell-production'), 'Production does not use the AppShell shell');
expect(indexHtml.includes('id="settingsPage"'), 'Settings is not a full production page');
expect(indexHtml.includes('id="mistakesPage"'), 'Errors is not a full production page');
expect(indexHtml.includes('id="examPage"'), 'Exam is not a full production landing page');
expect(!indexHtml.includes('id="settingsPanel"'), 'Legacy settings popover is still present');
expect(indexHtml.includes('id="topPageTitle"'), 'Production topbar has no page title');
expect(uiCss.includes("./integration/app-shell-production.css"), 'ui.css does not load production AppShell integration');
expect(appShellProductionCss.includes('html[data-theme="dark"]'), 'Production AppShell has no dark-theme review');
expect(appShellProductionCss.includes('html[data-theme="light"]'), 'Production AppShell has no light-theme review');
expect(appShellProductionCss.includes('--ui-shell-rail-width: 248px'), 'Balanced AppShell density is not used in production');
expect(atelier.includes("mode='exam-home'"), 'Exam landing mode is not implemented');
expect(atelier.includes("mode='mistakes-session'"), 'Errors landing/session split is not implemented');
expect(atelier.includes("selectMode('settings')"), 'Settings navigation does not use a dedicated page');
expect(atelier.includes('renderMistakesPage()'), 'Errors production page is not rendered');
expect(atelier.includes('renderExamLanding()'), 'Exam production page is not rendered');
expect(atelier.includes('renderSettingsPage()'), 'Settings production page is not rendered');
expect(atelier.includes("import('./src/ui/icons/icons.js')"), 'Production shell does not load shared SVG icons');
expect(serviceWorker.includes("'./src/ui/integration/app-shell-production.css'"), 'Service worker does not cache production AppShell CSS');

console.log(`UI integration verification passed (${cssImports.length} shared CSS modules checked, Sprint 10 onboarding + compact header + Focus discoverability regressions covered).`);
