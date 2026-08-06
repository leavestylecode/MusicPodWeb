function isAppStoreBlue(red, green, blue, alpha) {
  return alpha > 180 && blue > 145 && green > 85 && blue - red > 78 && green - red > 34;
}

function findBlueComponents(pixels, width, height) {
  const mask = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);
  const startY = Math.floor(height * 0.07);
  const endY = Math.min(height, Math.ceil(height * 0.68));

  for (let y = startY; y < endY; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      const offset = index * 4;
      if (isAppStoreBlue(pixels[offset], pixels[offset + 1], pixels[offset + 2], pixels[offset + 3])) {
        mask[index] = 1;
      }
    }
  }

  const stack = new Int32Array(width * height);
  const components = [];

  for (let y = startY; y < endY; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const first = y * width + x;
      if (!mask[first] || visited[first]) continue;

      let stackSize = 1;
      let count = 0;
      let minX = x;
      let maxX = x;
      let minY = y;
      let maxY = y;
      stack[0] = first;
      visited[first] = 1;

      while (stackSize > 0) {
        const current = stack[--stackSize];
        const currentX = current % width;
        const currentY = Math.floor(current / width);
        count += 1;
        minX = Math.min(minX, currentX);
        maxX = Math.max(maxX, currentX);
        minY = Math.min(minY, currentY);
        maxY = Math.max(maxY, currentY);

        for (let deltaY = -1; deltaY <= 1; deltaY += 1) {
          const nextY = currentY + deltaY;
          if (nextY < startY || nextY >= endY) continue;

          for (let deltaX = -1; deltaX <= 1; deltaX += 1) {
            if (deltaX === 0 && deltaY === 0) continue;
            const nextX = currentX + deltaX;
            if (nextX < 0 || nextX >= width) continue;
            const next = nextY * width + nextX;
            if (!mask[next] || visited[next]) continue;
            visited[next] = 1;
            stack[stackSize++] = next;
          }
        }
      }

      if (count >= 28) components.push({ minX, minY, maxX, maxY });
    }
  }

  return { components, mask };
}

function centerFill(component, mask, canvasWidth) {
  const width = component.maxX - component.minX + 1;
  const height = component.maxY - component.minY + 1;
  const fromX = Math.round(component.minX + width * 0.34);
  const toX = Math.round(component.minX + width * 0.66);
  const fromY = Math.round(component.minY + height * 0.36);
  const toY = Math.round(component.minY + height * 0.65);
  let bluePixels = 0;
  let total = 0;

  for (let y = fromY; y <= toY; y += 1) {
    for (let x = fromX; x <= toX; x += 1) {
      total += 1;
      bluePixels += mask[y * canvasWidth + x] ?? 0;
    }
  }

  return total ? bluePixels / total : 0;
}

export function detectSelectedStarsFromPixels(pixels, width, height) {
  const { components, mask } = findBlueComponents(pixels, width, height);
  const minSize = Math.max(16, width * 0.018);
  const maxSize = width * 0.12;
  const candidates = components.filter((component) => {
    const componentWidth = component.maxX - component.minX + 1;
    const componentHeight = component.maxY - component.minY + 1;
    const aspect = componentWidth / componentHeight;
    return componentWidth >= minSize && componentHeight >= minSize
      && componentWidth <= maxSize && componentHeight <= maxSize
      && aspect >= 0.68 && aspect <= 1.45;
  });

  let bestGroup = null;
  let bestScore = Number.POSITIVE_INFINITY;

  for (const seed of candidates) {
    const seedHeight = seed.maxY - seed.minY + 1;
    const seedCenterY = (seed.minY + seed.maxY) / 2;
    const row = candidates
      .filter((candidate) => {
        const componentHeight = candidate.maxY - candidate.minY + 1;
        const centerY = (candidate.minY + candidate.maxY) / 2;
        return Math.abs(centerY - seedCenterY) <= Math.max(componentHeight, seedHeight) * 0.42;
      })
      .sort((left, right) => left.minX - right.minX);

    for (let start = 0; start <= row.length - 5; start += 1) {
      const group = row.slice(start, start + 5);
      const widths = group.map((item) => item.maxX - item.minX + 1);
      const heights = group.map((item) => item.maxY - item.minY + 1);
      const centers = group.map((item) => (item.minX + item.maxX) / 2);
      const gaps = centers.slice(1).map((center, index) => center - centers[index]);
      const averageWidth = widths.reduce((sum, value) => sum + value, 0) / widths.length;
      const averageHeight = heights.reduce((sum, value) => sum + value, 0) / heights.length;
      const averageGap = gaps.reduce((sum, value) => sum + value, 0) / gaps.length;
      const sizeSpread = Math.max(...widths, ...heights) / Math.min(...widths, ...heights);
      const gapSpread = Math.max(...gaps) / Math.min(...gaps);

      if (averageGap < averageWidth * 1.05 || averageGap > averageWidth * 2.35) continue;
      if (sizeSpread > 1.5 || gapSpread > 1.42) continue;

      const verticalSpread = Math.max(...group.map((item) => (item.minY + item.maxY) / 2))
        - Math.min(...group.map((item) => (item.minY + item.maxY) / 2));
      const score = sizeSpread + gapSpread + verticalSpread / averageHeight;
      if (score < bestScore) {
        bestScore = score;
        bestGroup = group;
      }
    }
  }

  if (!bestGroup) return 0;
  return bestGroup.filter((component) => centerFill(component, mask, width) >= 0.32).length;
}
