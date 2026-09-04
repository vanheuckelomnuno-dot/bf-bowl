import type { Metadata } from "next";
import { ExtraSection } from "@/components/menu/ExtraSection";
import { desserts } from "@/data/extras";

export const metadata: Metadata = {
  title: "Desserten · B&F Bowl Kontich",
  description: "Panna cotta, tiramisu, chocomousse en fresh fruit cup.",
};

export default function DessertenPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="font-heading text-3xl font-semibold text-nori">Desserten</h2>
      <div className="mt-8 max-w-md">
        <ExtraSection items={desserts} accent="ginger" />
      </div>
    </div>
  );
}
