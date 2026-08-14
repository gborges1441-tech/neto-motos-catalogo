// Style reminder: catalogue utilities keep the printed archive precise, legible and consistent across every view.

export type CatalogFamily = "Todos" | "Street" | "Trail" | "Scooter" | "Sport" | "Naked" | "Urbana";
export type CatalogBrand = "Todas as marcas" | "SHINERAY" | "SBM";

export function formatChapter(index: number, total: number) {
  return `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
}

export function formatFolio(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function familyFromCategory(category: string): Exclude<CatalogFamily, "Todos"> {
  if (category.toLowerCase().includes("scooter")) return "Scooter";
  if (category.toLowerCase().includes("trail")) return "Trail";
  if (category.toLowerCase().includes("street")) return "Street";
  if (category.toLowerCase().includes("sport")) return "Sport";
  if (category.toLowerCase().includes("naked")) return "Naked";
  return "Urbana";
}

export const catalogFamilies: CatalogFamily[] = ["Todos", "Street", "Trail", "Scooter", "Sport", "Naked", "Urbana"];
export const catalogBrands: CatalogBrand[] = ["Todas as marcas", "SHINERAY", "SBM"];

export type PriceRange = "Todos" | "Até R$ 15 mil" | "R$ 15–25 mil" | "Acima de R$ 25 mil";

export const catalogPriceRanges: PriceRange[] = ["Todos", "Até R$ 15 mil", "R$ 15–25 mil", "Acima de R$ 25 mil"];

export function numericPrice(price: string) {
  const normalized = price.replace(/[^\d,]/g, "").replace(/\./g, "").replace(",", ".");
  const value = Number(normalized);
  return Number.isFinite(value) ? value : 0;
}

export function priceInRange(price: string, range: PriceRange) {
  if (range === "Todos") return true;
  const value = numericPrice(price);
  if (range === "Até R$ 15 mil") return value > 0 && value <= 15000;
  if (range === "R$ 15–25 mil") return value > 15000 && value <= 25000;
  return value > 25000;
}
