/**
 * Direção visual: Arquivo de Performance / neo-editorial automotivo.
 * O seletor trata a cor como uma decisão de configuração, não como ornamento:
 * swatches discretos, foco visível e troca imediata de mídia oficial.
 */
import type { MotoColorVariant } from "@/data/motos";

type ColorSelectorProps = {
  variants: MotoColorVariant[];
  selectedId: string | null;
  onSelect: (variant: MotoColorVariant) => void;
};

export function ColorSelector({ variants, selectedId, onSelect }: ColorSelectorProps) {
  if (variants.length < 2) return null;

  return (
    <div className="color-selector" aria-label="Acabamentos oficiais disponíveis">
      <div className="color-selector__heading">
        <span className="color-selector__label">Escolha o acabamento</span>
        <span className="color-selector__selected" aria-live="polite">
          {variants.find((variant) => variant.id === selectedId)?.name ?? "Selecione uma cor"}
        </span>
      </div>
      <div className="color-selector__options" role="radiogroup" aria-label="Cores oficiais">
        {variants.map((variant) => {
          const active = variant.id === selectedId;
          return (
            <button
              key={variant.id}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={`Selecionar acabamento ${variant.name}`}
              className={`color-selector__option ${active ? "color-selector__option--active" : ""}`}
              onClick={() => onSelect(variant)}
              onKeyDown={(event) => {
                const currentIndex = variants.findIndex((item) => item.id === variant.id);
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault();
                  const next = variants[(currentIndex + 1) % variants.length];
                  onSelect(next);
                  window.setTimeout(() => document.querySelector<HTMLButtonElement>(`[aria-label="Selecionar acabamento ${next.name}"]`)?.focus(), 0);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault();
                  const next = variants[(currentIndex - 1 + variants.length) % variants.length];
                  onSelect(next);
                  window.setTimeout(() => document.querySelector<HTMLButtonElement>(`[aria-label="Selecionar acabamento ${next.name}"]`)?.focus(), 0);
                }
                if (event.key === "Home" || event.key === "End") {
                  event.preventDefault();
                  const next = event.key === "Home" ? variants[0] : variants[variants.length - 1];
                  onSelect(next);
                  window.setTimeout(() => document.querySelector<HTMLButtonElement>(`[aria-label="Selecionar acabamento ${next.name}"]`)?.focus(), 0);
                }
              }}
            >
              <span className="color-selector__swatch" style={{ background: variant.swatch }} aria-hidden="true" />
              <span>{variant.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
