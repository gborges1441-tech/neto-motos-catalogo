import { afterEach, describe, expect, it, vi } from "vitest";
import { trackEvent } from "./analytics";

describe("analytics centralizado", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("não quebra quando nenhum provedor ou ID está configurado", () => {
    expect(() => trackEvent("motorcycle_view", { model: "SHI 250" })).not.toThrow();
  });

  it("encaminha o evento ao Umami existente sem dados pessoais", () => {
    const track = vi.fn();
    vi.stubGlobal("window", { umami: { track } });

    trackEvent("whatsapp_click", {
      model: "SHI 250",
      source: "catalog",
      location: "product_page",
    });

    expect(track).toHaveBeenCalledWith("whatsapp_click", {
      model: "SHI 250",
      source: "catalog",
      location: "product_page",
    });
  });
});
