"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";

const subscribeNoop = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
}

export function SlideOver({
  open,
  onClose,
  side = "left",
  widthClassName = "w-[216px]",
  panelClassName = "",
  children,
}: {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right";
  widthClassName?: string;
  panelClassName?: string;
  children: ReactNode;
}) {
  const mounted = useMounted();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!mounted) return null;

  const sideClass = side === "left" ? "left-0" : "right-0";
  const closedTransform = side === "left" ? "-translate-x-full" : "translate-x-full";

  return createPortal(
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 ${sideClass} z-50 ${widthClassName} transition-transform duration-200 ${
          open ? "translate-x-0" : closedTransform
        } ${panelClassName}`}
      >
        {children}
      </div>
    </>,
    document.body
  );
}
