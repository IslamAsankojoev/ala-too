"use client";

import { useState } from "react";
import { districts, propertyTypes } from "@/data/home";
import { routes } from "@/data/site";
import { cn, goldButton, SelectChevron } from "../ui";

const label = "text-[11px] tracking-[.16em] uppercase text-subtle";
const field =
  "appearance-none bg-transparent border-0 border-b border-cream/20 text-cream text-[15px] py-2.5 outline-none focus:border-gold";

/**
 * Quick search. Submits as a plain GET to the catalog page
 * (/catalog/?mode=buy&type=…&district=…&budget=…), so it works on static hosting.
 */
export function SearchBar() {
  const [mode, setMode] = useState<"buy" | "rent">("buy");

  return (
    <section data-screen-label="02 Поиск" className="relative z-[2] -mt-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <form
          action={routes.catalog}
          method="get"
          data-reveal
          className="bg-panel border border-cream/8 rounded-lg px-7 py-[22px] flex flex-wrap items-end gap-x-7 gap-y-5"
        >
          <input type="hidden" name="mode" value={mode} />
          <div className="flex gap-[22px] self-center" role="tablist">
            {(
              [
                ["Купить", "buy"],
                ["Снять", "rent"],
              ] as const
            ).map(([t, k]) => (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={mode === k}
                onClick={() => setMode(k)}
                className={cn(
                  "bg-transparent border-0 border-b py-1.5 px-0 text-[13px] tracking-[.14em] uppercase",
                  mode === k ? "text-gold border-gold" : "text-muted border-transparent",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <label className="flex-[1_1_170px] flex flex-col gap-1 relative">
            <span className={label}>Тип недвижимости</span>
            <select name="type" className={cn(field, "pr-5")}>
              {propertyTypes.map((o) => <option key={o}>{o}</option>)}
            </select>
            <SelectChevron className="bottom-[18px]" />
          </label>

          <label className="flex-[1_1_170px] flex flex-col gap-1 relative">
            <span className={label}>Район</span>
            <select name="district" className={cn(field, "pr-5")}>
              {districts.map((o) => <option key={o}>{o}</option>)}
            </select>
            <SelectChevron className="bottom-[18px]" />
          </label>

          <label className="flex-[1_1_150px] flex flex-col gap-1">
            <span className={label}>Бюджет, $</span>
            <input name="budget" inputMode="numeric" placeholder="до 300 000" className={cn(field, "w-full")} />
          </label>

          <button type="submit" className={cn(goldButton, "flex-none justify-center px-10 border-0 tracking-[.16em]")}>
            Найти
          </button>
        </form>
      </div>
    </section>
  );
}
