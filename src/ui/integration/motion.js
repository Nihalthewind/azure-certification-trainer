export const MOTION = Object.freeze({ fast: 120, normal: 180, feedback: 200, progress: 300, exam: 220 });
export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function reveal(element, duration = MOTION.normal, direction = 'vertical') {
  if (!element || reducedMotion()) return;
  element.getAnimations().forEach(animation => animation.cancel());
  return element.animate([
    { opacity: 0.6, transform: direction === 'horizontal' ? 'translateX(4px)' : 'translateY(4px)' },
    { opacity: 1, transform: 'none' },
  ], { duration, easing: 'cubic-bezier(0.2, 0, 0, 1)' });
}

// The old content is only a non-interactive snapshot. The caller updates the
// real question synchronously; animations never postpone engine operations.
export function questionTransition(element, update) {
  if (!element || reducedMotion()) return update();
  const old = element.cloneNode(true);
  old.removeAttribute('id'); old.setAttribute('aria-hidden', 'true'); old.inert = true;
  old.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
  old.querySelectorAll('[name]').forEach(node => node.removeAttribute('name'));
  const rect = element.getBoundingClientRect();
  old.style.cssText = `position:fixed;top:${rect.top}px;left:${rect.left}px;width:${rect.width}px;height:${rect.height}px;pointer-events:none;z-index:5;overflow:hidden;`;
  document.body.append(old);
  update();
  const exit = old.animate([{ opacity: 1 }, { opacity: 0 }], { duration: MOTION.fast / 2 });
  exit.finished.catch(() => {}).finally(() => old.remove());
  reveal(element, MOTION.normal, 'horizontal');
}

export function expand(element) {
  if (!element || reducedMotion()) return;
  element.animate([{ height: '0px', opacity: 0 }, { height: element.scrollHeight + 'px', opacity: 1 }],
    { duration: MOTION.normal, easing: 'cubic-bezier(0.2, 0, 0, 1)' });
}

export function accordionTransition(wrapper, previousHeight, expanded) {
  if (!wrapper || reducedMotion()) return;
  wrapper.animate([{ height: previousHeight + 'px' }, { height: wrapper.scrollHeight + 'px' }],
    { duration: MOTION.normal, easing: 'cubic-bezier(0.2, 0, 0, 1)' });
  wrapper.querySelector('.ui-course-hub__module-header svg')?.animate([
    { transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)' },
    { transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' },
  ], { duration: MOTION.normal, easing: 'cubic-bezier(0.2, 0, 0, 1)' });
}

export function focusTransition(chrome, active, update) {
  const snapshots = [];
  if (active && !reducedMotion()) for (const node of chrome) {
    if (!node || !node.getClientRects().length) continue;
    const clone = node.cloneNode(true), rect = node.getBoundingClientRect();
    clone.removeAttribute('id');clone.querySelectorAll('[id]').forEach(n => n.removeAttribute('id'));
    const sourceNodes=[node,...node.querySelectorAll('*')],cloneNodes=[clone,...clone.querySelectorAll('*')];
    for(let i=0;i<sourceNodes.length;i++) {
      const styles=getComputedStyle(sourceNodes[i]);
      cloneNodes[i].style.cssText=[...styles].map(property=>property+':'+styles.getPropertyValue(property)).join(';');
    }
    const host=document.createElement('div');host.inert=true;host.setAttribute('aria-hidden','true');
    host.style.cssText=`position:fixed;left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;pointer-events:none;z-index:6;`;
    clone.style.position='static';clone.style.margin='0';
    // Shadow DOM isolates the decorative copy from selectors, shortcuts and tests.
    host.attachShadow({mode:'closed'}).append(clone);
    document.body.append(host);snapshots.push(host);
  }
  update();
  for (const clone of snapshots) clone.animate([{opacity:1},{opacity:0}],{duration:MOTION.normal}).finished.catch(()=>{}).finally(()=>clone.remove());
  if (!active) for(const node of chrome) reveal(node);
}
