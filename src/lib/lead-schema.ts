import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя"),
  // Local Kyrgyz number after +996: 9 digits, spaces/dashes allowed
  phone: z
    .string()
    .transform((v) => v.replace(/[\s()-]/g, ""))
    .pipe(z.string().regex(/^\d{9}$/, "Введите 9 цифр номера")),
  request: z.string().optional(),
});

export type LeadFormInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;
