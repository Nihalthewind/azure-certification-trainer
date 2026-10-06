import { createIcon, iconNames } from '../../icons/icons.js';

const VALID_SIZES = new Set(['small', 'medium']);
const VALID_TONES = new Set(['accent', 'danger', 'warning']);
const VALID_ICONS = new Set(iconNames);

function applyIconButtonState(button, {
  icon = 'star',
  label = 'Action',
  size = 'medium',
  active = false,
  pressed = null,
  activeTone = 'accent',
  disabled = false,
  showLabel = false,
} = {}) {
  const safeSize = VALID_SIZES.has(size) ? size : 'medium';
  const safeTone = VALID_TONES.has(activeTone) ? activeTone : 'accent';
  const safeIcon = VALID_ICONS.has(icon) ? icon : 'star';

  button.type = 'button';
  button.className = [
    'ui-icon-button',
    `ui-icon-button--${safeSize}`,
    `is-icon-${safeIcon}`,
    active ? 'is-active' : '',
    active ? `is-${safeTone}` : '',
  ].filter(Boolean).join(' ');

  button.disabled = Boolean(disabled);
  button.setAttribute('aria-label', label);
  button.title = label;
  button.dataset.icon = safeIcon;

  if (typeof pressed === 'boolean') {
    button.setAttribute('aria-pressed', String(pressed));
  } else {
    button.removeAttribute('aria-pressed');
  }

  button.classList.toggle('ui-icon-button--labelled', showLabel);
  button.translate = false;
  button.replaceChildren(createIcon(safeIcon, { filled: safeIcon === 'star' && active }));
  if(showLabel){const text=document.createElement('span');text.textContent=label;button.append(text);}
  bindTooltip(button);
  return button;
}

/**
 * Icon-only action button.
 * `label` is mandatory for accessibility because the visual icon has no text.
 * `pressed` is optional: use it only for true toggle actions.
 */
export function createIconButton(options = {}) {
  const button = document.createElement('button');
  applyIconButtonState(button, options);

  if (typeof options.onClick === 'function') {
    button.addEventListener('click', options.onClick);
  }

  return button;
}

/**
 * Upgrades an existing application button without replacing its DOM node.
 * This preserves IDs and event handlers while the legacy app is migrated.
 */
export function updateIconButton(button, options = {}) {
  if (!(button instanceof HTMLElement)) return null;
  return applyIconButtonState(button, options);
}

// A single floating tooltip escapes card clipping and is constrained to the viewport.
let tooltip, owner;const bound=new WeakSet();
function hideTooltip(){if(tooltip)tooltip.hidden=true;if(owner)owner.removeAttribute('aria-describedby');owner=null;}
function bindTooltip(button){if(bound.has(button))return;bound.add(button);
 function show(){if(button.disabled)return;hideTooltip();if(!tooltip){tooltip=document.createElement('div');tooltip.id='ui-action-tooltip';tooltip.className='ui-action-tooltip';tooltip.role='tooltip';document.body.append(tooltip);}owner=button;tooltip.textContent=button.getAttribute('aria-label');tooltip.hidden=false;button.setAttribute('aria-describedby',tooltip.id);const r=button.getBoundingClientRect(),t=tooltip.getBoundingClientRect();tooltip.style.left=Math.max(8,Math.min(innerWidth-t.width-8,r.left+r.width/2-t.width/2))+'px';tooltip.style.top=Math.max(8,Math.min(innerHeight-t.height-8,r.bottom+t.height+12<innerHeight?r.bottom+8:r.top-t.height-8))+'px';}
 button.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')show();});button.addEventListener('focus',show);button.addEventListener('blur',hideTooltip);button.addEventListener('pointerleave',()=>{if(document.activeElement!==button)hideTooltip();});button.addEventListener('keydown',e=>{if(e.key==='Escape')hideTooltip();});window.addEventListener('scroll',onTooltipScroll,true);
}

function onTooltipScroll(){if(!owner||document.activeElement!==owner){hideTooltip();return;}const r=owner.getBoundingClientRect(),t=tooltip.getBoundingClientRect();tooltip.style.left=Math.max(8,Math.min(innerWidth-t.width-8,r.left+r.width/2-t.width/2))+'px';tooltip.style.top=Math.max(8,Math.min(innerHeight-t.height-8,r.bottom+t.height+12<innerHeight?r.bottom+8:r.top-t.height-8))+'px';}
