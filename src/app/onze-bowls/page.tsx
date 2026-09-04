import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Onze bowls · B&F Bowl Kontich",
  description: "Echte foto's van wat er bij ons op tafel komt — geen stockbeelden.",
};

const fotos = [
  { src: "/gallery/neon-spread.jpg", alt: "Tafel vol bowls, sushi en yakitori onder het B&F Bowl-neonbord" },
  { src: "/gallery/spread-1.jpg", alt: "Sushi rolls, gefrituurde snacks en een pokébowl op tafel" },
  { src: "/gallery/bowl-shrimp.jpg", alt: "Pokébowl met garnalen, mango, ananas en edamame" },
  { src: "/gallery/spread-2.jpg", alt: "Pokébowl, sushi rolls en yakitori met pindasaus" },
];

export default function OnzeBowlsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pb-10 pt-14 text-center">
          <h1 className="font-heading text-4xl font-semibold text-nori sm:text-5xl">
            Onze bowls
          </h1>
          <p className="mt-4 text-nori/70">
            Geen stockfoto&apos;s. Dit is wat er bij ons op tafel komt.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {fotos.map((foto) => (
              <div key={foto.src} className="relative aspect-[9/16] overflow-hidden rounded-xl">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={`tel:${restaurant.telefoon.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-nori px-7 py-3.5 text-base font-semibold text-rice transition-colors hover:bg-salmon"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Bel om te bestellen · {restaurant.telefoon}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
