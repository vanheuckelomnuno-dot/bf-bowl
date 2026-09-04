import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "B&F Bowl — Pokébowl Kontich | Poké Bowl, Desserts & More",
    template: `%s · ${siteName}`,
  },
  description:
    "De eerste pokébowlzaak van Kontich. Stel je eigen bowl samen: basis, proteïne, 5 mix-ins, topping en saus, 100% halal. Ook sushi, voorgerechten en desserten. Molenstraat 38, Kontich.",
  keywords: ["pokébowl Kontich", "poke bowl Kontich", "B&F Bowl", "halal Kontich", "sushi Kontich"],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName,
    title: "B&F Bowl — Pokébowl Kontich",
    description: "De eerste pokébowlzaak van Kontich. Stel je eigen bowl samen, 100% halal.",
    images: ["/gallery/neon-spread.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "B&F Bowl — Pokébowl Kontich",
    description: "De eerste pokébowlzaak van Kontich. Stel je eigen bowl samen, 100% halal.",
    images: ["/gallery/neon-spread.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
