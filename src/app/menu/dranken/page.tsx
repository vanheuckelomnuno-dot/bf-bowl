import type { Metadata } from "next";
import { dranken, drankenPrijs } from "@/data/extras";
import { formatPrijs } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dranken · B&F Bowl Kontich",
  description: "Water, frisdrank, ice tea en Red Bull, allemaal aan dezelfde prijs.",
};

export default function DrankenPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="font-heading text-3xl font-semibold text-nori">Dranken</h2>
      <p className="mt-1 text-nori/60">Alles {formatPrijs(drankenPrijs)}</p>
      <ul className="mt-8 flex max-w-xl flex-wrap gap-2.5">
        {dranken.map((naam) => (
          <li
            key={naam}
            className="rounded-full border border-nori/15 bg-white/60 px-4 py-2 text-sm text-nori/80"
          >
            {naam}
          </li>
        ))}
      </ul>
    </div>
  );
}
