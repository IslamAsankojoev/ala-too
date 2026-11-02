"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { leadRequests } from "@/data/home";
import { routes } from "@/data/site";
import { leadSchema, type Lead, type LeadFormInput } from "@/lib/lead-schema";
import { submitLead } from "@/lib/submit-lead";
import { cn, SelectChevron } from "../ui";

const line = "border-b border-cream/22 focus-within:border-gold";
const input = "bg-transparent border-0 text-cream text-[16px] py-3 outline-none";
const errorText = "mt-1.5 text-[12px] text-error";

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormInput, unknown, Lead>({ resolver: zodResolver(leadSchema), defaultValues: { request: "" } });

  const onSubmit = async (data: Lead) => {
    setFailed(false);
    try {
      await submitLead({ ...data, source: "home" });
      setSent(true);
    } catch {
      setFailed(true);
    }
  };

  return (
    <section data-screen-label="10 Заявка" className="p-0">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          data-reveal
          className="relative overflow-hidden bg-panel rounded-lg p-[clamp(32px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-x-16 gap-y-10 items-center"
        >
          <div className="flex flex-col gap-[18px]">
            <h2 className="m-0 font-serif font-light text-[clamp(32px,3.8vw,48px)] leading-[1.08] tracking-[.03em] uppercase text-cream">
              Подберём недвижимость под ваш запрос
            </h2>
            <p className="m-0 text-[15px] leading-[1.6] text-muted">Эксперт перезвонит в течение 15 минут в рабочее время</p>
          </div>

          {sent ? (
            <div className="flex flex-col gap-3" role="status">
              <span className="font-script text-[36px] text-gold">Спасибо!</span>
              <span className="text-[17px] leading-[1.6] text-cream">Заявка принята. Эксперт свяжется с вами в течение 15 минут.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-[22px]">
              <div>
                <input
                  {...register("name")}
                  placeholder="Имя"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={cn(input, line, "w-full")}
                />
                {errors.name && <p className={errorText}>{errors.name.message}</p>}
              </div>

              <div>
                <div className={cn("flex items-center gap-2.5", line)}>
                  <span className="text-[16px] text-gold">+996</span>
                  <input
                    {...register("phone")}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    placeholder="555 000 000"
                    aria-invalid={!!errors.phone}
                    className={cn(input, "flex-1 min-w-0")}
                  />
                </div>
                {errors.phone && <p className={errorText}>{errors.phone.message}</p>}
              </div>

              <label className="relative block">
                <select {...register("request")} className={cn(input, line, "w-full appearance-none pr-6")}>
                  <option value="">Что ищете?</option>
                  {leadRequests.map((o) => <option key={o}>{o}</option>)}
                </select>
                <SelectChevron className="top-[18px]" />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="self-start h-12 px-[30px] rounded border-0 bg-gold text-ink text-[12px] font-medium tracking-[.14em] uppercase transition-colors hover:bg-gold-light disabled:opacity-60"
              >
                {isSubmitting ? "Отправляем…" : "Оставить заявку"}
              </button>
              {failed && (
                <p className="m-0 text-[13px] text-error" role="alert">
                  Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.
                </p>
              )}
              <span className="text-[12px] leading-normal text-subtle">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с{" "}
                <a href={routes.privacy} className="text-muted underline">Политикой конфиденциальности</a>
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
