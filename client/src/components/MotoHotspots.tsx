// Style reminder: hotspots are technical editorial callouts—thin lines, deliberate pulses and no decorative clutter.
import { Crosshair, X } from "lucide-react";
import { MotoHotspot } from "@/data/motos";

type MotoHotspotsProps = {
  hotspots: MotoHotspot[];
  activeId: string | null;
  onSelect: (hotspot: MotoHotspot | null) => void;
};

export function MotoHotspots({ hotspots, activeId, onSelect }: MotoHotspotsProps) {
  const active = hotspots.find((hotspot) => hotspot.id === activeId) ?? null;

  if (hotspots.length === 0) return null;

  return (
    <div className={`moto-hotspots ${active ? "moto-hotspots--active" : ""}`}>
      <div className="hotspot-note"><Crosshair size={12} /> toque para ver a ficha</div>
      {hotspots.map((hotspot) => (
        <button
          key={hotspot.id}
          type="button"
          className={`hotspot-pin ${activeId === hotspot.id ? "hotspot-pin--active" : ""}`}
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
          onClick={() => onSelect(activeId === hotspot.id ? null : hotspot)}
          aria-label={`Explorar ${hotspot.label}`}
          aria-pressed={activeId === hotspot.id}
        >
          <span className="hotspot-ring" />
          <span className="hotspot-dot" />
        </button>
      ))}
      {active && (
        <div className="hotspot-card" role="dialog" aria-label={`Detalhe técnico: ${active.label}`}>
          <button type="button" className="hotspot-close" onClick={() => onSelect(null)} aria-label="Fechar detalhe"><X size={14} /></button>
          <span className="hotspot-card__eyebrow">{active.label}</span>
          <strong>{active.value}</strong>
          <p>{active.detail}</p>
        </div>
      )}
    </div>
  );
}
