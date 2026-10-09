/** Present a viewport of an unchanged source image, shared by question and reader. */
export function createSourceIllustration({url, label = 'Illustration source', crop = null} = {}) {
  const image = document.createElement('img');
  image.src = url;
  image.alt = label;
  image.draggable = false;
  image.loading = 'lazy';
  if (!crop || ![crop.x, crop.y, crop.width, crop.height, crop.sourceWidth, crop.sourceHeight].every(Number.isFinite)
      || crop.width <= 0 || crop.height <= 0 || crop.x < 0 || crop.y < 0
      || crop.x + crop.width > crop.sourceWidth || crop.y + crop.height > crop.sourceHeight) return image;
  const viewport = document.createElement('div');
  viewport.className = 'ui-source-illustration';
  viewport.style.aspectRatio = `${crop.width} / ${crop.height}`;
  image.style.width = `${crop.sourceWidth / crop.width * 100}%`;
  image.style.left = `${-crop.x / crop.width * 100}%`;
  image.style.top = `${-crop.y / crop.height * 100}%`;
  viewport.append(image);
  return viewport;
}

export function questionIllustrations(question) {
  const hidden = new Set(question.answerAreaAssets || []);
  return (question.assets || []).filter(url => !hidden.has(url)).map(url => ({url, crop:question.assetCrops?.[url] || null}));
}
