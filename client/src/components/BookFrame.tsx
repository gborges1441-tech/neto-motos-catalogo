// Style reminder: the book frame is the hero interaction of Arquivo de Performance—material, asymmetric and intentionally editorial.
import { ArrowLeft, ArrowRight, Bookmark, ChevronLeft, ChevronRight, FileText, Grid2X2, Image as ImageIcon, Info, MousePointer2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Moto } from "@/data/motos";
import { BrandMark } from "@/components/BrandMark";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AssetImage } from "@/components/AssetImage";
import { ColorSelector } from "@/components/ColorSelector";
import { MotoEditorial } from "@/components/MotoEditorial";
import { formatFolio } from "@/lib/catalog";
import { trackEvent } from "@/lib/analytics";

const motorcycleTurnSound = "/manus-storage/motorbike-rev-turn_9baf8ab2.mp3";

type BookFrameProps = {
  motos: Moto[];
  activeIndex: number;
  initialColorId?: string | null;
  onIndexChange: (index: number) => void;
  onOpenIndex: () => void;
  onOpenAbout: () => void;
  onBackToCover: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenQuote: () => void;
};

export function BookFrame({ motos, activeIndex, initialColorId, onIndexChange, onOpenIndex, onOpenAbout, onBackToCover, soundEnabled, onToggleSound, onOpenQuote }: BookFrameProps) {
  const [turning, setTurning] = useState<"next" | "prev" | null>(null);
  const [turnTarget, setTurnTarget] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(1);
  const [lightboxPan, setLightboxPan] = useState({ x: 0, y: 0 });
  const [mobilePhotoRatio, setMobilePhotoRatio] = useState(4 / 3);
  const [spreadScale, setSpreadScale] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
  const [colorTransitioning, setColorTransitioning] = useState(false);
  const [outgoingColorImage, setOutgoingColorImage] = useState<Moto["images"][number] | null>(null);
  const bookShellRef = useRef<HTMLElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const turnTimer = useRef<number | null>(null);
  const colorTransitionTimer = useRef<number | null>(null);
  const motorcycleTurnRef = useRef<HTMLAudioElement | null>(null);
  const lightboxGesture = useRef<{ x: number; y: number; panX: number; panY: number; scale: number; pointerType: string } | null>(null);
  const pinchPointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);
  const lightboxTap = useRef<{ time: number; x: number; y: number } | null>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const lightboxPreviousFocus = useRef<HTMLElement | null>(null);
  const current = motos[activeIndex];
  const colorVariants = current.colorVariants ?? [];
  const selectedColor = useMemo(
    () => colorVariants.find((variant) => variant.id === selectedColorId) ?? colorVariants[0] ?? null,
    [colorVariants, selectedColorId],
  );
  const displayImages = useMemo(
    () => selectedColor ? [selectedColor.hero, ...selectedColor.gallery] : current.images,
    [current.images, selectedColor],
  );
  const activeImage = displayImages[Math.min(selectedImage, displayImages.length - 1)] ?? displayImages[0];
  const safeLightboxIndex = lightboxIndex === null ? 0 : Math.min(lightboxIndex, displayImages.length - 1);
  const lightboxImage = displayImages[safeLightboxIndex] ?? activeImage;
  const turnMoto = motos[turnTarget ?? activeIndex] ?? current;
  const currentEngine = current.engine ?? current.specs.find((item) => item.label.toLowerCase().includes("cilindrada"))?.value ?? "—";

  useEffect(() => {
    setSelectedImage(0);
    setLightboxIndex(null);
    setColorTransitioning(false);
    setOutgoingColorImage(null);
    if (colorTransitionTimer.current !== null) window.clearTimeout(colorTransitionTimer.current);
    colorTransitionTimer.current = null;
    setSelectedColorId(current.colorVariants?.find((variant) => variant.id === initialColorId)?.id ?? current.colorVariants?.[0]?.id ?? null);
  }, [activeIndex, current.colorVariants, current.id, initialColorId]);

  useEffect(() => {
    const imageData = displayImages[Math.min(selectedImage, displayImages.length - 1)];
    setMobilePhotoRatio(4 / 3);
    if (!imageData) return;
    const probe = new Image();
    probe.onload = () => {
      if (probe.naturalWidth > 0 && probe.naturalHeight > 0) setMobilePhotoRatio(probe.naturalWidth / probe.naturalHeight);
    };
    probe.src = imageData.src;
    return () => { probe.onload = null; };
  }, [displayImages, selectedImage]);

  useEffect(() => {
    const measureSpread = () => {
      const shell = bookShellRef.current;
      if (!shell) return;
      const isPortraitTablet = window.innerWidth > 680 && window.innerWidth <= 1100 && window.matchMedia("(orientation: portrait)").matches;
      const canUseSpread = window.innerWidth > 680 && !isPortraitTablet;
      if (!canUseSpread) {
        setSpreadScale(1);
        return;
      }
      const availableWidth = shell.clientWidth;
      const bottomline = shell.querySelector<HTMLElement>(".book-bottomline");
      const bottomlineHeight = bottomline?.getBoundingClientRect().height ?? 42;
      const shellTop = shell.getBoundingClientRect().top;
      const availableHeight = Math.max(440, window.innerHeight - shellTop - bottomlineHeight - 48);
      const widthScale = availableWidth / 1320;
      const heightScale = availableHeight / 710;
      const nextScale = Math.max(0.52, Math.min(1.45, widthScale, heightScale));
      setSpreadScale(Number(nextScale.toFixed(4)));
    };

    measureSpread();
    const observer = typeof ResizeObserver !== "undefined" && bookShellRef.current ? new ResizeObserver(measureSpread) : null;
    if (observer && bookShellRef.current) observer.observe(bookShellRef.current);
    window.addEventListener("resize", measureSpread);
    window.addEventListener("orientationchange", measureSpread);
    window.visualViewport?.addEventListener("resize", measureSpread);
    window.visualViewport?.addEventListener("scroll", measureSpread);
    document.fonts?.ready.then(measureSpread);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measureSpread);
      window.removeEventListener("orientationchange", measureSpread);
      window.visualViewport?.removeEventListener("resize", measureSpread);
      window.visualViewport?.removeEventListener("scroll", measureSpread);
    };
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    lightboxPreviousFocus.current = document.activeElement as HTMLElement | null;
    window.requestAnimationFrame(() => lightboxCloseRef.current?.focus());
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((index) => index === null ? null : (index + 1) % displayImages.length);
      if (event.key === "ArrowLeft") setLightboxIndex((index) => index === null ? null : (index - 1 + displayImages.length) % displayImages.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.requestAnimationFrame(() => lightboxPreviousFocus.current?.focus());
    };
  }, [displayImages.length, lightboxIndex]);

  useEffect(() => {
    setLightboxZoom(1);
    setLightboxPan({ x: 0, y: 0 });
    lightboxGesture.current = null;
    pinchPointers.current.clear();
    pinchStart.current = null;
  }, [lightboxIndex]);

  useEffect(() => {
    const preload = (image: Moto["images"][number]) => {
      const preload = new Image();
      preload.decoding = "async";
      preload.src = image.src;
    };
    const nearbyMotos = [motos[activeIndex - 1], motos[activeIndex + 1], motos[activeIndex + 2]].filter(Boolean) as Moto[];
    const nearbyImages = nearbyMotos.flatMap((moto) => moto.images.slice(0, 3));
    const priorityImages = [...displayImages, ...nearbyImages].filter(Boolean) as Moto["images"][number][];
    priorityImages.forEach(preload);
  }, [activeIndex, displayImages, motos, selectedImage]);

  useEffect(() => {
    return () => {
      if (turnTimer.current !== null) window.clearTimeout(turnTimer.current);
      if (colorTransitionTimer.current !== null) window.clearTimeout(colorTransitionTimer.current);
      motorcycleTurnRef.current?.pause();
      motorcycleTurnRef.current = null;
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
    const sound = motorcycleTurnRef.current ?? new Audio(motorcycleTurnSound);
    motorcycleTurnRef.current = sound;
    sound.pause();
    sound.currentTime = direction === "next" ? 0.03 : 0.08;
    sound.volume = direction === "next" ? 0.32 : 0.27;
    void sound.play().catch(() => {
      // Alguns navegadores só liberam áudio após a primeira interação; a próxima virada tenta novamente.
    });
  }

  function requestPage(nextIndex: number, direction: "next" | "prev") {
    if (turning || nextIndex < 0 || nextIndex >= motos.length) return;
    motos[nextIndex]?.images.slice(0, 4).forEach((image) => {
      const preload = new Image();
      preload.decoding = "async";
      preload.src = image.src;
    });
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
    if (target.closest("button, a, input, textarea, select, [data-no-swipe], [data-scrollable]")) {
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

  function changeLightbox(delta: number) {
    setLightboxIndex((index) => {
      if (index === null) return null;
      const nextIndex = (index + delta + displayImages.length) % displayImages.length;
      setSelectedImage(nextIndex);
      return nextIndex;
    });
  }

  function selectColor(variant: NonNullable<Moto["colorVariants"]>[number]) {
    if (variant.id === selectedColor?.id || colorTransitioning) return;
    const applySelection = () => {
      setSelectedColorId(variant.id);
      setSelectedImage(0);
      setLightboxIndex(null);
      trackEvent("color_variant_change", { model: current.name, color: variant.name });
    };
    const heroPreload = new Image();
    heroPreload.decoding = "async";
    heroPreload.src = variant.hero.src;
    variant.gallery.forEach((image) => {
      const galleryPreload = new Image();
      galleryPreload.decoding = "async";
      galleryPreload.src = image.src;
    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applySelection();
      return;
    }
    setOutgoingColorImage(activeImage);
    setColorTransitioning(true);
    window.requestAnimationFrame(applySelection);
    if (colorTransitionTimer.current !== null) window.clearTimeout(colorTransitionTimer.current);
    colorTransitionTimer.current = window.setTimeout(() => {
      setOutgoingColorImage(null);
      setColorTransitioning(false);
      colorTransitionTimer.current = null;
    }, 340);
  }

  function onLightboxPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const point = { x: event.clientX, y: event.clientY };
    pinchPointers.current.set(event.pointerId, point);
    if (pinchPointers.current.size === 2) {
      const [first, second] = Array.from(pinchPointers.current.values());
      pinchStart.current = { distance: Math.hypot(first.x - second.x, first.y - second.y), scale: lightboxZoom };
    } else {
      lightboxGesture.current = { x: event.clientX, y: event.clientY, panX: lightboxPan.x, panY: lightboxPan.y, scale: lightboxZoom, pointerType: event.pointerType };
    }
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function onLightboxPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (pinchPointers.current.has(event.pointerId)) pinchPointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pinchPointers.current.size === 2 && pinchStart.current) {
      const [first, second] = Array.from(pinchPointers.current.values());
      const distance = Math.hypot(first.x - second.x, first.y - second.y);
      const nextZoom = Math.min(3.2, Math.max(1, pinchStart.current.scale * (distance / pinchStart.current.distance)));
      setLightboxZoom(nextZoom);
      if (nextZoom === 1) setLightboxPan({ x: 0, y: 0 });
      return;
    }
    const gesture = lightboxGesture.current;
    if (!gesture || gesture.scale <= 1) return;
    setLightboxPan({ x: gesture.panX + (event.clientX - gesture.x), y: gesture.panY + (event.clientY - gesture.y) });
  }

  function onLightboxPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const gesture = lightboxGesture.current;
    const distanceX = gesture ? event.clientX - gesture.x : 0;
    const distanceY = gesture ? event.clientY - gesture.y : 0;
    const wasPinching = pinchPointers.current.size === 2 || Boolean(pinchStart.current);
    pinchPointers.current.delete(event.pointerId);
    if (pinchPointers.current.size < 2) pinchStart.current = null;
    lightboxGesture.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (!wasPinching && event.pointerType === "touch" && Math.abs(distanceX) < 20 && Math.abs(distanceY) < 20) {
      const now = performance.now();
      const previousTap = lightboxTap.current;
      if (previousTap && now - previousTap.time < 340 && Math.hypot(event.clientX - previousTap.x, event.clientY - previousTap.y) < 28) {
        setLightboxZoom((zoom) => zoom > 1 ? 1 : 2.2);
        setLightboxPan({ x: 0, y: 0 });
        lightboxTap.current = null;
      } else {
        lightboxTap.current = { time: now, x: event.clientX, y: event.clientY };
      }
    }
    if (!wasPinching && event.pointerType === "touch" && lightboxZoom === 1 && Math.abs(distanceX) > 60 && Math.abs(distanceX) > Math.abs(distanceY) * 1.25) changeLightbox(distanceX < 0 ? 1 : -1);
  }

  function onLightboxDoubleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setLightboxZoom((zoom) => zoom > 1 ? 1 : 2.2);
    setLightboxPan({ x: 0, y: 0 });
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

        <section ref={bookShellRef} className="book-shell" aria-label="Catálogo interativo de motocicletas" onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
        <div className="book-topline">
          <span><span className="live-dot" /> Neto Motos / {current.brand}</span>
          <span className="book-topline__hint"><MousePointer2 size={12} /> arraste para folhear</span>
        </div>
        <div className="book-spread-frame" style={{ "--spread-scale": spreadScale } as CSSProperties}>
        <div className="book-spread" data-turning={turning ?? "idle"}>
          <div className="book-page book-page--left" data-scrollable>
            <div className="page-grain" />
            <div className="left-page__top">
              <span className="chapter-index">{current.eyebrow}</span>
              <Bookmark size={16} strokeWidth={1.3} />
            </div>
            <div className="left-page__content">
              <span className="page-kicker">NETO MOTOS / {current.brand}</span>
              <h1>{current.name}</h1>
              <p className="lead-copy">{current.description}</p>
              <div className="red-stroke" />
              <p className="copy-line">{current.copyLine}</p>
              <p className="editorial-copy">{current.audience}</p>
              <div className="highlight-list">
                {current.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
              </div>
            </div>
            <MotoEditorial moto={current} compact />
            <div className="left-page__lower">
              <div className="price-block page-price"><span>A partir de</span><b>{current.price}</b><small>Ref. oficial · confirme com o Neto.</small></div>
              <div className="left-page__footer">
                <div className="page-footer-note"><span>{formatFolio(activeIndex)}</span><small>arquivo de performance</small></div>
                <button className="about-teaser" type="button" onClick={onOpenAbout}><span className="about-teaser__avatar"><img src="/manus-storage/neto-portrait-professional_bbafcc75.png" alt="Neto, consultor da Neto Motos" /></span><span><b>Neto explica. Você decide.</b><small>Conheça o atendimento</small></span><ArrowRight size={14} /></button>
              </div>
            </div>
          </div>

          <div className="book-gutter" aria-hidden="true"><span /></div>

          <div className={`book-page book-page--right ${colorVariants.length > 1 ? "book-page--has-colors" : ""}`}>
            <div className="page-grain" />
            <div className="right-page__meta"><span>{current.brand} / {current.category}</span><span>NETO / {formatFolio(activeIndex)}</span></div>
            <div className="right-page__hero-heading">
              <span className="right-page__brand">{current.brand}</span>
              <h2>{current.name}</h2>
              <p>{current.category}</p>
              <b>{currentEngine}</b><small>CILINDRADA OFICIAL</small>
              <ColorSelector variants={colorVariants} selectedId={selectedColor?.id ?? null} disabled={colorTransitioning} onSelect={selectColor} />
            </div>
            <div className="moto-visual">
              <div className="moto-visual__wash" />
              <button className={`moto-visual__zoom ${colorTransitioning ? "is-color-transitioning" : ""}`} type="button" onClick={() => openLightbox(selectedImage)} aria-label={`Abrir foto ${selectedImage + 1} de ${displayImages.length} da ${current.name} em tela cheia`}>
                {outgoingColorImage && <AssetImage className="color-media__outgoing" src={outgoingColorImage.src} alt="" aria-hidden="true" fallbackLabel={current.name} />}
                <AssetImage key={activeImage.src} className="color-media__current" src={activeImage.src} alt={activeImage.alt} fallbackLabel={current.name} loading={activeIndex === 0 ? "eager" : "lazy"} fetchPriority={activeIndex === 0 ? "high" : "auto"} />
              </button>
            </div>
            <div className="gallery-strip">
              <div className="gallery-strip__label"><ImageIcon size={13} /><span>Galeria</span></div>
              <div className={`gallery-thumbs ${colorTransitioning ? "gallery-thumbs--color-transitioning" : ""}`}>
                {displayImages.map((image, index) => (
                  <button key={image.src} type="button" className={`gallery-thumb ${selectedImage === index ? "gallery-thumb--active" : ""} ${colorTransitioning ? "gallery-thumb--color-enter" : ""}`} onClick={() => openLightbox(index)} aria-label={`Ampliar imagem: ${image.label}`}>
                    <AssetImage src={image.src} alt="" fallbackLabel={current.name} loading="eager" decoding="sync" fetchPriority="high" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {turning && <div className={`turn-sheet turn-sheet--${turning}`} aria-hidden="true"><div className="turn-sheet__face"><span>{current.name}</span><AssetImage src={activeImage.src} alt="" fallbackLabel={current.name} /></div><div className="turn-sheet__back"><span>{turnMoto.name}</span><AssetImage src={turnMoto.images[0].src} alt="" fallbackLabel={turnMoto.name} /></div></div>}
        </div>
        </div>

        <article className={`book-mobile-page ${turning ? `book-mobile-page--turning-${turning}` : ""}`} aria-label={`Página única do catálogo: ${current.name}`}>
          <div className="book-mobile-page__topline"><span>{current.brand} / {current.category}</span><span>NETO / {formatFolio(activeIndex)}</span></div>
          {!hasInteracted && <span className="book-mobile-page__gesture-hint"><MousePointer2 size={12} /> Deslize para folhear</span>}
          <div className="book-mobile-page__visual" style={{ aspectRatio: mobilePhotoRatio }}>
              <button className={`book-mobile-page__zoom ${colorTransitioning ? "is-color-transitioning" : ""}`} type="button" onClick={() => openLightbox(selectedImage)} aria-label={`Abrir foto ${selectedImage + 1} de ${displayImages.length} da ${current.name}`}>
                {outgoingColorImage && <AssetImage className="color-media__outgoing" src={outgoingColorImage.src} alt="" aria-hidden="true" fallbackLabel={current.name} />}
                <AssetImage key={`mobile-${activeImage.src}`} className="color-media__current" src={activeImage.src} alt={activeImage.alt} fallbackLabel={current.name} loading={activeIndex === 0 ? "eager" : "lazy"} fetchPriority={activeIndex === 0 ? "high" : "auto"} />
              </button>
          </div>
          <div className={`book-mobile-page__gallery ${colorTransitioning ? "book-mobile-page__gallery--color-transitioning" : ""}`} aria-label="Galeria da moto">
            {displayImages.map((image, index) => <button key={`mobile-${image.src}`} type="button" className={`gallery-thumb ${selectedImage === index ? "gallery-thumb--active" : ""} ${colorTransitioning ? "gallery-thumb--color-enter" : ""}`} onClick={() => openLightbox(index)} aria-label={`Ampliar imagem: ${image.label}`}><AssetImage src={image.src} alt="" fallbackLabel={current.name} loading="eager" decoding="sync" fetchPriority="high" /></button>)}
          </div>
          <ColorSelector variants={colorVariants} selectedId={selectedColor?.id ?? null} disabled={colorTransitioning} onSelect={selectColor} />
            <div className="book-mobile-page__copy">
            <span className="page-kicker">NETO MOTOS / {current.brand}</span>
            <h1>{current.name}</h1>
            <p className="lead-copy">{current.description}</p>
            <div className="red-stroke" />
            <p className="copy-line">{current.copyLine}</p>
            <p className="editorial-copy">{current.audience}</p>
            <div className="highlight-list">{current.highlights.map((highlight) => <span key={`mobile-${highlight}`}>{highlight}</span>)}</div>
            <div className="book-mobile-page__commercial"><div className="price-block"><span>A partir de</span><b>{current.price}</b><small>Preço de referência.<br />Confirme condições com o Neto.</small></div><button className="about-teaser" type="button" onClick={onOpenAbout}><span className="about-teaser__avatar"><img src="/manus-storage/neto-portrait-professional_bbafcc75.png" alt="Neto, consultor da Neto Motos" /></span><span><b>Neto explica. Você decide.</b><small>Conheça o atendimento</small></span><ArrowRight size={14} /></button></div>
          </div>
          <MotoEditorial moto={current} />
        </article>

        <div className="book-bottomline">
          <button className="book-nav book-nav--prev" type="button" onClick={() => requestPage(activeIndex - 1, "prev")} disabled={activeIndex === 0 || Boolean(turning)} aria-label="Abrir capítulo anterior"><ChevronLeft size={17} /><span>Anterior</span></button>
          <div className="book-progress" aria-live="polite" aria-label={`Capítulo ${activeIndex + 1}`}><span className="book-progress__count">{formatFolio(activeIndex)}</span><span className="book-progress__track"><i style={{ width: `${((activeIndex + 1) / motos.length) * 100}%` }} /></span></div>
          <div className="book-bottomline__cta"><span className="book-cta-microcopy">Consulte disponibilidade e condições atuais diretamente com o Neto.</span><WhatsAppButton model={current.name} compact label="Quero conhecer essa moto" /><button className="book-nav book-nav--next" type="button" onClick={() => requestPage(activeIndex + 1, "next")} disabled={activeIndex === motos.length - 1 || Boolean(turning)} aria-label="Abrir próximo capítulo"><span>Próxima</span><ChevronRight size={17} /></button></div>
        </div>
      </section>

      {lightboxIndex !== null && <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={`Galeria ampliada da ${current.name}`} onMouseDown={(event) => { if (event.target === event.currentTarget) setLightboxIndex(null); }}>
        <div className="photo-lightbox__panel">
          <div className="photo-lightbox__topline"><span><span className="live-dot" /> {current.name} / {current.category}</span><span>{String(lightboxIndex + 1).padStart(2, "0")} / {String(displayImages.length).padStart(2, "0")}</span></div>
          <button ref={lightboxCloseRef} className="photo-lightbox__close" type="button" onClick={() => setLightboxIndex(null)} aria-label="Fechar foto ampliada"><X size={21} /></button>
          <button className="photo-lightbox__nav photo-lightbox__nav--prev" type="button" onClick={() => changeLightbox(-1)} aria-label="Ver foto anterior"><ChevronLeft size={25} /></button>
          <div className="photo-lightbox__stage" onPointerDown={onLightboxPointerDown} onPointerMove={onLightboxPointerMove} onPointerUp={onLightboxPointerUp} onPointerCancel={onLightboxPointerUp} onDoubleClick={onLightboxDoubleClick}>
            <AssetImage key={`lightbox-${lightboxImage.src}`} src={lightboxImage.src} alt={lightboxImage.alt} fallbackLabel={current.name} loading="eager" decoding="async" fetchPriority="high" style={{ transform: `translate3d(${lightboxPan.x}px, ${lightboxPan.y}px, 0) scale(${lightboxZoom})`, cursor: lightboxZoom > 1 ? "grab" : "zoom-in" }} />
          </div>
          <button className="photo-lightbox__nav photo-lightbox__nav--next" type="button" onClick={() => changeLightbox(1)} aria-label="Ver próxima foto"><ChevronRight size={25} /></button>
          <div className="photo-lightbox__caption"><span>{lightboxImage.label}</span><small>Pinça ou duplo toque para ampliar · arraste para explorar · deslize para trocar</small></div>
        </div>
      </div>}

      <div className="catalog-footer"><span>© NETO MOTOS — SHINERAY / SBM</span><span>Especificações e condições sujeitas a confirmação.</span><span>Arraste / ← →</span></div>
    </main>
  );
}
