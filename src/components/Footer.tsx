import Link from "next/link";
import { contacts, routes } from "@/data/site";
import { MOUNTAINS_PATH } from "./home/Hero";

const heading = "text-[11px] tracking-[.2em] uppercase text-gold mb-1.5";
const link = "text-[14px] text-cream";
const social = "px-3 py-[9px] rounded border border-gold/45 text-[11px] tracking-[.12em] uppercase text-gold";

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-cream/8 pt-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-10 gap-y-12 relative z-[1]">
        <div className="flex flex-col gap-[22px]">
          <Link href={routes.home} className="flex flex-col items-start leading-none">
            <span className="font-serif text-[34px] tracking-[.08em] text-cream">ALA-TOO</span>
            <span className="text-[10px] tracking-[.62em] text-gold mt-1.5 pl-[.2em]">REALTY</span>
          </Link>
          <p className="m-0 text-[14px] leading-[1.6] text-muted max-w-[240px]">Агентство недвижимости в Бишкеке и Чуйской области. С 2018 года.</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className={heading}>Объекты</span>
          {["Квартиры в новостройках", "Вторичное жильё", "Аренда квартир", "Дома и участки", "Коммерческая"].map((t) => (
            <Link key={t} href={routes.catalog} className={link}>{t}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className={heading}>Компания</span>
          <Link href={routes.owners} className={link}>Собственникам</Link>
          <Link href={routes.about} className={link}>О компании</Link>
          <Link href={routes.about} className={link}>Команда</Link>
          <Link href={routes.contacts} className={link}>Контакты</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className={heading}>Связаться</span>
          <a href={contacts.phoneHref} className="text-[18px] text-cream">{contacts.phone}</a>
          <a href={contacts.phone2Href} className="text-[18px] text-cream">{contacts.phone2}</a>
          <a href={`mailto:${contacts.email}`} className="text-[14px] text-muted">{contacts.email}</a>
          <span className="text-[14px] text-muted">{contacts.address}</span>
          <div className="flex gap-2 mt-1.5">
            <a href={contacts.whatsapp} className={social}>WhatsApp</a>
            <a href={contacts.telegram} className={social}>Telegram</a>
            <a href={contacts.instagram} className={social}>Instagram</a>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden className="block w-full h-[140px] mt-16">
        <path d={MOUNTAINS_PATH} fill="none" stroke="#BF9E77" strokeWidth="1" strokeOpacity=".55" />
        <path d="M0 160 L120 138 L260 128 L380 108 L520 122 L640 96 L780 120 L900 104 L1040 126 L1180 116 L1300 134 L1440 128" fill="none" stroke="#BF9E77" strokeWidth="1" strokeOpacity=".22" />
      </svg>

      <div className="border-t border-cream/8">
        <div className="max-w-[1200px] mx-auto px-6 pt-[22px] pb-7 flex flex-wrap gap-x-8 gap-y-3 justify-between text-[12px] text-subtle">
          <span>ОсОО «Ала-Тоо Риэлти», ИНН 01234567890123 · © {new Date().getFullYear()}</span>
          <div className="flex gap-6 flex-wrap">
            <a href={routes.privacy} className="text-subtle">Политика конфиденциальности</a>
            <a href={routes.terms} className="text-subtle">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
