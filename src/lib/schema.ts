import { openingsuren, restaurant } from "@/data/restaurant";
import { siteUrl } from "@/lib/site";

const dagNamen = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function restaurantSchema() {
  const openingHoursSpecification = Object.entries(openingsuren).flatMap(([dag, blokken]) =>
    blokken.map((blok) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dagNamen[Number(dag)],
      opens: blok.van,
      closes: blok.tot,
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.naam,
    url: siteUrl,
    telephone: restaurant.telefoon.replace(/\s/g, ""),
    image: `${siteUrl}/gallery/neon-spread.jpg`,
    servesCuisine: ["Poké", "Sushi", "Hawaiian"],
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Molenstraat 38",
      addressLocality: "Kontich",
      postalCode: "2550",
      addressCountry: "BE",
    },
    menu: `${siteUrl}/menu`,
    openingHoursSpecification,
  };
}
