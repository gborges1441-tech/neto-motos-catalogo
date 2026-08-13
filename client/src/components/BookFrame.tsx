// Style reminder: the book frame is the hero interaction of Arquivo de Performance—material, asymmetric and intentionally editorial.
import { ArrowLeft, ArrowRight, Bookmark, ChevronLeft, ChevronRight, FileText, Grid2X2, Image as ImageIcon, Info, MousePointer2, X, ZoomIn } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Moto } from "@/data/motos";
import { BrandMark } from "@/components/BrandMark";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AssetImage } from "@/components/AssetImage";
import { formatChapter } from "@/lib/catalog";
import { trackEvent } from "@/lib/analytics";

type BookFrameProps = {
  motos: Moto[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onOpenIndex: () => void;
  onOpenAbout: () => void;
  onBackToCover: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenQuote: () => void;
};

export function BookFrame({ motos, activeIndex, onIndexChange, onOpenIndex, onOpenAbout, onBackToCover, soundEnabled, onToggleSound, onOpenQuote }: BookFrameProps) {
  const [turning, setTurning] = useState<"next" | "prev" | null>(null);
  const [turnTarget, setTurnTarget] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const turnTimer = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const current = motos[activeIndex];

  useEffect(() => {
    setSelectedImage(0);
    setLightboxIndex(null);
  }, [activeIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((index) => index === null ? null : (index + 1) % current.images.length);
      if (event.key === "ArrowLeft") setLightboxIndex((index) => index === null ? null : (index - 1 + current.images.length) % current.images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [current.images.length, lightboxIndex]);

  useEffect(() => {
    const preload = (image: Moto["images"][number]) => {
      const preload = new Image();
      preload.decoding = "async";
      preload.src = image.src;
    };
    const nextMoto = motos[activeIndex + 1];
    const priorityImages = [...current.images, nextMoto?.images[0]].filter(Boolean) as Moto["images"][number][];
    priorityImages.forEach(preload);
  }, [activeIndex, current.images, motos, selectedImage]);

  useEffect(() => {
    return () => {
      if (turnTimer.current !== null) window.clearTimeout(turnTimer.current);
      void audioContextRef.current?.close();
      audioContextRef.current = null;
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
    const context = audioContextRef.current ?? new AudioContextClass();
    audioContextRef.current = context;
    void context.resume();
    const now = context.currentTime;
    const duration = 0.18;
    const buffer = context.createBuffer(1, Math.floor(context.sampleRate * duration), context.sampleRate);
    const channel = buffer.getChannelData(0);
    for (let index = 0; index < channel.length; index += 1) {
      const envelope = Math.sin((index / channel.length) * Math.PI);
      channel[index] = (Math.random() * 2 - 1) * envelope;
    }
    const paper = context.createBufferSource();
    const paperFilter = context.createBiquadFilter();
    const paperGain = context.createGain();
    paper.buffer = buffer;
    paperFilter.type = "bandpass";
    paperFilter.frequency.setValueAtTime(direction === "next" ? 1800 : 1450, now);
    paperFilter.Q.setValueAtTime(0.7, now);
    paperGain.gain.setValueAtTime(0.0001, now);
    paperGain.gain.exponentialRampToValueAtTime(0.028, now + 0.018);
    paperGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    paper.connect(paperFilter).connect(paperGain).connect(context.destination);
    paper.start(now);
    paper.stop(now + duration);

    const rev = context.createOscillator();
    const revGain = context.createGain();
    rev.type = "sine";
    rev.frequency.setValueAtTime(direction === "next" ? 155 : 125, now);
    rev.frequency.exponentialRampToValueAtTime(direction === "next" ? 230 : 190, now + 0.12);
    revGain.gain.setValueAtTime(0.0001, now);
    revGain.gain.exponentialRampToValueAtTime(0.012, now + 0.03);
    revGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.17);
    rev.connect(revGain).connect(context.destination);
    rev.start(now);
    rev.stop(now + 0.18);
  }

  function requestPage(nextIndex: number, direction: "next" | "prev") {
    if (turning || nextIndex < 0 || nextIndex >= motos.length) return;
    setTurning(direction);
    setTurnTarget(nextIndex);
    pageSound(direction);
    if (turnTimer.current !== null) window.clearTimeout(turnTimer.current);
    turnTimer.current = window.setTimeout(() => {
      onIndexChange(nextIndex);
      trackEvent("chapter_change", { direction, chapter: nextIndex + 1, model: motos[nextIndex]?.name ?? "catalogo" });
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
    pointerStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current.x;
    const verticalDistance = event.clientY - pointerStart.current.y;
    pointerStart.current = null;
    setHasInteracted(true);
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (Math.abs(distance) < 55 || Math.abs(distance) < Math.abs(verticalDistance) * 1.15) return;
    requestPage(activeIndex + (distance < 0 ? 1 : -1), distance < 0 ? "next" : "prev");
  }

  function onPointerCancel(event: React.PointerEvent<HTMLDivElement>) {
    pointerStart.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function openLightbox(index: number) {
    setSelectedImage(index);
    setLightboxIndex(index);
    trackEvent("gallery_view", { model: current.name, image: index + 1, mode: "lightbox" });
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
          <button className="header-link header-link--quote" type="button" onClick={onOpenQuote}><FileText size={14} /> <span>Orçamento</span></button>
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
                <button className="about-teaser" type="button" onClick={onOpenAbout}><span className="about-teaser__avatar"><img src="/manus-storage/neto-portrait-professional_bbafcc75.png" alt="Neto, consultor da Neto Motos" /></span><span><b>Neto explica. Você decide.</b><small>Conheça o atendimento</small></span><ArrowRight size={14} /></button>
              </div>
            </div>
          </div>

          <div className="book-gutter" aria-hidden="true"><span /></div>

          <div className="book-page book-page--right">
            <div className="page-grain" />
            <div className="right-page__meta"><span>{current.category}</span><span>NETO / {formatChapter(activeIndex, motos.length)}</span></div>
            <div className="moto-visual">
              <div className="moto-visual__wash" />
              <button className="moto-visual__zoom" type="button" onClick={() => openLightbox(selectedImage)} aria-label={`Ampliar foto ${selectedImage + 1} de ${current.images.length} da ${current.name}`}>
                <AssetImage key={current.images[selectedImage].src} src={current.images[selectedImage].src} alt={current.images[selectedImage].alt} fallbackLabel={current.name} loading={activeIndex === 0 ? "eager" : "lazy"} fetchPriority={activeIndex === 0 ? "high" : "auto"} />
                <span><ZoomIn size={14} /> Ampliar foto</span>
              </button>
              <span className="image-caption"><b>{String(selectedImage + 1).padStart(2, "0")} / {String(current.images.length).padStart(2, "0")}</b><i>•</i> Fotos de catálogo</span>
            </div>
            <div className="gallery-strip">
              <div className="gallery-strip__label"><ImageIcon size={13} /><span>Galeria</span></div>
              <div className="gallery-thumbs">
                {current.images.map((image, index) => (
                  <button key={image.src} type="button" className={`gallery-thumb ${selectedImage === index ? "gallery-thumb--active" : ""}`} onClick={() => openLightbox(index)} aria-label={`Ampliar imagem: ${image.label}`}>
                    <AssetImage src={image.src} alt="" fallbackLabel={current.name} loading="eager" decoding="sync" fetchPriority="high" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {turning && <div className={`turn-sheet turn-sheet--${turning}`} aria-hidden="true"><div className="turn-sheet__face"><span>{current.name}</span><AssetImage src={current.images[selectedImage].src} alt="" fallbackLabel={current.name} /></div><div className="turn-sheet__back"><span>{motos[turnTarget ?? activeIndex]?.name}</span><AssetImage src={motos[turnTarget ?? activeIndex]?.images[0].src} alt="" fallbackLabel={motos[turnTarget ?? activeIndex]?.name} /></div></div>}
        </div>

        <article className={`book-mobile-page ${turning ? `book-mobile-page--turning-${turning}` : ""}`} aria-label={`Página única do catálogo: ${current.name}`}>
          <div className="book-mobile-page__topline"><span>{current.eyebrow}</span><span>NETO / {formatChapter(activeIndex, motos.length)}</span></div>
          {!hasInteracted && <span className="book-mobile-page__gesture-hint"><MousePointer2 size={12} /> Deslize para folhear</span>}
          <div className="book-mobile-page__visual">
            <button className="book-mobile-page__zoom" type="button" onClick={() => openLightbox(selectedImage)} aria-label={`Ampliar foto ${selectedImage + 1} de ${current.images.length} da ${current.name}`}>
              <AssetImage key={`mobile-${current.images[selectedImage].src}`} src={current.images[selectedImage].src} alt={current.images[selectedImage].alt} fallbackLabel={current.name} loading={activeIndex === 0 ? "eager" : "lazy"} fetchPriority={activeIndex === 0 ? "high" : "auto"} />
              <span><ZoomIn size={14} /> Ampliar foto</span>
            </button>
            <span><b>{String(selectedImage + 1).padStart(2, "0")} / {String(current.images.length).padStart(2, "0")}</b><i>•</i> Fotos de catálogo</span>
          </div>
          <div className="book-mobile-page__gallery" aria-label="Galeria da moto">
            {current.images.map((image, index) => <button key={`mobile-${image.src}`} type="button" className={`gallery-thumb ${selectedImage === index ? "gallery-thumb--active" : ""}`} onClick={() => openLightbox(index)} aria-label={`Ampliar imagem: ${image.label}`}><AssetImage src={image.src} alt="" fallbackLabel={current.name} loading="eager" decoding="sync" fetchPriority="high" /><span>{String(index + 1).padStart(2, "0")}</span></button>)}
          </div>
          <div className="book-mobile-page__copy">
            <span className="page-kicker">NETO MOTOS / SHINERAY</span>
            <h1>{current.name}</h1>
            <p className="lead-copy">{current.description}</p>
            <div className="red-stroke" />
            <p className="copy-line">{current.copyLine}</p>
            <p className="editorial-copy">{current.audience}</p>
            <div className="highlight-list">{current.highlights.map((highlight) => <span key={`mobile-${highlight}`}>{highlight}</span>)}</div>
            <div className="book-mobile-page__commercial"><div className="price-block"><span>A partir de</span><b>{current.price}</b><small>Preço de referência.<br />Confirme condições com o Neto.</small></div><button className="about-teaser" type="button" onClick={onOpenAbout}><span className="about-teaser__avatar"><img src="/manus-storage/neto-portrait-professional_bbafcc75.png" alt="Neto, consultor da Neto Motos" /></span><span><b>Neto explica. Você decide.</b><small>Conheça o atendimento</small></span><ArrowRight size={14} /></button></div>
          </div>
        </article>

        <div className="book-bottomline">
          <button className="book-nav book-nav--prev" type="button" onClick={() => requestPage(activeIndex - 1, "prev")} disabled={activeIndex === 0 || Boolean(turning)} aria-label="Abrir capítulo anterior"><ChevronLeft size={17} /><span>Anterior</span></button>
          <div className="book-progress" aria-live="polite" aria-label={`Capítulo ${activeIndex + 1} de ${motos.length}`}><span className="book-progress__count">{formatChapter(activeIndex, motos.length)}</span><span className="book-progress__track"><i style={{ width: `${((activeIndex + 1) / motos.length) * 100}%` }} /></span></div>
          <div className="book-bottomline__cta"><WhatsAppButton model={current.name} compact label="Falar com o Neto" /><button className="book-nav book-nav--next" type="button" onClick={() => requestPage(activeIndex + 1, "next")} disabled={activeIndex === motos.length - 1 || Boolean(turning)} aria-label="Abrir próximo capítulo"><span>Próxima</span><ChevronRight size={17} /></button></div>
        </div>
      </section>

      {lightboxIndex !== null && <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={`Galeria ampliada da ${current.name}`} onMouseDown={(event) => { if (event.target === event.currentTarget) setLightboxIndex(null); }}>
        <div className="photo-lightbox__panel">
          <div className="photo-lightbox__topline"><span><span className="live-dot" /> {current.name} / Fotos de catálogo</span><span>{String(lightboxIndex + 1).padStart(2, "0")} / {String(current.images.length).padStart(2, "0")}</span></div>
          <button className="photo-lightbox__close" type="button" onClick={() => setLightboxIndex(null)} aria-label="Fechar foto ampliada"><X size={21} /></button>
          <button className="photo-lightbox__nav photo-lightbox__nav--prev" type="button" onClick={() => setLightboxIndex((index) => index === null ? null : (index - 1 + current.images.length) % current.images.length)} aria-label="Ver foto anterior"><ChevronLeft size={25} /></button>
          <div className="photo-lightbox__stage">
            <AssetImage key={`lightbox-${current.images[lightboxIndex].src}`} src={current.images[lightboxIndex].src} alt={current.images[lightboxIndex].alt} fallbackLabel={current.name} loading="eager" decoding="async" fetchPriority="high" />
          </div>
          <button className="photo-lightbox__nav photo-lightbox__nav--next" type="button" onClick={() => setLightboxIndex((index) => index === null ? null : (index + 1) % current.images.length)} aria-label="Ver próxima foto"><ChevronRight size={25} /></button>
          <div className="photo-lightbox__caption"><span>{current.images[lightboxIndex].label}</span><small>Use ← → ou deslize pelas imagens</small></div>
        </div>
      </div>}

      <div className="catalog-footer"><span>© NETO MOTOS — SHINERAY</span><span>Especificações e condições sujeitas a confirmação.</span><span>Arraste / ← →</span></div>
    </main>
  );
}
