// Presentation only: panels retain their existing controls and saved data.
export function bindSettingsNavigation(root, { initialTarget } = {}) {
  const tabs = [...root.querySelectorAll('[data-settings-target]')];
  function activate(tab, { focus = false } = {}) {
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      item.removeAttribute('aria-current');
      const panel = root.querySelector(item.dataset.settingsTarget);
      panel.hidden = !active;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    const panel = root.querySelector(tab.dataset.settingsTarget);
    tab.id ||= `${panel.id}Tab`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
    tab.onclick = () => activate(tab);
    tab.onkeydown = event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      activate(tabs[next], { focus: true });
    };
  });
  if (tabs.length) activate(tabs.find(tab => tab.dataset.settingsTarget === initialTarget) || tabs[0]);
}
