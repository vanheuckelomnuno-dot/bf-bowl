import { openingsuren, type Openingsblok } from "@/data/restaurant";

export function formatPrijs(bedrag: number): string {
  return `€ ${bedrag.toFixed(2).replace(".", ",")}`;
}

interface OpenStatus {
  open: boolean;
  label: string;
}

function blokBevatTijd(blok: Openingsblok, minuten: number): boolean {
  const [vanU, vanM] = blok.van.split(":").map(Number);
  const [totU, totM] = blok.tot.split(":").map(Number);
  return minuten >= vanU * 60 + vanM && minuten < totU * 60 + totM;
}

export function getOpenStatus(now: Date): OpenStatus {
  const dag = now.getDay();
  const minuten = now.getHours() * 60 + now.getMinutes();
  const blokken = openingsuren[dag] ?? [];

  const huidigBlok = blokken.find((blok) => blokBevatTijd(blok, minuten));
  if (huidigBlok) {
    return { open: true, label: `Open tot ${huidigBlok.tot}` };
  }

  for (let i = 0; i < 8; i++) {
    const checkDag = (dag + i) % 7;
    const checkBlokken = openingsuren[checkDag] ?? [];
    for (const blok of checkBlokken) {
      const [vanU, vanM] = blok.van.split(":").map(Number);
      const blokMinuten = vanU * 60 + vanM;
      if (i > 0 || blokMinuten > minuten) {
        const dagLabel =
          i === 0 ? "vandaag" : i === 1 ? "morgen" : weekdagNaam(checkDag);
        return { open: false, label: `Gesloten · open ${dagLabel} om ${blok.van}` };
      }
    }
  }
  return { open: false, label: "Gesloten" };
}

function weekdagNaam(dag: number): string {
  return ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"][dag];
}
