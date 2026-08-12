// Style reminder: catalogue utilities keep the printed archive precise, legible and consistent across every view.

export type CatalogFamily = "Todos" | "Street" | "Trail" | "Scooter" | "Elétrica" | "Mobilidade" | "Urbana";

export function formatChapter(index: number, total: number) {
  return `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
}

export function familyFromCategory(category: string): Exclude<CatalogFamily, "Todos"> {
  if (category.toLowerCase().includes("mobilidade")) return "Mobilidade";
  if (category.toLowerCase().includes("elétrica")) return "Elétrica";
  if (category.toLowerCase().includes("scooter")) return "Scooter";
  if (category.toLowerCase().includes("trail")) return "Trail";
  if (category.toLowerCase().includes("street")) return "Street";
  return "Urbana";
}

export const catalogFamilies: CatalogFamily[] = ["Todos", "Street", "Trail", "Scooter", "Elétrica", "Mobilidade", "Urbana"];
