export const coverFlowDragThreshold = 8;
export const coverFlowSwipeThreshold = 34;

export type CoverFlowGestureIntent = "pending" | "horizontal" | "vertical";

export function getCoverFlowGestureIntent(deltaX: number, deltaY: number): CoverFlowGestureIntent {
  const horizontalDistance = Math.abs(deltaX);
  const verticalDistance = Math.abs(deltaY);

  if (Math.max(horizontalDistance, verticalDistance) < coverFlowDragThreshold) {
    return "pending";
  }

  return horizontalDistance > verticalDistance ? "horizontal" : "vertical";
}

export function getCoverFlowSwipeDirection(deltaX: number) {
  if (Math.abs(deltaX) < coverFlowSwipeThreshold) return 0;
  return deltaX < 0 ? 1 : -1;
}
