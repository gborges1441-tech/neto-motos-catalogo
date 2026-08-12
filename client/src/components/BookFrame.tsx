// Style reminder: the book frame is the hero interaction of Arquivo de Performance—material, asymmetric and intentionally editorial.
import { ArrowLeft, ArrowRight, Bookmark, ChevronLeft, ChevronRight, Grid2X2, Image as ImageIcon, Info, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Moto, MotoHotspot } from "@/data/motos";
import { BrandMark } from "@/components/BrandMark";
import { MotoHotspots } from "@/components/MotoHotspots";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type BookFrameProps = {
  motos: Moto[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onOpenIndex: () => void;
  onOpenAbout: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
};

export function BookFrame({ motos, activeIndex, onIndexChange, onOpenIndex, onOpenAbout, soundEnabled, onToggleSound }: BookFrameProps) {
  const [turning, setTurning] = useState<"next" | "prev" | null>(null);
  const [turnTarget, setTurnTarget] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const pointerStart = useRef<number | null>(null);
  const current = motos[activeIndex];

  useEffect(() => {
    setSelectedImage(0);
    setActiveHotspot(null);
  }, [activeIndex]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") requestPage(activeIndex + 1, "next");
      if (event.key === "ArrowLeft") requestPage(activeIndex - 1, "prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function pageSound(direction: "next" | "prev") {
    if (!soundEnabled || typeof window === "undefined") return;
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(direction === "next" ? 720 : 520, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(160, context.currentTime + 0.12);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.045, context.currentTime + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.14);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.16);
    window.setTimeout(() => void context.close(), 260);
  }

  function requestPage(nextIndex: number, direction: "next" | "prev") {
    if (turning || nextIndex < 0 || nextIndex >= motos.length) return;
    setTurning(direction);
    setTurnTarget(nextIndex);
    pageSound(direction);
    window.setTimeout(() => {
      onIndexChange(nextIndex);
      setTurning(null);
    }, 560);
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    pointerStart.current = event.clientX;
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < 55) return;
    requestPage(activeIndex + (distance < 0 ? 1 : -1), distance < 0 ? "next" : "prev");
  }

  return (
    <main className="catalog-workspace">
      <div className="catalog-3d-field" aria-hidden="true"><span /><span /><span /></div>
      <header className="catalog-header">
        <BrandMark light compact />
        <div className="catalog-header__center">
          <span>Catálogo digital</span>
          <b>2026</b>
        </div>
        <div className="catalog-header__actions">
          <button className="header-link" type="button" onClick={onOpenAbout}><Info size={14} /> <span>Sobre o Neto</span></button>
          <button className="header-link" type="button" onClick={onOpenIndex}><Grid2X2 size={14} /> <span>Índice</span></button>
          <button className="header-link header-link--sound" type="button" onClick={onToggleSound} aria-pressed={soundEnabled}><span className={`sound-led ${soundEnabled ? "sound-led--on" : ""}`} />{soundEnabled ? "Som" : "Mudo"}</button>
        </div>
      </header>

      <div className="catalog-rule" />

      <section className="book-shell" aria-label="Catálogo interativo de motocicletas" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        <div className="book-topline">
          <span><span className="live-dot" /> Neto Motos / Shineray</span>
          <span className="book-topline__hint"><MousePointer2 size={12} /> arraste para folhear</span>
        </div>
        <div className="book-spread" data-turning={turning ?? "idle"}>
          <div className="book-page book-page--left">
            <div className="page-grain" />
            <div className="left-page__top">
              <span className="chapter-index">{current.eyebrow}</span>
              <Bookmark size={16} strokeWidth={1.3} />
            </div>
            <div className="left-page__content">
              <span className="page-kicker">NETO MOTOS / SHINERAY</span>
              <h1>{current.name}</h1>
              <p className="lead-copy">{current.description}</p>
              <div className="red-stroke" />
              <p className="copy-line">{current.copyLine}</p>
              <p className="editorial-copy">{current.audience}</p>
              <div className="highlight-list">
                {current.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
              </div>
            </div>
            <div className="price-block page-price"><span>A partir de</span><b>{current.price}</b><small>Ref. oficial · confirme com o Neto.</small></div>
            <div className="left-page__footer">
              <div className="page-footer-note"><span>01</span><small>arquivo de performance</small></div>
              <button className="about-teaser" type="button" onClick={onOpenAbout}><span className="about-teaser__avatar"><img src="/manus-storage/neto-portrait_06c154c2.jpg" alt="Neto, da Neto Motos" /></span><span><b>Atendimento de verdade.</b><small>Conheça o Neto</small></span><ArrowRight size={14} /></button>
            </div>
          </div>

          <div className="book-gutter" aria-hidden="true"><span /></div>

          <div className="book-page book-page--right">
            <div className="page-grain" />
            <div className="right-page__meta"><span>{current.category}</span><span>NETO / {String(activeIndex + 1).padStart(2, "0")} — 04</span></div>
            <div className="moto-visual">
              <div className="moto-visual__wash" />
              <img key={current.images[selectedImage].src} src={current.images[selectedImage].src} alt={current.images[selectedImage].alt} loading={activeIndex === 0 ? "eager" : "lazy"} />
              <MotoHotspots hotspots={current.hotspots} activeId={activeHotspot} onSelect={(hotspot: MotoHotspot | null) => setActiveHotspot(hotspot?.id ?? null)} />
              <span className="image-caption">Imagem oficial Shineray <i>•</i> consulte autorização de uso</span>
            </div>
            <div className="gallery-strip">
              <div className="gallery-strip__label"><ImageIcon size={13} /><span>Galeria</span></div>
              <div className="gallery-thumbs">
                {current.images.map((image, index) => (
                  <button key={image.src} type="button" className={`gallery-thumb ${selectedImage === index ? "gallery-thumb--active" : ""}`} onClick={() => setSelectedImage(index)} aria-label={`Abrir imagem: ${image.label}`}>
                    <img src={image.src} alt="" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {turning && <div className={`turn-sheet turn-sheet--${turning}`} aria-hidden="true"><div className="turn-sheet__face"><span>{current.name}</span><img src={current.images[selectedImage].src} alt="" /></div><div className="turn-sheet__back"><span>{motos[turnTarget ?? activeIndex]?.name}</span><img src={motos[turnTarget ?? activeIndex]?.images[0].src} alt="" /></div></div>}
        </div>

        <div className="book-bottomline">
          <button className="book-nav book-nav--prev" type="button" onClick={() => requestPage(activeIndex - 1, "prev")} disabled={activeIndex === 0 || Boolean(turning)}><ChevronLeft size={17} /><span>Anterior</span></button>
          <div className="book-progress" aria-label={`Página ${activeIndex + 1} de ${motos.length}`}><span className="book-progress__count">{String(activeIndex + 1).padStart(2, "0")} <i>/</i> {String(motos.length).padStart(2, "0")}</span><span className="book-progress__track"><i style={{ width: `${((activeIndex + 1) / motos.length) * 100}%` }} /></span></div>
          <div className="book-bottomline__cta"><WhatsAppButton model={current.name} compact label="Quero entender esta moto" /><button className="book-nav book-nav--next" type="button" onClick={() => requestPage(activeIndex + 1, "next")} disabled={activeIndex === motos.length - 1 || Boolean(turning)}><span>Próxima</span><ChevronRight size={17} /></button></div>
        </div>
      </section>

      <div className="catalog-footer"><span>© NETO MOTOS — SHINERAY</span><span>Especificações e condições sujeitas a confirmação.</span><span>Arraste / ← →</span></div>
    </main>
  );
}
