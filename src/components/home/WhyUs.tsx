import { reasons } from "@/data/home";
import { sectionPad, sectionTitle } from "../ui";

export function WhyUs() {
  return (
    <section data-screen-label="07 Почему мы" className={sectionPad}>
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-x-20 gap-y-14">
        <div data-reveal className="flex flex-col gap-6">
          <h2 className={sectionTitle}>
            Почему
            <br />
            выбирают нас
          </h2>
          <span className="font-script text-[30px] text-gold">спокойная сделка</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-10 gap-y-12">
          {reasons.map((w) => (
            <div key={w.n} data-reveal className="flex flex-col gap-3.5 pt-[22px] border-t border-gold/40">
              <span className="font-serif text-[22px] text-gold">{w.n}</span>
              <span className="text-[19px] leading-[1.35] text-cream">{w.title}</span>
              <span className="text-[14px] leading-[1.6] text-muted">{w.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
