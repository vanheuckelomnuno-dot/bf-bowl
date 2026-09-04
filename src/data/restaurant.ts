export interface Openingsblok {
  van: string; // "HH:mm"
  tot: string; // "HH:mm"
}

export const openingsuren: Record<number, Openingsblok[]> = {
  0: [{ van: "14:00", tot: "22:00" }], // zondag
  1: [{ van: "11:30", tot: "14:00" }, { van: "16:00", tot: "21:00" }],
  2: [{ van: "11:30", tot: "14:00" }, { van: "16:00", tot: "21:00" }],
  3: [], // woensdag: gesloten
  4: [{ van: "11:30", tot: "14:00" }, { van: "16:00", tot: "21:00" }],
  5: [{ van: "11:30", tot: "14:00" }, { van: "16:00", tot: "21:00" }],
  6: [{ van: "14:00", tot: "22:00" }], // zaterdag
};

export const restaurant = {
  naam: "B&F Bowl",
  tagline: "Poké Bowl · Desserts & More",
  adres: "Molenstraat 38, 2550 Kontich",
  telefoon: "+32 465 03 08 01",
  instagram: "https://instagram.com/bf.bowl",
  halal: true,
  mapsUrl: "https://maps.google.com/?q=Molenstraat+38+Kontich",
};
