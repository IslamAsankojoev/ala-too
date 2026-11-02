"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contacts, languages, nav, routes, type NavKey } from "@/data/site";
import { cn } from "./ui";

const iconLink =
  "w-9 h-9 rounded-full border border-gold/45 flex items-center justify-center text-gold transition-colors hover:bg-gold hover:text-ink";

export function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d="M4 20l1.3-4.2A8 8 0 1 1 8.3 18.8L4 20z" />
      <path d="M9.2 8.6c0 3.4 2.8 6.2 6.2 6.2l.9-1.6-1.9-.9-.9.8a4 4 0 0 1-2-2l.8-.9-.9-1.9-1.6.9z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d="M21 4L3 11.2l6 2.2 2.2 6.1 3.3-4.1 5 3.8L21 4z" />
      <path d="M9 13.4L21 4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".8" fill="currentColor" />
    </svg>
  );
}

type Props = {
  active?: NavKey;
  /** Transparent header laid over the hero (home page). Otherwise solid with a spacer below. */
  overlay?: boolean;
};

export function Header({ active = "home", overlay = false }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<(typeof languages)[number]>("RU");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when switching to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1180px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const solid = !overlay || scrolled || open;

  const langButtons = (className: string) =>
    languages.map((l) => (
      <button
        key={l}
        type="button"
        onClick={() => setLang(l)}
        className={cn("bg-transparent border-0 tracking-[.1em]", className, l === lang ? "text-gold" : "text-subtle")}
      >
        {l}
      </button>
    ));

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[100] backdrop-blur-md border-b transition-[background-color,border-color] duration-[400ms] ease-in-out",
          solid ? "bg-ink/94 border-cream/8" : "bg-ink/0 border-cream/0",
        )}
      >
        <div className="max-w-[1320px] mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
          <Link href={routes.home} className="flex items-center gap-3.5 shrink-0" aria-label="Ala-Too Realty — на главную">
            <span className="flex flex-col items-center leading-none">
              <span className="font-serif text-[27px] font-normal tracking-[.08em] text-cream">ALA-TOO</span>
              <span className="text-[9px] tracking-[.62em] pl-[.62em] text-gold mt-[5px]">REALTY</span>
            </span>
            {/* Caption hidden on very narrow phones, otherwise the burger overflows the screen */}
            <span className="hidden min-[420px]:block w-px h-[30px] bg-cream/18" />
            <span className="hidden min-[420px]:block text-[11px] leading-[1.35] text-muted w-[92px]">Агентство недвижимости</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden xl:flex gap-[34px]">
            {nav.map((n) => (
              <Link
                key={n.key}
                href={n.href}
                className={cn(
                  "text-[12px] tracking-[.14em] uppercase py-1.5 border-b hover:text-gold",
                  n.key === active ? "text-gold border-gold" : "text-cream border-transparent",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden xl:flex items-center gap-[22px]">
            <div className="flex gap-2">
              <a href={contacts.whatsapp} title="WhatsApp" className={iconLink}><WhatsAppIcon /></a>
              <a href={contacts.telegram} title="Telegram" className={iconLink}><TelegramIcon /></a>
              <a href={contacts.instagram} title="Instagram" className={iconLink}><InstagramIcon /></a>
            </div>
            <div className="flex flex-col gap-1">
              <a href={contacts.phoneHref} className="text-[15px] text-cream whitespace-nowrap">{contacts.phone}</a>
              <span className="flex items-center gap-[7px] text-[11px] text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-online shadow-[0_0_0_3px_rgba(76,195,138,.18)]" />
                Сейчас работаем
              </span>
            </div>
            <div className="flex gap-2.5 pl-[18px] border-l border-cream/14">{langButtons("py-1 px-0 text-[12px]")}</div>
          </div>

          {/* Mobile */}
          <div className="flex xl:hidden items-center gap-2.5">
            <a href={contacts.phoneHref} aria-label="Позвонить" className="w-11 h-11 rounded-full border border-gold/45 flex items-center justify-center text-gold">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Меню"
              aria-expanded={open}
              className="w-11 h-11 rounded-full border border-cream/25 bg-transparent flex flex-col items-center justify-center gap-1.5"
            >
              <span className={cn("w-[18px] h-px bg-cream transition-transform duration-300", open && "translate-y-[3.5px] rotate-45")} />
              <span className={cn("w-[18px] h-px bg-cream transition-transform duration-300", open && "-translate-y-[3.5px] -rotate-45")} />
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden h-[calc(100vh-73px)] overflow-auto px-6 pt-8 pb-12 flex flex-col gap-9 border-t border-cream/8">
            <nav className="flex flex-col gap-[18px]">
              {nav.map((n) => (
                <Link
                  key={n.key}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={cn("font-serif font-light text-[38px] tracking-[.03em] uppercase", n.key === active ? "text-gold" : "text-cream")}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-1.5">
              <a href={contacts.phoneHref} className="text-[20px] text-cream">{contacts.phone}</a>
              <span className="flex items-center gap-[7px] text-[12px] text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-online" />
                Сейчас работаем · Пн–Сб 9:00–19:00
              </span>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <a href={contacts.whatsapp} className="px-[18px] py-[13px] rounded bg-gold text-ink text-[12px] tracking-[.14em] uppercase">WhatsApp</a>
              <a href={contacts.telegram} className="px-[18px] py-[13px] rounded border border-gold/50 text-gold text-[12px] tracking-[.14em] uppercase">Telegram</a>
              <a href={contacts.instagram} className="px-[18px] py-[13px] rounded border border-gold/50 text-gold text-[12px] tracking-[.14em] uppercase">Instagram</a>
            </div>
            <div className="flex gap-[18px]">{langButtons("py-2 px-0 text-[14px]")}</div>
          </div>
        )}
      </header>

      {!overlay && <div className="h-[73px]" />}

      {/* Floating WhatsApp button on mobile/tablet */}
      <a
        href={contacts.whatsapp}
        aria-label="WhatsApp"
        className="xl:hidden fixed right-[18px] bottom-[18px] z-[99] w-[58px] h-[58px] rounded-full bg-gold text-ink hover:text-ink flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,.45)]"
      >
        <WhatsAppIcon size={26} />
      </a>
    </>
  );
}
