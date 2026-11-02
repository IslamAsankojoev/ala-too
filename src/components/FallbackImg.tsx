"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";

/**
 * <img> that hides itself when the file fails to load, revealing whatever
 * placeholder sits underneath it. Also catches errors that fired before hydration.
 */
export function FallbackImg({ ref, onError, style, alt = "", ...props }: ComponentProps<"img">) {
  const inner = useRef<HTMLImageElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = inner.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt}
      ref={(el) => {
        inner.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
      onLoad={() => setFailed(false)}
      style={{ ...style, visibility: failed ? "hidden" : style?.visibility }}
    />
  );
}
