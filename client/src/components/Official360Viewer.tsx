/**
 * Direção visual: Arquivo de Performance / neo-editorial automotivo.
 * Interação física, contida e acessível; frames exclusivamente oficiais do modelo.
 */
import { ChevronLeft, ChevronRight, ExternalLink, Rotate3D, X } from "lucide-react";
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
  const dragRef = useRef<{ pointerId: number; x: number; remainder: number } | null>(null);

  const safeFrames = useMemo(() => frames.filter(Boolean), [frames]);
  const frameCount = safeFrames.length;
  const currentFrame = safeFrames[frameIndex] ?? safeFrames[0];

  useEffect(() => {
    setOpen(false);
    setFrameIndex(0);
  }, [model]);

  useEffect(() => {
    if (!open || frameCount < 2) return;
    const preloadIndexes = [frameIndex, frameIndex + 1, frameIndex - 1].map((index) => (index + frameCount) % frameCount);
    preloadIndexes.forEach((index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = safeFrames[index];
    });
  }, [frameCount, frameIndex, open, safeFrames]);

  if (frameCount < 2) return null;

  function moveFrame(delta: number) {
    setFrameIndex((index) => (index + delta + frameCount) % frameCount);
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, remainder: 0 };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.x + drag.remainder;
    const stepSize = Math.max(10, Math.min(28, event.currentTarget.clientWidth / Math.max(frameCount * 1.15, 18)));
    if (Math.abs(distance) < stepSize) return;
    const steps = Math.trunc(distance / stepSize);
    moveFrame(-steps);
    drag.x = event.clientX;
    drag.remainder = distance - steps * stepSize;
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
            <button className="official-360__close" type="button" onClick={() => setOpen(false)} aria-label="Fechar visualização 360 graus"><X size={16} /></button>
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
              <button type="button" onClick={() => moveFrame(1)} aria-label="Próximo ângulo"><ChevronRight size={15} /></button>
            </div>
            <a href={source} target="_blank" rel="noreferrer"><ExternalLink size={13} /> Fonte oficial</a>
          </div>
        </div>
      )}
    </section>
  );
}
