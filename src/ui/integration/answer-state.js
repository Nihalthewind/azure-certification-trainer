function normalizeIndexSet(values = []) {
  return new Set(
    (Array.isArray(values) ? values : [])
      .map((value) => Number(value))
      .filter((value) => Number.isInteger(value) && value >= 0),
  );
}

/**
 * Returns the visual state for one answer option after correction is revealed.
 * Correct answers are always shown as correct. A selected non-answer is shown
 * as incorrect. Unselected distractors stay neutral.
 */
export function getAnswerOptionResultState({
  answerIndices = [],
  selectedIndices = [],
  optionIndex = 0,
  reveal = false,
} = {}) {
  if (!reveal) return 'default';

  const index = Number(optionIndex);
  const correct = normalizeIndexSet(answerIndices);
  const selected = normalizeIndexSet(selectedIndices);

  if (correct.has(index)) return 'correct';
  if (selected.has(index)) return 'incorrect';
  return 'default';
}

export function normalizeAnswerIndices(values = []) {
  return [...normalizeIndexSet(values)];
}
