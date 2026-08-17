// Direção visual: Arquivo de Performance — editorial técnico em papel, com alternância assimétrica, benefícios em linguagem humana e imagens oficiais sem sobreposição de texto.
import { ArrowUpRight, ChevronDown, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import type { Moto, MotoDetail } from "@/data/motos";
import { AssetImage } from "@/components/AssetImage";

type MotoEditorialProps = {
  moto: Moto;
  compact?: boolean;
  detailsOnly?: boolean;
  technicalOpen?: boolean;
  onTechnicalToggle?: () => void;
};

function benefitFor(detail: MotoDetail) {
  const title = detail.title.toUpperCase();
  if (title.includes("PAINEL")) return "Menos distração para acompanhar o caminho.";
  if (title.includes("ABS") || title.includes("FREIO") || title.includes("DISCO")) return "Mais controle quando a frenagem pede atenção.";
  if (title.includes("SUSPENSÃO") || title.includes("MONOSHOCK") || title.includes("GARFO")) return "Mais conforto quando o piso muda.";
  if (title.includes("RODA")) return "Mais estabilidade para manter a trajetória.";
  if (title.includes("LED") || title.includes("ILUMINAÇÃO")) return "Mais presença quando a luz muda.";
  if (title.includes("MOTOR") || title.includes("INJEÇÃO") || title.includes("CVT")) return "Uma resposta mais alinhada ao seu ritmo.";
  if (title.includes("GUARDA") || title.includes("USB") || title.includes("CAVALETE")) return "Mais praticidade entre um compromisso e outro.";
  return "Uma decisão mais segura porque o conjunto faz sentido.";
}

function detailImage(moto: Moto, detail: MotoDetail, index: number) {
  return detail.image ?? moto.images[index + 1] ?? moto.images[0];
}

export function MotoEditorial({ moto, compact = false, detailsOnly = false, technicalOpen = false, onTechnicalToggle }: MotoEditorialProps) {
  const engine = moto.engine ?? moto.specs.find((item) => item.label.toLowerCase().includes("cilindrada"))?.value;
  const featuredDetails: MotoDetail[] = moto.details.length >= 3
    ? moto.details.slice(0, 3)
    : moto.highlights.slice(0, 3).map((highlight, index) => ({
      title: `DESTAQUE ${String(index + 1).padStart(2, "0")}`,
      headline: highlight,
      description: moto.audience,
      image: moto.images[index + 1] ?? moto.images[0],
      source: moto.source,
    }));

  return (
    <div className={`moto-editorial ${compact ? "moto-editorial--compact" : ""} ${detailsOnly ? "moto-editorial--details-only" : ""}`}>
      {!detailsOnly && <div className="moto-editorial__intro">
        <span className="moto-editorial__eyebrow"><Sparkles size={12} /> O que muda na prática</span>
        <p>Um olhar rápido para os componentes que mais interferem na sua rotina — sem transformar a escolha em uma lista fria de peças.</p>
      </div>}

      <div className="moto-detail-list">
        {featuredDetails.map((detail, index) => {
          const image = detailImage(moto, detail, index);
          return (
            <article className={`moto-detail ${index % 2 ? "moto-detail--reverse" : ""}`} key={`${moto.id}-${detail.title}`}>
              <div className="moto-detail__visual">
                <AssetImage src={image.src} alt={image.alt} fallbackLabel={moto.name} loading="lazy" decoding="async" />
              </div>
              <div className="moto-detail__copy">
                <span className="moto-detail__index">0{index + 1} / {detail.title}</span>
                <h3>{detail.headline}</h3>
                <p>{detail.description}</p>
                <span className="moto-detail__benefit"><b>Na sua rotina</b>{benefitFor(detail)}</span>
              </div>
            </article>
          );
        })}
      </div>

      {!detailsOnly && <div className="moto-tech-sheet__action">
        <div>
          <span className="moto-editorial__eyebrow"><Ruler size={12} /> Dados oficiais do modelo</span>
          <p>Compare os números do conjunto quando quiser aprofundar a escolha.</p>
        </div>
        <button className="moto-tech-sheet__trigger" type="button" aria-expanded={technicalOpen} aria-controls={`${moto.id}-technical-sheet`} onClick={onTechnicalToggle}>
          <span>{technicalOpen ? "Fechar ficha técnica" : "Abrir ficha técnica"}</span>
          <ChevronDown size={17} aria-hidden="true" />
        </button>
      </div>}

      {!detailsOnly && technicalOpen && <section id={`${moto.id}-technical-sheet`} className="moto-tech-sheet" aria-labelledby={`${moto.id}-technical-title`}>
        <div className="moto-tech-sheet__heading">
          <span className="moto-editorial__eyebrow"><Ruler size={12} /> Dados oficiais do modelo</span>
          <h2 id={`${moto.id}-technical-title`}>Ficha técnica<br /><em>antes da decisão.</em></h2>
          <p>Os números ajudam a comparar o que realmente importa para o seu uso.</p>
        </div>
        <div className="moto-tech-sheet__grid">
          {moto.specs.map((spec) => (
            <div className="moto-tech-sheet__item" key={`${moto.id}-${spec.label}`}>
              <span>{spec.label}</span>
              <b>{spec.value}</b>
            </div>
          ))}
        </div>
        <div className="moto-tech-sheet__foot">
          <span><ShieldCheck size={13} /> Especificações podem sofrer alterações.</span>
          <a href={moto.source} target="_blank" rel="noreferrer">Fonte oficial <ArrowUpRight size={12} /></a>
        </div>
      </section>}

      {engine && <span className="sr-only">Cilindrada: {engine}</span>}
    </div>
  );
}
