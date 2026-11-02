import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Marck_Script } from "next/font/google";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import "./globals.css";

// Fonts are downloaded at build time and self-hosted inside ./out — no runtime calls to Google.
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const jost = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});
const marck = Marck_Script({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-marck",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ala-Too Realty — агентство недвижимости в Бишкеке",
  description:
    "Помогаем купить, продать и сдать квартиры, дома и коммерческую недвижимость в Бишкеке и Чуйской области. Полное юридическое сопровождение сделки.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000A0D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${jost.variable} ${marck.variable}`}>
      <body>
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
