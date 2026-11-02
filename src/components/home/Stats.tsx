import { stats } from "@/data/home";
import { container, sectionPad } from "../ui";

export function Stats() {
  return (
    <section data-screen-label="06 Цифры" className={sectionPad}>
      <div className={container}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] border-y border-cream/10">
          {stats.map((s) => (
            <div key={s.label} data-reveal className="py-11 px-2 flex flex-col gap-2.5">
              <span className="font-serif font-light text-[clamp(60px,6.4vw,92px)] leading-none text-gold">{s.value}</span>
              <span className="text-[12px] tracking-[.18em] uppercase text-cream">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
