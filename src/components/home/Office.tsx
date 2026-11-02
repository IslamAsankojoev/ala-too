"use client";

import { useEffect, useRef, useState } from "react";
import { officeLeaves, officeSlides } from "@/data/home";
import { FallbackImg } from "../FallbackImg";
import { ArrowButton, cn, Placeholder, sectionTitle } from "../ui";

const N = officeSlides.length;

export function Office() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    timer.current = setInterval(() => setI((x) => (x + 1) % N), 6000);
    return () => clearInterval(timer.current);
  }, []);

  // Manual navigation stops autoplay
  const go = (n: number) => {
    clearInterval(timer.current);
    setI((n + N) % N);
  };

  return (
    <section data-screen-label="09 Офис" className="relative py-[clamp(80px,10vw,140px)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-wrap justify-between items-end gap-x-16 gap-y-6">
          <h2 className={sectionTitle}>
            В офисе,
            <br />
            <span className="font-script normal-case tracking-normal text-gold text-[1.05em]">как дома</span>
          </h2>
          <p className="m-0 max-w-[440px] text-[17px] leading-[1.65] text-cream">
            Мы встречаем клиентов в уютном офисе в центре Бишкека: кофе, переговорные и спокойная атмосфера для важных решений
          </p>
        </div>

        <div className="relative">
          <FallbackImg src={officeLeaves.left} loading="lazy" className="absolute -left-[110px] -bottom-10 w-[clamp(120px,16vw,220px)] z-[2] pointer-events-none" />
          <FallbackImg src={officeLeaves.right} loading="lazy" className="absolute -right-[110px] -top-10 w-[clamp(120px,16vw,220px)] z-[2] pointer-events-none" />
          <div className="relative rounded-lg overflow-hidden aspect-[16/8] min-h-[280px] bg-panel">
            <div
              className="flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(.6,0,.2,1)]"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {officeSlides.map((s, n) => (
                <div key={s.src} className="flex-[0_0_100%] relative h-full" aria-hidden={n !== i}>
                  <Placeholder label={s.placeholder} className="ph-stripes" />
                  <FallbackImg src={s.src} alt="Офис Ala-Too Realty" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex gap-2.5">
            {officeSlides.map((s, n) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Слайд ${n + 1}`}
                aria-current={n === i}
                onClick={() => go(n)}
                className={cn("h-0.5 border-0 p-0 transition-[width] duration-[400ms]", n === i ? "w-12 bg-gold" : "w-5 bg-cream/25")}
              />
            ))}
          </div>
          <div className="flex gap-2.5">
            <ArrowButton dir="prev" onClick={() => go(i - 1)} />
            <ArrowButton dir="next" onClick={() => go(i + 1)} />
          </div>
        </div>
      </div>
    </section>
  );
}
