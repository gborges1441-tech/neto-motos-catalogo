// Direção visual: Arquivo de Performance — editorial técnico em papel, com alternância assimétrica, benefícios em linguagem humana e imagens oficiais sem sobreposição de texto.
import { ArrowUpRight, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import type { Moto, MotoDetail } from "@/data/motos";
import { AssetImage } from "@/components/AssetImage";

type MotoEditorialProps = {
  moto: Moto;
  compact?: boolean;
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

export function MotoEditorial({ moto, compact = false }: MotoEditorialProps) {
  const engine = moto.engine ?? moto.specs.find((item) => item.label.toLowerCase().includes("cilindrada"))?.value;

  return (
    <div className={`moto-editorial ${compact ? "moto-editorial--compact" : ""}`}>
      <div className="moto-editorial__intro">
        <span className="moto-editorial__eyebrow"><Sparkles size={12} /> O que muda na prática</span>
        <p>Um olhar rápido para os componentes que mais interferem na sua rotina — sem transformar a escolha em uma lista fria de peças.</p>
      </div>

      <div className="moto-detail-list">
        {moto.details.map((detail, index) => {
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

      <section className="moto-tech-sheet" aria-labelledby={`${moto.id}-technical-title`}>
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
      </section>

      {engine && <span className="sr-only">Cilindrada: {engine}</span>}
    </div>
  );
}
