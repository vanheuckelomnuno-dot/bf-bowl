import type { MenuItem } from "@/types/menu";
import { formatPrijs } from "@/lib/utils";
import { allergeenLabels } from "@/lib/labels";

export function MenuSection({
  nummer,
  titel,
  toelichting,
  items,
  accent,
}: {
  nummer?: number;
  titel: string;
  toelichting?: string;
  items: MenuItem[];
  accent: "salmon" | "cucumber" | "ginger";
}) {
  const accentClass = {
    salmon: "border-salmon",
    cucumber: "border-cucumber",
    ginger: "border-ginger",
  }[accent];
  const accentText = {
    salmon: "border-salmon text-salmon",
    cucumber: "border-cucumber text-cucumber",
    ginger: "border-ginger text-ginger",
  }[accent];

  return (
    <div className={`border-l-2 ${accentClass} pl-6`}>
      <h2 className="flex items-center gap-2.5 font-heading text-2xl font-semibold text-nori">
        {nummer && (
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${accentText}`}
            aria-hidden="true"
          >
            {nummer}
          </span>
        )}
        {titel}
      </h2>
      {toelichting && <p className="mt-1 text-sm text-nori/50">{toelichting}</p>}
      <ul className="mt-5 divide-y divide-nori/10">
        {items.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-4 py-3">
            <div>
              <p className="font-medium text-nori">{item.naam}</p>
              <div className="mt-1 flex flex-wrap gap-1.5 text-xs text-nori/50">
                {item.rauw && <span>Rauw</span>}
                {item.veganistisch && <span>Veganistisch</span>}
                {!item.veganistisch && item.vegetarisch && <span>Vegetarisch</span>}
                {!item.glutenvrij && <span>Bevat gluten</span>}
                {item.allergenen.length > 0 && (
                  <span>Bevat {item.allergenen.map((a) => allergeenLabels[a]).join(", ")}</span>
                )}
                {item.pittigheid > 0 && (
                  <span className="text-salmon" aria-label={`Pittigheid ${item.pittigheid} van 3`}>
                    {"●".repeat(item.pittigheid)}
                    {"○".repeat(3 - item.pittigheid)}
                  </span>
                )}
              </div>
            </div>
            {item.prijsExtra > 0 && (
              <span className="shrink-0 text-sm font-medium text-nori/70">
                +{formatPrijs(item.prijsExtra)}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
