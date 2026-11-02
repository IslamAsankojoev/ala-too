import Link from "next/link";
import { ownerServices } from "@/data/home";
import { routes } from "@/data/site";
import { FallbackImg } from "../FallbackImg";
import { container, eyebrow, sectionPad, sectionTitle } from "../ui";

export function Owners() {
  return (
    <section data-screen-label="04 Собственникам" className={sectionPad}>
      <div className={container}>
        <div data-reveal className="flex flex-wrap justify-between items-end gap-5 mb-14">
          <h2 className={sectionTitle}>Собственникам</h2>
          <Link href={routes.owners} className="text-[12px] tracking-[.14em] uppercase text-gold border-b border-gold/50 pb-[3px]">
            Все услуги
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] gap-6">
          {ownerServices.map((o) => (
            <Link
              key={o.title}
              href={routes.owners}
              data-reveal
              className="relative flex flex-col justify-between min-h-[440px] p-10 rounded-lg bg-panel overflow-hidden"
            >
              <FallbackImg
                src={o.img}
                loading="lazy"
                className="absolute right-0 bottom-0 w-[68%] h-full object-cover object-center [mask-image:linear-gradient(90deg,transparent_0%,#000_45%)]"
              />
              <div className="relative flex flex-col gap-3.5 max-w-[300px]">
                <span className={`${eyebrow} text-muted`}>{o.eyebrow}</span>
                <span className="font-serif text-[clamp(30px,3vw,40px)] leading-[1.08] uppercase tracking-[.03em] text-gold">{o.title}</span>
                <span className="text-[15px] leading-[1.6] text-cream">{o.text}</span>
              </div>
              <span className="relative self-start inline-flex items-center h-11 px-[22px] rounded bg-cream text-ink text-[12px] font-medium tracking-[.14em] uppercase">
                {o.button}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
