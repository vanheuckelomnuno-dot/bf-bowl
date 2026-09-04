import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="border-t border-nori/10 bg-rice">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/brand/logo-icon.png" alt="" width={44} height={36} className="h-10 w-auto" aria-hidden="true" />
          <div>
            <p className="font-heading text-lg font-semibold text-nori">{restaurant.naam}</p>
            <p className="text-sm text-nori/60">{restaurant.adres}</p>
          </div>
        </div>
        <div className="flex gap-6 text-sm text-nori/60">
          <a href={restaurant.mapsUrl} className="hover:text-nori">
            Route
          </a>
          <a href={`tel:${restaurant.telefoon.replace(/\s/g, "")}`} className="hover:text-nori">
            {restaurant.telefoon}
          </a>
          <a href={restaurant.instagram} className="hover:text-nori">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
