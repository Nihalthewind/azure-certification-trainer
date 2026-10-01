export function computeQuestionScrollTop({ scrollY = 0, cardTop = 0, offset = 12 } = {}) {
  const value = Number(scrollY) + Number(cardTop) - Number(offset);
  return Math.max(0, Number.isFinite(value) ? value : 0);
}

export function setQuestionSessionActive(active) {
  document.body?.classList.toggle('question-session-active', Boolean(active));
}

export function scrollQuestionIntoView({
  selector = '#questionCard',
  offset = 12,
  smooth = false,
} = {}) {
  const card = document.querySelector(selector);
  if (!card || card.hidden) return false;

  const top = computeQuestionScrollTop({
    scrollY: window.scrollY,
    cardTop: card.getBoundingClientRect().top,
    offset,
  });

  if (smooth) {
    window.scrollTo({ top, behavior: 'smooth' });
    return true;
  }

  // html historically uses scroll-behavior:smooth. Temporarily force an
  // immediate reposition so Next/Previous never produces a long visual jump.
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  window.scrollTo({ top, left: window.scrollX, behavior: 'auto' });
  requestAnimationFrame(() => {
    html.style.scrollBehavior = previous;
  });
  return true;
}

export function scrollQuestionAfterRender(options = {}) {
  requestAnimationFrame(() => scrollQuestionIntoView(options));
}

export function scrollFeedbackIntoView({
  selector = '#feedback .ui-feedback-panel, #feedback',
  offset = 68,
  smooth = false,
} = {}) {
  const feedback = document.querySelector(selector);
  if (!feedback || feedback.hidden) return false;

  const rect = feedback.getBoundingClientRect();
  const top = Math.max(0, window.scrollY + rect.top - Number(offset || 0));
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;

  html.style.scrollBehavior = smooth ? previous : 'auto';
  window.scrollTo({
    top,
    left: window.scrollX,
    behavior: smooth ? 'smooth' : 'auto',
  });

  if (!smooth) {
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previous;
    });
  }
  return true;
}

export function scrollFeedbackAfterRender(options = {}) {
  // Two frames guarantee that the newly-created feedback panel has its final
  // dimensions before we frame it in the viewport.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => scrollFeedbackIntoView(options));
  });
}
