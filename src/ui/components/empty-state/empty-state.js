export function createEmptyState({
  icon = '◇',
  title = 'Rien à afficher',
  description = 'Essayez une autre sélection.',
  actionLabel = '',
  onAction,
} = {}) {
  const root = document.createElement('section');
  root.className = 'ui-empty-state';

  const iconNode = document.createElement('span');
  iconNode.className = 'ui-empty-state__icon';
  iconNode.setAttribute('aria-hidden', 'true');
  iconNode.textContent = icon;

  const heading = document.createElement('h2');
  heading.textContent = title;
  const copy = document.createElement('p');
  copy.textContent = description;
  root.append(iconNode, heading, copy);

  if (actionLabel) {
    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'ui-button ui-button--primary ui-button--medium';
    action.innerHTML = `<span class="ui-button__label">${actionLabel}</span>`;
    if (typeof onAction === 'function') action.addEventListener('click', onAction);
    root.append(action);
  }

  return root;
}
