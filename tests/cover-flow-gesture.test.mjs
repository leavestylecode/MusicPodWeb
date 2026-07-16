import assert from "node:assert/strict";
import test from "node:test";
import {
  getCoverFlowGestureIntent,
  getCoverFlowSwipeDirection,
} from "../lib/cover-flow-gesture.ts";

test("keeps taps clickable until a drag gesture is established", () => {
  assert.equal(getCoverFlowGestureIntent(0, 0), "pending");
  assert.equal(getCoverFlowGestureIntent(7, 2), "pending");
  assert.equal(getCoverFlowGestureIntent(8, 2), "horizontal");
  assert.equal(getCoverFlowGestureIntent(3, 12), "vertical");
});

test("changes albums only after a completed horizontal swipe", () => {
  assert.equal(getCoverFlowSwipeDirection(33), 0);
  assert.equal(getCoverFlowSwipeDirection(-33), 0);
  assert.equal(getCoverFlowSwipeDirection(34), -1);
  assert.equal(getCoverFlowSwipeDirection(-34), 1);
});
