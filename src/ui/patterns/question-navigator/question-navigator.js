import { createIcon } from '../../icons/icons.js';
import { enhanceSearchBar } from '../../components/search-bar/search-bar.js';

export function questionNavigatorStatus(question, state = {}) {
  const answer = state.answers?.[question.id];
  if (answer?.correct === true) return 'good';
  if (answer?.correct === false) return 'bad';
  return answer?.done || answer?.read ? 'answered' : 'pending';
}

const statusLabels = {good: '✓ Réussie', bad: '↻ À reprendre', answered: 'Répondue', pending: 'Non répondue'};

export function filterQuestionNavigatorItems(items = [], query = '') {
  const normalized = String(query || '').trim().toLocaleLowerCase('fr-FR');
  if (!normalized) return items;
  return items.filter((item) => String([
    item.id,
    item.index,
    item.title,
    item.category,
    item.domain,
    item.status,
  ].filter(Boolean).join(' ')).toLocaleLowerCase('fr-FR').includes(normalized));
}

export function createQuestionNavigator({
  items = [],
  examMode = false,
  currentId = '',
  embedded = false,
  label = 'Questions du domaine',
  onSelect,
} = {}) {
  const root = document.createElement('section');
  root.className = 'ui-question-navigator' + (embedded ? ' ui-question-navigator--embedded' : '');
  root.setAttribute('aria-label', label);

  const toolbar = document.createElement('div');
  toolbar.className = 'ui-question-navigator__toolbar';
  const search = document.createElement('label');
  search.className = 'ui-question-navigator__search';
  search.innerHTML = '<span aria-hidden="true">⌕</span><input type="search" placeholder="Numéro, ID, domaine…" aria-label="Filtrer les questions">';
  enhanceSearchBar(search);
  const summary = document.createElement('span');
  summary.className = 'ui-question-navigator__summary';
  toolbar.append(search, summary);

  const grid = document.createElement('div');
  grid.className = 'ui-question-navigator__grid';
  root.append(toolbar, grid);
  if (embedded) {
    const legend = document.createElement('p');
    legend.className = 'ui-question-navigator__legend';
    legend.textContent = '✓ Réussie · ↻ À reprendre · Répondue · Non répondue';
    root.insertBefore(legend, grid);
    grid.setAttribute('role', 'region');
    grid.setAttribute('aria-label', label);
    grid.tabIndex = 0;
  }

  const render = (query = '') => {
    const visible = filterQuestionNavigatorItems(items, query);
    summary.textContent = `${visible.length} / ${items.length}`;
    grid.replaceChildren();
    visible.forEach((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = [
        'ui-question-navigator__item',
        `is-${item.status || 'pending'}`,
        item.id === currentId ? 'is-current' : '',
        item.flagged ? 'is-flagged' : '',
      ].filter(Boolean).join(' ');
      const number = document.createElement('strong');
      number.textContent = String(item.index ?? index + 1);
      const id = document.createElement('span');
      id.textContent = item.id || '';
      button.append(number, id);
      const status = statusLabels[item.status] || statusLabels.pending;
      button.setAttribute('aria-label', `Question ${item.index ?? index + 1} · ${item.id} · ${status}`);
      button.title = [item.id, item.title].filter(Boolean).join(' · ');
      if (embedded) {
        const state = document.createElement('small');
        state.className = 'ui-question-navigator__status';
        state.textContent = status;
        button.append(state);
        button.dataset.courseQuestionId = item.id;
      }
      button.onclick = () => onSelect?.(item.id);
      if (item.favorite || item.reported) {
        const markers = document.createElement('span');
        markers.className = 'ui-question-navigator__markers';
        if (item.favorite) {
          const favorite = document.createElement('i');
          favorite.className = 'ui-question-navigator__marker is-favorite';
          favorite.setAttribute('aria-label', 'Favori');
          favorite.append(createIcon('star', { size: 11, filled: true }));
          markers.append(favorite);
        }
        if (item.reported) {
          const reported = document.createElement('i');
          reported.className = 'ui-question-navigator__marker is-report';
          reported.setAttribute('aria-label', 'Signalée');
          reported.append(createIcon('report', { size: 11 }));
          markers.append(reported);
        }
        button.append(markers);
      }
      grid.append(button);
    });
    if (!visible.length) {
      const empty = document.createElement('p');
      empty.className = 'ui-question-navigator__empty';
      empty.textContent = 'Aucune question ne correspond à cette recherche.';
      grid.append(empty);
    }
  };

  search.querySelector('input').addEventListener('input', (event) => render(event.target.value));
  root.dataset.mode = examMode ? 'exam' : 'training';
  render();
  return root;
}
