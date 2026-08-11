import assert from "node:assert/strict";
import test from "node:test";
import { detectSelectedStarsFromPixels } from "../lib/reward-star-detection.mjs";

const blue = [0, 145, 255, 255];
const black = [0, 0, 0, 255];
const white = [255, 255, 255, 255];

function sampleRating(selectedStars, top = 98, starColor = blue, backgroundColor) {
  const width = 400;
  const height = 300;
  const pixels = new Uint8ClampedArray(width * height * 4);

  if (backgroundColor) {
    for (let offset = 0; offset < pixels.length; offset += 4) pixels.set(backgroundColor, offset);
  }

  const paint = (x, y) => {
    const offset = (y * width + x) * 4;
    pixels.set(starColor, offset);
  };

  for (let star = 0; star < 5; star += 1) {
    const left = 48 + star * 60;
    const size = 40;

    for (let y = top; y < top + size; y += 1) {
      for (let x = left; x < left + size; x += 1) {
        const outline = x < left + 3 || x >= left + size - 3 || y < top + 3 || y >= top + size - 3;
        if (outline || star < selectedStars) paint(x, y);
      }
    }
  }

  return detectSelectedStarsFromPixels(pixels, width, height);
}

test("distinguishes selected stars from blue outlines", () => {
  assert.equal(sampleRating(1), 1);
  assert.equal(sampleRating(5), 5);
});

test("detects five selected stars at the top of the screenshot", () => {
  assert.equal(sampleRating(5, 2), 5);
});

test("detects five solid black stars on a light screenshot", () => {
  assert.equal(sampleRating(0, 98, black, white), 0);
  assert.equal(sampleRating(5, 98, black, white), 5);
});
