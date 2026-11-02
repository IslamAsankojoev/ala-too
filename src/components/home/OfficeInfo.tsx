import { contacts } from "@/data/site";
import { eyebrow, goldButton, sectionTitle } from "../ui";
import { MapBlock } from "./MapBlock";

const label = `${eyebrow} text-subtle`;

export function OfficeInfo() {
  return (
    <section data-screen-label="11 Наш офис" className="py-[clamp(88px,11vw,150px)]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-10 items-stretch">
        <div data-reveal className="lg:col-span-2 min-h-[460px]">
          <MapBlock />
        </div>
        <div data-reveal className="flex flex-col justify-center gap-[26px]">
          <h2 className={sectionTitle}>Наш офис</h2>
          <div className="flex flex-col gap-1.5">
            <span className={label}>Адрес</span>
            <span className="text-[18px] leading-normal text-cream">{contacts.address}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label}>Телефон</span>
            <a href={contacts.phoneHref} className="font-serif text-[30px] text-gold">{contacts.phone}</a>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label}>Часы работы</span>
            <span className="text-[16px] text-cream">{contacts.hours}</span>
          </div>
          <a href={contacts.whatsapp} className={`${goldButton} self-start px-7`}>Написать нам</a>
        </div>
      </div>
    </section>
  );
}
