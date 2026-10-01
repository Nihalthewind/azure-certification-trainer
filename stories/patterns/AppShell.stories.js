import { createAppShell } from '../../src/ui/patterns/app-shell/app-shell.js';

function createStudyWorkspace() {
  const root = document.createElement('div');
  root.className = 'ui-app-shell-demo';
  root.innerHTML = `
    <div class="ui-app-shell-demo__toolbar">
      <div class="ui-app-shell-demo__toolbar-copy">
        <strong>Votre parcours</strong>
        <span>568 questions · Domaine : Identités et gouvernance</span>
      </div>
      <div class="ui-app-shell-demo__toolbar-actions">
        <span class="ui-app-shell-demo__chip">⌕ Rechercher</span>
        <span class="ui-app-shell-demo__chip">☷ Toutes les questions</span>
        <span class="ui-app-shell-demo__chip ui-app-shell-demo__chip--focus">⛶ Mode Focus</span>
      </div>
    </div>
    <div class="ui-app-shell-demo__progress"></div>
    <article class="ui-app-shell-demo__card">
      <div class="ui-app-shell-demo__card-head">
        <div class="ui-app-shell-demo__meta"><b>GOUVERNANCE</b><span>AZ104-042</span></div>
        <div class="ui-app-shell-demo__meta"><span>☆</span><span>✎</span><span>⚑</span><span>À découvrir</span></div>
      </div>
      <div class="ui-app-shell-demo__question">
        <small>QUESTION 42</small>
        <h2>Vous devez permettre à une équipe d’administrer uniquement les machines virtuelles d’un groupe de ressources. Quelle approche respecte le principe du moindre privilège ?</h2>
        <div class="ui-app-shell-demo__answers">
          <div class="ui-app-shell-demo__answer"><span>A</span><b>Attribuer le rôle Owner au niveau de l’abonnement</b></div>
          <div class="ui-app-shell-demo__answer"><span>B</span><b>Attribuer Virtual Machine Contributor sur le groupe de ressources</b></div>
          <div class="ui-app-shell-demo__answer"><span>C</span><b>Créer un nouvel abonnement dédié</b></div>
          <div class="ui-app-shell-demo__answer"><span>D</span><b>Attribuer Global Administrator dans Microsoft Entra ID</b></div>
        </div>
      </div>
      <div class="ui-app-shell-demo__card-foot">
        <span class="ui-app-shell-demo__fake-button">← Précédent</span>
        <span class="ui-app-shell-demo__fake-button ui-app-shell-demo__fake-button--primary">Valider la réponse</span>
      </div>
    </article>
  `;
  return root;
}

const meta = {
  title: 'Patterns/AppShell',
  parameters: {
    layout: 'fullscreen',
    a11y: { test: 'error' },
  },
  render: (args) => createAppShell({
    ...args,
    content: createStudyWorkspace(),
  }),
  argTypes: {
    density: {
      control: 'radio',
      options: ['balanced', 'compact', 'spacious'],
    },
    activeMode: {
      control: 'select',
      options: ['dashboard', 'study', 'mistakes', 'exam'],
    },
  },
};

export default meta;

export const A_Balanced = {
  name: 'A · Équilibré',
  args: {
    density: 'balanced',
    activeMode: 'study',
    trainingCode: 'AZ-104',
    trainingName: 'Azure Administrator',
    pageTitle: 'Base de connaissances',
    pageSubtitle: 'Hiérarchie claire et densité intermédiaire.',
  },
};

export const B_Compact = {
  name: 'B · Compact',
  args: {
    ...A_Balanced.args,
    density: 'compact',
    pageSubtitle: 'Davantage de place pour le contenu, chrome plus dense.',
  },
};

export const C_Spacious = {
  name: 'C · Aéré',
  args: {
    ...A_Balanced.args,
    density: 'spacious',
    pageSubtitle: 'Plus de respiration et une navigation plus présente.',
  },
};

export const Mobile = {
  args: {
    ...A_Balanced.args,
    density: 'balanced',
  },
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
};
