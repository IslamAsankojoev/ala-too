"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { heroImage } from "@/data/home";
import { routes } from "@/data/site";
import { FallbackImg } from "../FallbackImg";
import { goldButton, Placeholder } from "../ui";

export const MOUNTAINS_PATH =
  "M0 150 L90 122 L150 132 L230 84 L280 104 L360 46 L410 76 L470 58 L520 88 L600 24 L660 64 L720 44 L790 92 L850 56 L910 74 L980 30 L1050 78 L1110 60 L1180 102 L1250 86 L1320 118 L1440 108";

export function Hero() {
  const img = useRef<HTMLImageElement>(null);

  // Parallax on the team photo
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      if (img.current && scrollY < 1200) img.current.style.transform = `translateY(${scrollY * 0.3}px) scale(1.08)`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section data-screen-label="01 Hero" className="relative min-h-[max(700px,100vh)] overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-panel">
        <Placeholder label="Фото команды агентства · TEAM_PHOTO" className="text-[12px]" />
        <FallbackImg
          ref={img}
          src={heroImage}
          alt="Команда Ala-Too Realty"
          fetchPriority="high"
          style={{ transform: "scale(1.08)" }}
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] will-change-transform"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,13,.88)_0%,rgba(0,10,13,.25)_30%,rgba(0,10,13,.2)_55%,#000A0D_97%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,10,13,.9)_0%,rgba(0,10,13,0)_26%,rgba(0,10,13,0)_74%,rgba(0,10,13,.9)_100%)]" />
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden className="absolute inset-x-0 bottom-[90px] w-full h-[130px] pointer-events-none">
        <path d={MOUNTAINS_PATH} fill="none" stroke="#BF9E77" strokeWidth="1" strokeOpacity=".5" />
      </svg>

      <div className="relative max-w-[1320px] mx-auto px-6 pt-[clamp(120px,17vh,180px)] pb-16 min-h-[max(700px,100vh)] flex flex-col justify-between gap-12">
        <h1 className="m-0 font-serif font-light leading-[.92] tracking-[.03em] uppercase text-cream flex flex-col gap-2.5">
          <span className="text-[clamp(58px,11vw,172px)] flex items-start gap-5 flex-wrap">
            Эксперты
            <span className="font-script normal-case tracking-normal text-[clamp(20px,2.2vw,32px)] text-gold mt-[.6em]">с 2018 года</span>
          </span>
          <span className="text-[clamp(28px,4.9vw,78px)] pl-[clamp(0px,16vw,260px)]">в недвижимости Бишкека</span>
        </h1>

        <div className="flex flex-wrap items-end justify-between gap-10">
          <div className="relative w-[156px] h-[156px] shrink-0">
            <svg viewBox="0 0 200 200" aria-hidden className="absolute inset-0 w-full h-full motion-safe:animate-spin-slow">
              <defs>
                <path id="badgeCircle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text className="font-sans fill-cream" style={{ fontSize: "14.5px", letterSpacing: "4px" }}>
                <textPath href="#badgeCircle" textLength="498" lengthAdjust="spacing">
                  8 ЛЕТ НА РЫНКЕ БИШКЕКА · 8 ЛЕТ НА РЫНКЕ БИШКЕКА ·
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-[38px] rounded-full bg-ink/60 border border-gold flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BF9E77" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
                <circle cx="8" cy="8" r="4.5" />
                <circle cx="8" cy="8" r="1.5" />
                <path d="M11.2 11.2L20.5 20.5M16.6 16.6l2.2-2.2M18.8 18.8l1.8-1.8" />
              </svg>
            </div>
          </div>

          <div className="max-w-[470px] flex flex-col gap-7">
            <p className="m-0 text-[clamp(16px,1.3vw,18px)] leading-[1.65] text-cream text-pretty">
              Помогаем купить, продать и сдать квартиры, дома и коммерческую недвижимость в Бишкеке и Чуйской области.
              Полное юридическое сопровождение сделки
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href={routes.catalog} className={`${goldButton} px-[26px]`}>Подобрать объект</Link>
              <Link
                href={routes.owners}
                className="inline-flex items-center h-12 px-[26px] rounded border border-cream/50 text-cream text-[12px] tracking-[.14em] uppercase transition-colors hover:bg-cream hover:text-ink"
              >
                Продать через нас
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
