import { describe, expect, it } from "vitest";
import { motos } from "./motos";

const approvedHeroes: Record<string, string> = {
  "jef-170": "/manus-storage/10-Galeria-JEF-170-10-1-scaled_00bb2da6.webp",
  "shi-400sc": "/manus-storage/05-Galeria-SHI-400sc-6_1c0ebcb9.webp",
  "shi-170": "/manus-storage/06-Galeria-SHI-170-6_fb34617e.webp",
  "free-150-efi": "/manus-storage/09-Galeria-FREE-150-9-1_65f89a03.webp",
  "jef-150s-efi": "/manus-storage/01-Galeria-JEF-150s-EFI-1_327f6062.webp",
  "phoenix-s-efi": "/manus-storage/10-Galeria-Phoenix-S-EFI-10-1_014a873c.webp",
  "jef-150": "/manus-storage/08-Galeria-JEF-150-3-1-scaled_a50c371c.webp",
  "sbm-400s": "/manus-storage/10-Galeria-SBM-400s-6_0dff04c4.webp",
  iron: "/manus-storage/iron-official-full-product_32f7aae9.webp",
  titanium: "/manus-storage/02-Galeria-Titanium-1-3_5a9b00c8.webp",
  "storm-200-efi": "/manus-storage/04-02_d8c81183.webp",
};

describe("heroes de catálogo padronizadas", () => {
  it("mantém somente os 32 modelos a combustão publicados", () => {
    expect(motos).toHaveLength(32);
    expect(motos.every((moto) => !/elétrica/i.test(moto.category))).toBe(true);
  });

  it("usa as fotografias oficiais aprovadas para os casos corrigidos", () => {
    for (const [id, hero] of Object.entries(approvedHeroes)) {
      const moto = motos.find((candidate) => candidate.id === id);
      expect(moto, `modelo ${id}`).toBeDefined();
      expect(moto?.images[0]?.src, `hero de ${id}`).toBe(hero);
    }
  });
});
