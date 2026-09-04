import type { Metadata } from "next";
import { ExtraSection } from "@/components/menu/ExtraSection";
import { sushiFriedRolls, sushiInOut } from "@/data/extras";

export const metadata: Metadata = {
  title: "Sushi's · B&F Bowl Kontich",
  description: "Fried rolls en in/out sushi met zalm, tonijn, kip, scampi en surimi.",
};

export default function SushiPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="font-heading text-3xl font-semibold text-nori">Sushi&apos;s</h2>
      <div className="mt-8 grid gap-12 sm:grid-cols-2">
        <ExtraSection titel="Fried rolls" items={sushiFriedRolls} accent="salmon" />
        <ExtraSection titel="In / Out" items={sushiInOut} accent="cucumber" />
      </div>
    </div>
  );
}
