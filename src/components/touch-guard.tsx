"use client";

import { useEffect } from "react";

function isInsideScrollable(target: EventTarget | null): boolean {
  let el = target instanceof Element ? target : null;
  while (el && el !== document.body) {
    const style = getComputedStyle(el);
    const canScrollY =
      /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight;
    const canScrollX =
      /(auto|scroll)/.test(style.overflowX) && el.scrollWidth > el.clientWidth;
    if (canScrollY || canScrollX) return true;
    el = el.parentElement;
  }
  return false;
}

export function TouchGuard() {
  useEffect(() => {
    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 1) return;
      if (!isInsideScrollable(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => document.removeEventListener("touchmove", onTouchMove);
  }, []);

  return null;
}
