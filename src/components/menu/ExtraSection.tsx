import type { ExtraProduct } from "@/data/extras";
import { formatPrijs } from "@/lib/utils";

export function ExtraSection({
  titel,
  toelichting,
  items,
  accent,
}: {
  titel?: string;
  toelichting?: string;
  items: ExtraProduct[];
  accent: "salmon" | "cucumber" | "ginger";
}) {
  const accentClass = {
    salmon: "border-salmon",
    cucumber: "border-cucumber",
    ginger: "border-ginger",
  }[accent];

  return (
    <div className={`border-l-2 ${accentClass} pl-6`}>
      {titel && <h3 className="font-heading text-xl font-semibold text-nori">{titel}</h3>}
      {toelichting && <p className="mt-1 text-sm text-nori/50">{toelichting}</p>}
      <ul className="mt-4 divide-y divide-nori/10">
        {items.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-4 py-3">
            <div>
              <span className="font-medium text-nori">{item.naam}</span>
              {item.badge && (
                <span className="ml-2 rounded-full bg-salmon/15 px-2 py-0.5 text-xs font-semibold text-salmon">
                  {item.badge}
                </span>
              )}
              {item.beschrijving && (
                <p className="mt-0.5 text-sm italic text-nori/50">{item.beschrijving}</p>
              )}
            </div>
            <span className="shrink-0 text-sm font-medium text-nori/70">
              {formatPrijs(item.prijs)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
