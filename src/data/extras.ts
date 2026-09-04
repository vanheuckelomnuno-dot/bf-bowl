export interface ExtraProduct {
  id: string;
  naam: string;
  beschrijving?: string;
  prijs: number;
  badge?: string;
}

export const starters: ExtraProduct[] = [
  { id: "sweet-potatos", naam: "Sweet Potatos", prijs: 4.5 },
  { id: "dynamite-shrimps", naam: "Dynamite Shrimps", prijs: 12.5, badge: "Nieuw" },
  { id: "chicken-tenders", naam: "Chicken Tenders", prijs: 5.5 },
  { id: "loaded-fries-klein", naam: "Loaded Fries · klein", prijs: 6.5 },
  { id: "loaded-fries-groot", naam: "Loaded Fries · groot", prijs: 12.5 },
  { id: "kipsate-teriyaki", naam: "Kipsaté Teriyaki", prijs: 4.5 },
];

export const sushiFriedRolls: ExtraProduct[] = [
  { id: "fried-zalm", naam: "Zalm", prijs: 13 },
  { id: "fried-tonijn", naam: "Tonijn", prijs: 14 },
  { id: "fried-kip", naam: "Kip", prijs: 10 },
  { id: "fried-scampi", naam: "Scampi", prijs: 12 },
];

export const sushiInOut: ExtraProduct[] = [
  { id: "inout-kip", naam: "Kip", prijs: 9 },
  { id: "inout-scampi", naam: "Scampi", prijs: 9 },
  { id: "inout-surimi", naam: "Surimi", prijs: 9 },
  { id: "inout-zalm", naam: "Zalm", prijs: 10 },
  { id: "inout-tonijn", naam: "Tonijn", prijs: 12 },
];

export const desserts: ExtraProduct[] = [
  {
    id: "panna-cotta-mango",
    naam: "Panna Cotta mango",
    beschrijving: "Room dessertje met mango coulis",
    prijs: 3.8,
  },
  {
    id: "panna-cotta-rood-fruit",
    naam: "Panna Cotta rood fruit",
    beschrijving: "Room dessertje met frambozencoulis en vers fruit",
    prijs: 4.5,
  },
  {
    id: "tiramisu-speculoos",
    naam: "Tiramisu Speculoos",
    beschrijving: "Tiramisuvulling met speculooskoekjes",
    prijs: 3.8,
  },
  {
    id: "tiramisu-dubai",
    naam: "Tiramisu Dubai",
    beschrijving: "Tiramisuvulling met kadayif en verse pistache pasta",
    prijs: 4.5,
  },
  {
    id: "chocomousse",
    naam: "Chocomousse",
    prijs: 3.8,
  },
  {
    id: "fresh-fruit-cup",
    naam: "Fresh Fruit Cup",
    beschrijving: "Met chocolade (+ € 1,00)",
    prijs: 5.0,
  },
];

// Alles hieronder is één vaste prijs, zoals op het bord in de zaak.
export const drankenPrijs = 2.5;
export const dranken: string[] = [
  "Water",
  "Bruiswater",
  "Cola",
  "Cola Zero",
  "Fanta",
  "Ice Tea",
  "Ice Tea Peach",
  "Gini",
  "Red Bull",
];
