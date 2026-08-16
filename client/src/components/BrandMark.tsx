// Style reminder: the mark belongs to the Arquivo de Performance identity—compact, editorial and built around a red book-spine gesture.
import { assetUrl } from "@/lib/assetUrl";

type BrandMarkProps = { light?: boolean; compact?: boolean };

export function BrandMark({ light = false, compact = false }: BrandMarkProps) {
  return (
    <div className={`brand-lockup ${light ? "brand-lockup--light" : ""} ${compact ? "brand-lockup--compact" : ""}`} role="img" aria-label="Neto Motos">
      <img className="brand-lockup__asset" src={assetUrl("/manus-storage/neto-motos-horizontal-logo-integrated_20328818.png")} alt="" />
    </div>
  );
}
