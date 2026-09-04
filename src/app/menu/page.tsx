import { MenuSection } from "@/components/menu/MenuSection";
import { bowlformaten, menuItemsPerCategorie } from "@/data/menu";
import { formatPrijs } from "@/lib/utils";

export default function PokebowlsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="font-heading text-3xl font-semibold text-nori">Pokébowls</h2>
      <p className="mt-1 text-nori/60">Stel je eigen bowl samen.</p>
      <div className="mt-5 flex items-center gap-8 rounded-2xl border border-nori/10 bg-white/50 px-6 py-4">
        {bowlformaten.map((f) => (
          <div key={f.id}>
            <p className="text-sm text-nori/50">{f.naam}</p>
            <p className="font-heading text-2xl font-semibold text-nori">{formatPrijs(f.prijs)}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-12 sm:grid-cols-2">
        <MenuSection nummer={2} titel="Basis" items={menuItemsPerCategorie("basis")} accent="cucumber" />
        <MenuSection nummer={3} titel="Proteïne" items={menuItemsPerCategorie("proteine")} accent="salmon" />
        <MenuSection nummer={4} titel="Saus" items={menuItemsPerCategorie("saus")} accent="ginger" />
        <MenuSection
          nummer={5}
          titel="Mix-ins"
          toelichting="Kies er vijf"
          items={menuItemsPerCategorie("mixin")}
          accent="cucumber"
        />
        <MenuSection nummer={6} titel="Topping" items={menuItemsPerCategorie("topping")} accent="salmon" />
      </div>
    </div>
  );
}
