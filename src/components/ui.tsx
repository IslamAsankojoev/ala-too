import type { ComponentProps } from "react";

export function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export const sectionTitle =
  "m-0 font-serif font-light text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-[.03em] uppercase text-cream";

export const goldButton =
  "inline-flex items-center h-12 rounded bg-gold text-ink text-[12px] font-medium tracking-[.14em] uppercase transition-colors hover:bg-gold-light hover:text-ink";

export const eyebrow = "text-[11px] tracking-[.2em] uppercase";

export const container = "max-w-[1200px] mx-auto px-6";

export const sectionPad = "pt-[clamp(88px,11vw,150px)]";

/** Chevron used under custom <select>s */
export function SelectChevron({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("absolute right-1 w-[7px] h-[7px] border-r border-b border-gold rotate-45 pointer-events-none", className)}
    />
  );
}

export function ArrowButton({ dir, ...props }: { dir: "prev" | "next" } & ComponentProps<"button">) {
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Назад" : "Вперёд"}
      className="w-12 h-12 rounded-full bg-transparent border border-gold/50 text-gold text-[18px] transition-colors hover:bg-gold hover:text-ink"
      {...props}
    >
      {dir === "prev" ? "←" : "→"}
    </button>
  );
}

export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "absolute inset-0 flex items-center justify-center text-center px-4 font-mono text-[11px] tracking-[.08em] uppercase text-placeholder",
        className,
      )}
    >
      {label}
    </span>
  );
}
