import Link from "next/link";
import { bestOffers } from "@/data/home";
import { routes } from "@/data/site";
import { FallbackImg } from "../FallbackImg";
import { container, eyebrow, Placeholder, sectionPad, sectionTitle } from "../ui";

export function BestOffers() {
  return (
    <section data-screen-label="05 Лучшие предложения" className={sectionPad}>
      <div className={container}>
        <div data-reveal className="flex flex-col gap-[18px] mb-14">
          <h2 className={sectionTitle}>Лучшие предложения</h2>
          <p className="m-0 text-[16px] text-muted">Подборка недели: новые объекты, старты продаж и квартиры в аренду</p>
        </div>

        <div className="bento">
          {bestOffers.map((o) => (
            <Link
              key={o.area}
              href={routes.object}
              data-reveal
              className="group relative block overflow-hidden bg-panel"
              style={{ gridArea: o.area, borderRadius: o.arch ? "240px 240px 8px 8px" : 8 }}
            >
              <Placeholder label={o.placeholder} className="ph-stripes" />
              <FallbackImg
                src={o.img}
                alt={o.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,13,0)_38%,rgba(0,10,13,.94)_100%)] pointer-events-none" />
              <span className="absolute left-3.5 top-3.5 px-2.5 py-1.5 rounded bg-ink/78 text-[10px] tracking-[.16em] uppercase text-cream">
                {o.badge}
              </span>
              <span className="absolute left-[26px] right-[26px] bottom-6 flex flex-col gap-2 pointer-events-none">
                <span className={`${eyebrow} text-cream`}>{o.type}</span>
                <span className="font-serif leading-[1.1] text-gold text-pretty max-w-[560px]" style={{ fontSize: o.titleSize }}>
                  {o.title}
                </span>
                <span className="flex justify-between items-baseline flex-wrap gap-x-4 gap-y-1.5 mt-1">
                  <span className="text-[13px] text-cream">{o.district} · {o.meta}</span>
                  <span className="font-serif text-[26px] text-cream">{o.price}</span>
                </span>
              </span>
            </Link>
          ))}

          <div data-reveal className="[grid-area:g] rounded-lg bg-cream p-8 flex flex-col justify-between gap-6">
            <span className={`${eyebrow} text-warm-gray`}>Каталог</span>
            <span className="font-serif text-[34px] leading-[1.1] text-ink">500+ объектов в базе агентства</span>
            <Link
              href={routes.catalog}
              className="self-start inline-flex items-center h-[46px] px-6 rounded bg-ink text-cream text-[12px] tracking-[.14em] uppercase transition-colors hover:bg-panel hover:text-gold"
            >
              Все объекты
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
