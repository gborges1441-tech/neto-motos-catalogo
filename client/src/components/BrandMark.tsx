// Style reminder: the mark belongs to the Arquivo de Performance identity—compact, editorial and built around a red book-spine gesture.
type BrandMarkProps = { light?: boolean; compact?: boolean };

export function BrandMark({ light = false, compact = false }: BrandMarkProps) {
  return (
    <div className={`brand-lockup ${light ? "brand-lockup--light" : ""} ${compact ? "brand-lockup--compact" : ""}`}>
      <span className="brand-symbol" aria-hidden="true"><i /><i /></span>
      <span className="brand-wordmark">
        <strong>NETO</strong>
        <em>MOTOS</em>
      </span>
    </div>
  );
}

