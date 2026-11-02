"use client";

import { useRef } from "react";
import { ratings, reviews } from "@/data/home";
import { ArrowButton, container, eyebrow, sectionTitle } from "../ui";

const Stars = ({ className }: { className: string }) => (
  <span className={`text-gold ${className}`} aria-label="5 из 5">★★★★★</span>
);

export function Reviews() {
  const track = useRef<HTMLDivElement>(null);
  const by = (d: number) => () => track.current?.scrollBy({ left: d * 400, behavior: "smooth" });

  return (
    <section data-screen-label="08 Отзывы" className="py-[clamp(80px,10vw,140px)]">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div className="flex flex-col gap-4">
            <span className={`${eyebrow} text-gold`}>Отзывы</span>
            <h2 className={sectionTitle}>Отзывы клиентов</h2>
          </div>
          <div className="flex gap-3 flex-wrap">
            {ratings.map((r) => (
              <div key={r.source} className="flex items-center gap-3.5 px-5 py-3.5 rounded-md bg-panel border border-cream/8">
                <span className="text-[13px] font-medium tracking-[.06em] text-cream">{r.source}</span>
                <span className="font-serif text-[32px] leading-none text-gold">{r.value}</span>
                <span className="flex flex-col gap-0.5">
                  <Stars className="text-[11px] tracking-[2px]" />
                  <span className="text-[11px] text-muted">{r.count}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div ref={track} className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-1">
          {reviews.map((r) => (
            <article key={r.name} className="flex-[0_0_min(380px,86vw)] snap-start bg-panel rounded-lg p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3.5">
                <span className="w-[52px] h-[52px] rounded-full border border-gold flex items-center justify-center font-serif text-[19px] text-gold">
                  {r.initials}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[16px] text-cream">{r.name}</span>
                  <Stars className="text-[13px] tracking-[3px]" />
                </span>
                <span className="ml-auto text-[11px] text-subtle tracking-[.06em]">{r.source}</span>
              </div>
              <p className="m-0 text-[16px] leading-[1.65] text-cream text-pretty">{r.text}</p>
              <a href="#" className="mt-auto self-start text-[12px] tracking-[.14em] uppercase text-gold border-b border-gold/50 pb-[3px]">
                Читать полностью
              </a>
            </article>
          ))}
        </div>

        <div className="flex gap-2.5 mt-8">
          <ArrowButton dir="prev" onClick={by(-1)} />
          <ArrowButton dir="next" onClick={by(1)} />
        </div>
      </div>
    </section>
  );
}
