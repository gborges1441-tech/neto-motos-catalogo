/**
 * Direção visual: Arquivo de Performance / neo-editorial automotivo.
 * Interação física, contida e acessível; frames exclusivamente oficiais do modelo.
 */
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play, Rotate3D, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AssetImage } from "@/components/AssetImage";

type Official360ViewerProps = {
  model: string;
  frames: string[];
  source: string;
};

export function Official360Viewer({ model, frames, source }: Official360ViewerProps) {
  const [open, setOpen] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dragRef = useRef<{ pointerId: number; x: number; moved: boolean } | null>(null);

  const safeFrames = useMemo(() => frames.filter(Boolean), [frames]);
  const frameCount = safeFrames.length;
  const currentFrame = safeFrames[frameIndex] ?? safeFrames[0];

  useEffect(() => {
    setOpen(false);
    setFrameIndex(0);
    setPlaying(false);
  }, [model]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setReducedMotion(media.matches);
      if (media.matches) setPlaying(false);
    };
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    if (!open || frameCount < 2) return;
    const preloadIndexes = [frameIndex, frameIndex + 1, frameIndex - 1].map((index) => (index + frameCount) % frameCount);
    preloadIndexes.forEach((index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = safeFrames[index];
    });
  }, [frameCount, frameIndex, open, safeFrames]);

  useEffect(() => {
    if (!open || !playing || reducedMotion || frameCount < 2) return;
    const timer = window.setInterval(() => setFrameIndex((index) => (index + 1) % frameCount), 220);
    return () => window.clearInterval(timer);
  }, [frameCount, open, playing, reducedMotion]);

  if (frameCount < 2) return null;

  function moveFrame(delta: number) {
    setFrameIndex((index) => (index + delta + frameCount) % frameCount);
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, moved: false };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.x;
    if (Math.abs(distance) < 12) return;
    drag.moved = true;
    const steps = Math.max(1, Math.floor(Math.abs(distance) / 24));
    moveFrame(distance < 0 ? steps : -steps);
    drag.x = event.clientX;
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveFrame(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveFrame(-1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setFrameIndex(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      setFrameIndex(frameCount - 1);
    }
    if (event.key === " ") {
      event.preventDefault();
      if (!reducedMotion) setPlaying((value) => !value);
    }
  }

  return (
    <section className={`official-360 ${open ? "official-360--open" : ""}`} aria-label={`Visualização 360 graus da ${model}`}>
      {!open ? (
        <button className="official-360__trigger" type="button" onClick={() => setOpen(true)}>
          <span className="official-360__trigger-mark"><Rotate3D size={16} /></span>
          <span><b>Explorar em 360°</b><small>Arraste para ver os ângulos oficiais</small></span>
          <ChevronRight size={16} />
        </button>
      ) : (
        <div className="official-360__panel">
          <div className="official-360__header">
            <div><span className="page-kicker">VISUALIZAÇÃO OFICIAL</span><h3>{model} / 360°</h3><small>Arraste horizontalmente para girar</small></div>
            <button className="official-360__close" type="button" onClick={() => { setOpen(false); setPlaying(false); }} aria-label="Fechar visualização 360 graus"><X size={16} /></button>
          </div>
          <div className="official-360__stage" tabIndex={0} role="application" aria-label={`Arraste ou use as setas para girar a ${model}`} onKeyDown={onKeyDown} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
            <AssetImage key={`${model}-${currentFrame}`} src={currentFrame} alt={`${model}, ângulo ${frameIndex + 1} de ${frameCount}, fotografia oficial`} fallbackLabel={model} loading="eager" decoding="async" fetchPriority="high" />
            <button className="official-360__arrow official-360__arrow--left" type="button" onClick={() => moveFrame(-1)} aria-label="Ver ângulo anterior"><ChevronLeft size={18} /></button>
            <button className="official-360__arrow official-360__arrow--right" type="button" onClick={() => moveFrame(1)} aria-label="Ver próximo ângulo"><ChevronRight size={18} /></button>
          </div>
          <div className="official-360__controls">
            <span aria-live="polite">Ângulo {String(frameIndex + 1).padStart(2, "0")} / {String(frameCount).padStart(2, "0")}</span>
            <div className="official-360__actions">
              <button type="button" onClick={() => moveFrame(-1)} aria-label="Ângulo anterior"><ChevronLeft size={15} /></button>
              <button type="button" onClick={() => { if (!reducedMotion) setPlaying((value) => !value); }} disabled={reducedMotion} aria-label={playing ? "Pausar rotação" : "Girar automaticamente"}>{playing ? <Pause size={14} /> : <Play size={14} />}</button>
              <button type="button" onClick={() => moveFrame(1)} aria-label="Próximo ângulo"><ChevronRight size={15} /></button>
            </div>
            <a href={source} target="_blank" rel="noreferrer"><ExternalLink size={13} /> Fonte oficial</a>
          </div>
        </div>
      )}
    </section>
  );
}
