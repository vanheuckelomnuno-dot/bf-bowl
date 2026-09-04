import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/onze-bowls", label: "Onze bowls" },
  { href: "/#locatie", label: "Locatie" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-nori/10 bg-rice/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/brand/logo-icon.png" alt="B&F Bowl" width={40} height={32} className="h-9 w-auto" priority />
          <span className="font-heading text-lg font-semibold text-nori">B&amp;F Bowl</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-nori/80 sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-nori">
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href={`tel:${restaurant.telefoon.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full bg-nori px-4 py-2 text-sm font-semibold text-rice transition-colors hover:bg-salmon"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Bel ons</span>
        </a>
      </nav>
      <div className="border-t border-nori/10 sm:hidden">
        <ul className="flex gap-5 overflow-x-auto px-6 py-2.5 text-sm font-medium text-nori/80">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link href={link.href} className="hover:text-nori">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
