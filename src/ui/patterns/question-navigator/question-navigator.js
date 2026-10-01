export function filterQuestionNavigatorItems(items = [], query = '') {
  const normalized = String(query || '').trim().toLocaleLowerCase('fr-FR');
  if (!normalized) return items;
  return items.filter((item) => String([
    item.id,
    item.index,
    item.category,
    item.domain,
    item.status,
  ].filter(Boolean).join(' ')).toLocaleLowerCase('fr-FR').includes(normalized));
}

export function createQuestionNavigator({
  items = [],
  examMode = false,
  currentId = '',
} = {}) {
  const root = document.createElement('section');
  root.className = 'ui-question-navigator';

  const toolbar = document.createElement('div');
  toolbar.className = 'ui-question-navigator__toolbar';
  const search = document.createElement('label');
  search.className = 'ui-question-navigator__search';
  search.innerHTML = '<span aria-hidden="true">⌕</span><input type="search" placeholder="Numéro, ID, domaine…" aria-label="Filtrer les questions">';
  const summary = document.createElement('span');
  summary.className = 'ui-question-navigator__summary';
  toolbar.append(search, summary);

  const grid = document.createElement('div');
  grid.className = 'ui-question-navigator__grid';
  root.append(toolbar, grid);

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
      button.innerHTML = `<strong>${item.index ?? index + 1}</strong><span>${item.id || ''}</span>${item.favorite ? '<i aria-label="Favori">★</i>' : ''}${item.reported ? '<i aria-label="Signalée">⚑</i>' : ''}`;
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
