import { contacts } from "@/data/site";
import { FallbackImg } from "../FallbackImg";

// Static dark map (CARTO "dark_all" tiles, zoom 14) centred on the office.
const tiles: string[] = [];
for (let y = 6026; y <= 6030; y++)
  for (let x = 11584; x <= 11590; x++) tiles.push(`https://${"abc"[(x + y) % 3]}.basemaps.cartocdn.com/dark_all/14/${x}/${y}.png`);

export function MapBlock({ label = contacts.addressShort }: { label?: string }) {
  return (
    <div className="relative w-full h-full min-h-[360px] bg-panel rounded-lg overflow-hidden">
      <div className="absolute left-[calc(50%-852px)] top-[calc(50%-530px)] w-[1792px] h-[1280px] grid grid-cols-[repeat(7,256px)] auto-rows-[256px] [filter:sepia(.35)_saturate(.9)_brightness(1.05)_contrast(1.05)]">
        {tiles.map((src) => (
          <FallbackImg key={src} src={src} loading="lazy" className="w-64 h-64 block" />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,10,13,0)_30%,rgba(0,10,13,.75)_100%)] pointer-events-none" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none">
        <div className="relative w-[52px] h-[52px] flex items-center justify-center">
          <span className="absolute -inset-1.5 border border-gold rounded motion-safe:animate-map-pulse" style={{ transform: "rotate(45deg)" }} />
          <span className="absolute inset-0 bg-gold rounded shadow-[0_12px_30px_rgba(0,0,0,.5)]" style={{ transform: "rotate(45deg)" }} />
          <span className="relative font-serif text-[17px] font-medium tracking-[.04em] text-ink">AT</span>
        </div>
        <span className="w-px h-[22px] bg-gold" />
      </div>

      <div className="absolute left-[calc(50%+44px)] top-[calc(50%-74px)] bg-ink/90 border border-gold/35 rounded-md px-4 py-3 flex flex-col gap-1">
        <span className="font-serif text-[17px] tracking-[.06em] text-gold">ALA-TOO REALTY</span>
        <span className="text-[12px] text-cream whitespace-nowrap">{label}</span>
      </div>

      {/* Attribution required by the tile licence */}
      <span className="absolute right-2 bottom-1.5 text-[9px] text-subtle/70">
        © <a href="https://www.openstreetmap.org/copyright" className="text-subtle/70">OpenStreetMap</a> ©{" "}
        <a href="https://carto.com/attributions" className="text-subtle/70">CARTO</a>
      </span>
    </div>
  );
}
