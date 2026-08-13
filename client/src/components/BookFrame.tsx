// Style reminder: the book frame is the hero interaction of Arquivo de Performance—material, asymmetric and intentionally editorial.
import { ArrowLeft, ArrowRight, Bookmark, ChevronLeft, ChevronRight, Grid2X2, Image as ImageIcon, Info, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Moto } from "@/data/motos";
import { BrandMark } from "@/components/BrandMark";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AssetImage } from "@/components/AssetImage";
import { formatChapter } from "@/lib/catalog";

type BookFrameProps = {
  motos: Moto[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onOpenIndex: () => void;
  onOpenAbout: () => void;
  onBackToCover: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
};

export function BookFrame({ motos, activeIndex, onIndexChange, onOpenIndex, onOpenAbout, onBackToCover, soundEnabled, onToggleSound }: BookFrameProps) {
  const [turning, setTurning] = useState<"next" | "prev" | null>(null);
  const [turnTarget, setTurnTarget] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const turnTimer = useRef<number | null>(null);
  const current = motos[activeIndex];

  useEffect(() => {
    setSelectedImage(0);
  }, [activeIndex]);

  useEffect(() => {
    let cancelled = false;
    const preload = (image: Moto["images"][number]) => {
      const preload = new Image();
      preload.decoding = "async";
      preload.src = image.src;
    };
    current.images.slice(0, 2).forEach(preload);
    const deferred = window.setTimeout(() => {
      if (!cancelled) current.images.slice(2).forEach(preload);
    }, 180);
    return () => {
      cancelled = true;
      window.clearTimeout(deferred);
    };
  }, [current.images]);

  useEffect(() => {
    return () => {
      if (turnTimer.current !== null) window.clearTimeout(turnTimer.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("button, a, input, textarea, select, [contenteditable='true']")) return;
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
    if (turnTimer.current !== null) window.clearTimeout(turnTimer.current);
    turnTimer.current = window.setTimeout(() => {
      onIndexChange(nextIndex);
      setTurning(null);
      setTurnTarget(null);
      turnTimer.current = null;
    }, 980);
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.closest("button, a, input, textarea, select, [data-no-swipe]")) {
      pointerStart.current = null;
      return;
    }
    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (Math.abs(distance) < 55) return;
    requestPage(activeIndex + (distance < 0 ? 1 : -1), distance < 0 ? "next" : "prev");
  }

  function onPointerCancel(event: React.PointerEvent<HTMLDivElement>) {
    pointerStart.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  return (
    <main id="catalog-content" className="catalog-workspace">
      <div className="catalog-3d-field" aria-hidden="true"><span /><span /><span /></div>
      <header className="catalog-header">
        <BrandMark light compact />
        <div className="catalog-header__center">
          <span>Catálogo digital</span>
          <b>2026</b>
        </div>
        <div className="catalog-header__actions">
          <button className="header-link" type="button" onClick={onBackToCover}><ArrowLeft size={14} /> <span>Capa</span></button>
          <button className="header-link" type="button" onClick={onOpenAbout}><Info size={14} /> <span>Sobre o Neto</span></button>
          <button className="header-link" type="button" onClick={onOpenIndex}><Grid2X2 size={14} /> <span>Índice</span></button>
          <button className="header-link header-link--sound" type="button" onClick={onToggleSound} aria-pressed={soundEnabled}><span className={`sound-led ${soundEnabled ? "sound-led--on" : ""}`} />{soundEnabled ? "Som" : "Mudo"}</button>
        </div>
      </header>

      <div className="catalog-rule" />

        <section className="book-shell" aria-label="Catálogo interativo de motocicletas" onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
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
            <div className="left-page__lower">
              <div className="price-block page-price"><span>A partir de</span><b>{current.price}</b><small>Ref. oficial · confirme com o Neto.</small></div>
              <div className="left-page__footer">
                <div className="page-footer-note"><span>{formatChapter(activeIndex, motos.length).split(" /")[0]}</span><small>arquivo de performance</small></div>
                <button className="about-teaser" type="button" onClick={onOpenAbout}><span className="about-teaser__avatar"><img src="/manus-storage/neto-portrait-professional_bbafcc75.png" alt="Neto, consultor da Neto Motos" /></span><span><b>Atendimento de verdade.</b><small>Conheça o Neto</small></span><ArrowRight size={14} /></button>
              </div>
            </div>
          </div>

          <div className="book-gutter" aria-hidden="true"><span /></div>

          <div className="book-page book-page--right">
            <div className="page-grain" />
            <div className="right-page__meta"><span>{current.category}</span><span>NETO / {formatChapter(activeIndex, motos.length)}</span></div>
            <div className="moto-visual">
              <div className="moto-visual__wash" />
              <AssetImage key={current.images[selectedImage].src} src={current.images[selectedImage].src} alt={current.images[selectedImage].alt} fallbackLabel={current.name} loading={activeIndex === 0 ? "eager" : "lazy"} fetchPriority={activeIndex === 0 ? "high" : "auto"} />
              <span className="image-caption">Imagem oficial Shineray <i>•</i> consulte autorização de uso</span>
            </div>
            <div className="gallery-strip">
              <div className="gallery-strip__label"><ImageIcon size={13} /><span>Galeria</span></div>
              <div className="gallery-thumbs">
                {current.images.map((image, index) => (
                  <button key={image.src} type="button" className={`gallery-thumb ${selectedImage === index ? "gallery-thumb--active" : ""}`} onClick={() => setSelectedImage(index)} aria-label={`Abrir imagem: ${image.label}`}>
                    <AssetImage src={image.src} alt="" fallbackLabel={current.name} loading={selectedImage === index ? "eager" : "lazy"} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {turning && <div className={`turn-sheet turn-sheet--${turning}`} aria-hidden="true"><div className="turn-sheet__face"><span>{current.name}</span><AssetImage src={current.images[selectedImage].src} alt="" fallbackLabel={current.name} /></div><div className="turn-sheet__back"><span>{motos[turnTarget ?? activeIndex]?.name}</span><AssetImage src={motos[turnTarget ?? activeIndex]?.images[0].src} alt="" fallbackLabel={motos[turnTarget ?? activeIndex]?.name} /></div></div>}
        </div>

        <div className="book-bottomline">
          <button className="book-nav book-nav--prev" type="button" onClick={() => requestPage(activeIndex - 1, "prev")} disabled={activeIndex === 0 || Boolean(turning)} aria-label="Abrir capítulo anterior"><ChevronLeft size={17} /><span>Anterior</span></button>
          <div className="book-progress" aria-live="polite" aria-label={`Capítulo ${activeIndex + 1} de ${motos.length}`}><span className="book-progress__count">{formatChapter(activeIndex, motos.length)}</span><span className="book-progress__track"><i style={{ width: `${((activeIndex + 1) / motos.length) * 100}%` }} /></span></div>
          <div className="book-bottomline__cta"><WhatsAppButton model={current.name} compact label="Quero entender esta moto" /><button className="book-nav book-nav--next" type="button" onClick={() => requestPage(activeIndex + 1, "next")} disabled={activeIndex === motos.length - 1 || Boolean(turning)} aria-label="Abrir próximo capítulo"><span>Próxima</span><ChevronRight size={17} /></button></div>
        </div>
      </section>

      <div className="catalog-footer"><span>© NETO MOTOS — SHINERAY</span><span>Especificações e condições sujeitas a confirmação.</span><span>Arraste / ← →</span></div>
    </main>
  );
}
