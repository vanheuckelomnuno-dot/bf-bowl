import type { Metadata } from "next";
import { ExtraSection } from "@/components/menu/ExtraSection";
import { starters } from "@/data/extras";

export const metadata: Metadata = {
  title: "Voorgerechten · B&F Bowl Kontich",
  description: "Sweet potatos, dynamite shrimps, chicken tenders, loaded fries en kipsaté teriyaki.",
};

export default function VoorgerechtenPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="font-heading text-3xl font-semibold text-nori">Voorgerechten</h2>
      <div className="mt-8 max-w-md">
        <ExtraSection items={starters} accent="salmon" />
      </div>
    </div>
  );
}
