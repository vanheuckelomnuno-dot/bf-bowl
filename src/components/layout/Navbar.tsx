import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-nori/10 bg-rice/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/brand/logo-icon.png" alt="B&F Bowl" width={40} height={32} className="h-9 w-auto" priority />
          <span className="font-heading text-lg font-semibold text-nori">B&amp;F Bowl</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-nori/80 sm:flex">
          <Link href="/" className="hover:text-nori">
            Home
          </Link>
          <Link href="/menu" className="hover:text-nori">
            Menu
          </Link>
          <Link href="/#bowls" className="hover:text-nori">
            Signature bowls
          </Link>
          <Link href="/onze-bowls" className="hover:text-nori">
            Onze bowls
          </Link>
          <Link href="/#locatie" className="hover:text-nori">
            Locatie
          </Link>
        </div>
        <a
          href={`tel:${restaurant.telefoon.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full bg-nori px-4 py-2 text-sm font-semibold text-rice transition-colors hover:bg-salmon"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Bel ons</span>
        </a>
      </nav>
    </header>
  );
}
