"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/menu", label: "Pokébowls" },
  { href: "/menu/voorgerechten", label: "Voorgerechten" },
  { href: "/menu/sushi", label: "Sushi's" },
  { href: "/menu/dranken", label: "Dranken" },
  { href: "/menu/desserten", label: "Desserten" },
];

export function MenuTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Menu categorieën"
      className="sticky top-[57px] z-30 border-y border-nori/10 bg-rice/95 backdrop-blur"
    >
      <ul className="mx-auto flex max-w-4xl gap-6 overflow-x-auto px-6 text-sm font-medium">
        {tabs.map((tab) => {
          const actief = pathname === tab.href;
          return (
            <li key={tab.href} className="shrink-0">
              <Link
                href={tab.href}
                aria-current={actief ? "page" : undefined}
                className={`inline-block border-b-2 py-3.5 transition-colors ${
                  actief
                    ? "border-salmon text-nori"
                    : "border-transparent text-nori/60 hover:text-nori"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
