import { bowlformaten, menuItems } from "@/data/menu";
import type { Bowlformaat } from "@/types/menu";

export function itemsVoorIds(ids: string[]) {
  return ids
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is (typeof menuItems)[number] => Boolean(item));
}

export function berekenPrijs(formaat: Bowlformaat["id"], itemIds: string[]): number {
  const basis = bowlformaten.find((f) => f.id === formaat)?.prijs ?? 0;
  const extras = itemsVoorIds(itemIds).reduce((som, item) => som + item.prijsExtra, 0);
  return basis + extras;
}

export function berekenKcal(itemIds: string[]): number {
  return itemsVoorIds(itemIds).reduce((som, item) => som + item.kcal, 0);
}
