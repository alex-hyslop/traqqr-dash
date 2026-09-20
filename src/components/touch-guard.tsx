"use client";

import { useEffect, useRef } from "react";

function findScrollableAncestor(
  target: EventTarget | null,
  axis: "x" | "y"
): boolean {
  let el = target instanceof Element ? target : null;
  while (el && el !== document.body) {
    const style = getComputedStyle(el);
    const canScroll =
      axis === "y"
        ? /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight
        : /(auto|scroll)/.test(style.overflowX) && el.scrollWidth > el.clientWidth;
    if (canScroll) return true;
    el = el.parentElement;
  }
  return false;
}

export function TouchGuard() {
  const startRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      startRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 1) return;
      const touch = event.touches[0];
      if (!touch) return;

      const dx = touch.clientX - startRef.current.x;
      const dy = touch.clientY - startRef.current.y;
      const isHorizontalDrag = Math.abs(dx) > Math.abs(dy);

      const axis = isHorizontalDrag ? "x" : "y";
      if (!findScrollableAncestor(event.target, axis)) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return null;
}
