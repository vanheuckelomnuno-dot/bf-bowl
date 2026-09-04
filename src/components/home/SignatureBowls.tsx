import Link from "next/link";
import { itemsVoorIds, berekenKcal, berekenPrijs } from "@/lib/menu-helpers";
import { formatPrijs } from "@/lib/utils";

interface Signature {
  naam: string;
  omschrijving: string;
  itemIds: string[];
}

const signatures: Signature[] = [
  {
    naam: "De Kontich Classic",
    omschrijving: "Kip, sesam en teriyaki — de bowl die iedereen als eerste bestelt.",
    itemIds: ["witte-rijst", "kip", "komkommer", "tomaat", "mais", "wortelen", "ananas", "sesam", "teriyaki"],
  },
  {
    naam: "De Rauwe",
    omschrijving: "Rauwe zalm en nori, voor wie het puur wil houden.",
    itemIds: ["mix-rijst-sla", "zalm", "avocado", "komkommer", "edamame", "mango", "rode-biet", "nori", "sriracha-mayo"],
  },
  {
    naam: "De Pittige",
    omschrijving: "Spicy zalm, jalapeño en chili-mayo. Niet voor de zwakke tong.",
    itemIds: ["sla", "spicy-zalm", "jalapeno", "komkommer", "mais", "avocado", "rode-biet", "gefrituurde-ui", "chili-mayo"],
  },
  {
    naam: "De Garnaal",
    omschrijving: "Garnalen met mango en ananas — fris en zoetig.",
    itemIds: ["witte-rijst", "garnalen", "ananas", "mango", "komkommer", "edamame", "wortelen", "lente-ui", "sojasaus"],
  },
];

export function SignatureBowls() {
  return (
    <section id="bowls" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-nori sm:text-4xl">
          Signature bowls
        </h2>
        <p className="mt-2 max-w-md text-nori/60">
          Geen zin om te kiezen? Dit zijn vier combinaties die we zelf het vaakst maken.
        </p>
      </div>
      <div className="mt-10 flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin] sm:mx-auto sm:max-w-6xl">
        {signatures.map((sig, i) => {
          const prijs = berekenPrijs("medium", sig.itemIds);
          const kcal = berekenKcal(sig.itemIds);
          const items = itemsVoorIds(sig.itemIds);
          return (
            <div
              key={sig.naam}
              className={`shrink-0 border-l-2 pl-5 pr-2 ${i % 2 === 0 ? "border-salmon" : "border-cucumber"}`}
              style={{ width: "min(320px, 80vw)" }}
            >
              <p className="font-heading text-lg font-semibold text-nori">{sig.naam}</p>
              <p className="mt-1 text-sm text-nori/60">{sig.omschrijving}</p>
              <p className="mt-3 text-xs text-nori/40">
                {items.map((it) => it.naam).join(" · ")}
              </p>
              <p className="mt-3 text-sm font-semibold text-nori">
                {formatPrijs(prijs)} <span className="font-normal text-nori/40">· {kcal} kcal</span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6">
        <Link href="/menu" className="text-sm font-semibold text-salmon underline underline-offset-4 hover:text-nori">
          Bekijk het volledige menu →
        </Link>
      </div>
    </section>
  );
}
