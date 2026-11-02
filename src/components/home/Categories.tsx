import Link from "next/link";
import { categories } from "@/data/home";
import { routes } from "@/data/site";
import { FallbackImg } from "../FallbackImg";
import { container, sectionPad, sectionTitle } from "../ui";

export function Categories() {
  return (
    <section data-screen-label="03 Категории" className={sectionPad}>
      <div className={container}>
        <h2 data-reveal className={`${sectionTitle} mb-[72px]`}>
          Подобрать
          <br />
          недвижимость
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-x-7 gap-y-14">
          {categories.map((c) => (
            <div key={c.heading} data-reveal className="flex flex-col gap-5">
              <div className="flex justify-between items-baseline pb-3.5 border-b border-cream/10">
                <span className="font-serif text-[30px] tracking-[.03em] uppercase text-cream">{c.heading}</span>
                <Link href={routes.catalog} className="text-[12px] tracking-[.14em] uppercase text-gold">Все →</Link>
              </div>
              <div className="flex flex-col gap-[46px] pt-7">
                {c.items.map((t) => (
                  <Link
                    key={t.title}
                    href={routes.catalog}
                    className="relative flex flex-col justify-between h-[136px] px-6 py-[22px] rounded-lg bg-panel border border-cream/6 transition-colors duration-[400ms] hover:bg-panel-hover"
                  >
                    <span className="relative z-[1] text-[17px] leading-[1.3] text-cream max-w-[52%]">{t.title}</span>
                    <span className="relative z-[1] text-[12px] text-muted">{t.count}</span>
                    <FallbackImg
                      src={t.img}
                      loading="lazy"
                      className="absolute -right-1.5 bottom-0 h-[150%] max-w-[58%] object-contain object-right-bottom pointer-events-none"
                      style={{ transform: t.flip ? "scaleX(-1)" : undefined, opacity: t.flip ? 0.7 : 1 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
