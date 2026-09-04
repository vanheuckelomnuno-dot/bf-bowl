import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuTabs } from "@/components/menu/MenuTabs";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Menu · B&F Bowl Kontich",
  description:
    "Het volledige menu van B&F Bowl: pokébowls, voorgerechten, sushi, dranken en desserten. Bel om te bestellen.",
};

export default function MenuLayout({ children }: LayoutProps<"/menu">) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pb-8 pt-14 text-center">
          <h1 className="font-heading text-4xl font-semibold text-nori sm:text-5xl">
            Het menu
          </h1>
          <p className="mt-3 font-heading text-lg italic text-cucumber">
            Good food, good mood.
          </p>
          <a
            href={`tel:${restaurant.telefoon.replace(/\s/g, "")}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-nori px-7 py-3.5 text-base font-semibold text-rice transition-colors hover:bg-salmon"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Bel om te bestellen · {restaurant.telefoon}
          </a>
        </section>
        <MenuTabs />
        <div className="py-14">{children}</div>
      </main>
      <Footer />
    </>
  );
}
