export type CategorieId = "basis" | "proteine" | "mixin" | "topping" | "saus";

export type Allergeen =
  | "gluten"
  | "vis"
  | "schaaldieren"
  | "ei"
  | "melk"
  | "soja"
  | "sesam";

export interface MenuItem {
  id: string;
  naam: string;
  categorie: CategorieId;
  prijsExtra: number;
  kcal: number;
  allergenen: Allergeen[];
  vegetarisch: boolean;
  veganistisch: boolean;
  glutenvrij: boolean;
  rauw: boolean;
  pittigheid: 0 | 1 | 2 | 3;
}

export interface Bowlformaat {
  id: "medium" | "large";
  naam: string;
  prijs: number;
  aantalMixins: number;
}
