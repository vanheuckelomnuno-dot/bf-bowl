import { openingsuren, restaurant } from "@/data/restaurant";
import { OpenStatus } from "./OpenStatus";

const dagNamen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

export function Praktisch() {
  return (
    <section id="locatie" className="py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-nori sm:text-4xl">
            Langskomen
          </h2>
          <p className="mt-4 text-nori/70">{restaurant.adres}</p>
          <a href={restaurant.mapsUrl} className="mt-1 inline-block text-sm font-medium text-salmon underline underline-offset-4">
            Route via Google Maps
          </a>
          <span className="ml-2 text-sm text-nori/50">· Gratis parking</span>
          <p className="mt-4">
            <a href={`tel:${restaurant.telefoon.replace(/\s/g, "")}`} className="text-nori/70 hover:text-nori">
              {restaurant.telefoon}
            </a>
          </p>
          <div className="mt-4">
            <OpenStatus />
          </div>
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-nori">Openingsuren</h3>
          <dl className="mt-3 space-y-1.5 text-sm">
            {dagNamen.map((naam, i) => {
              const blokken = openingsuren[i] ?? [];
              return (
                <div key={naam} className="flex justify-between border-b border-nori/10 py-1.5">
                  <dt className="text-nori/60">{naam}</dt>
                  <dd className="text-nori">
                    {blokken.length === 0
                      ? "Gesloten"
                      : blokken.map((b) => `${b.van}–${b.tot}`).join(", ")}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
