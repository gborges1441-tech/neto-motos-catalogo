/**
 * Direção visual: Arquivo de Performance / neo-editorial automotivo.
 * Interação física, contida e acessível; frames exclusivamente oficiais do modelo.
 */
import { ChevronLeft, ChevronRight, ExternalLink, MousePointer2, Rotate3D, X } from "lucide-react";
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
  const [visibleFrameIndex, setVisibleFrameIndex] = useState(0);
  const [loadedFrames, setLoadedFrames] = useState<Set<number>>(() => new Set());
  const [failedFrames, setFailedFrames] = useState<Set<number>>(() => new Set());
  const dragRef = useRef<{ pointerId: number; x: number; remainder: number } | null>(null);
  const hoverRef = useRef<{ x: number; remainder: number } | null>(null);

  const safeFrames = useMemo(() => frames.filter(Boolean), [frames]);
  const frameCount = safeFrames.length;
  const currentFrame = safeFrames[visibleFrameIndex] ?? safeFrames[0];
  const isCurrentFrameReady = loadedFrames.has(frameIndex);
  const isLoadingCurrentFrame = !isCurrentFrameReady && !failedFrames.has(frameIndex);

  useEffect(() => {
    setOpen(false);
    setFrameIndex(0);
    setVisibleFrameIndex(0);
    setLoadedFrames(new Set());
    setFailedFrames(new Set());
  }, [model]);

  useEffect(() => {
    if (!open || frameCount < 2) return;

    let cancelled = false;
    safeFrames.forEach((src, index) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        if (cancelled) return;
        setLoadedFrames((previous) => {
          const next = new Set(previous);
          next.add(index);
          return next;
        });
        setFailedFrames((previous) => {
          if (!previous.has(index)) return previous;
          const next = new Set(previous);
          next.delete(index);
          return next;
        });
        setFrameIndex((requested) => {
          if (requested === index) setVisibleFrameIndex(index);
          return requested;
        });
      };
      image.onerror = () => {
        if (cancelled) return;
        setFailedFrames((previous) => {
          const next = new Set(previous);
          next.add(index);
          return next;
        });
      };
      image.src = src;
    });

    return () => {
      cancelled = true;
    };
  }, [frameCount, open, safeFrames]);

  useEffect(() => {
    if (!open || !loadedFrames.has(frameIndex)) return;
    setVisibleFrameIndex(frameIndex);
  }, [frameIndex, loadedFrames, open]);

  if (frameCount < 2) return null;

  function moveFrame(delta: number) {
    setFrameIndex((index) => (index + delta + frameCount) % frameCount);
  }

  function scrubFrame(
    clientX: number,
    target: HTMLDivElement,
    state: { x: number; remainder: number },
  ) {
    const distance = clientX - state.x + state.remainder;
    // Ritmo deliberadamente mais lento: uma travessia completa revela cerca de 12–16 ângulos.
    const stepSize = Math.max(42, Math.min(64, target.clientWidth / Math.max(frameCount * 0.55, 8)));
    if (Math.abs(distance) < stepSize) return state;

    const steps = Math.trunc(distance / stepSize);
    moveFrame(-steps);
    return { x: clientX, remainder: distance - steps * stepSize };
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button, a")) return;
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, remainder: 0 };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button, a")) return;
    const drag = dragRef.current;
    if (drag?.pointerId === event.pointerId) {
      dragRef.current = { ...scrubFrame(event.clientX, event.currentTarget, drag), pointerId: drag.pointerId };
      return;
    }

    if (event.pointerType !== "mouse") return;
    const hover = hoverRef.current ?? { x: event.clientX, remainder: 0 };
    hoverRef.current = scrubFrame(event.clientX, event.currentTarget, hover);
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function onPointerEnter(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse") hoverRef.current = { x: event.clientX, remainder: 0 };
  }

  function onPointerLeave(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && !dragRef.current) hoverRef.current = null;
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
            <div><span className="page-kicker">VISUALIZAÇÃO OFICIAL</span><h3>{model} / 360°</h3><small>Mova o cursor ou arraste para girar</small></div>
            <button className="official-360__close" type="button" onClick={() => setOpen(false)} aria-label="Fechar visualização 360 graus"><X size={16} /></button>
          </div>
          <div className="official-360__stage" tabIndex={0} role="application" aria-label={`Mova o cursor, arraste ou use as setas para girar a ${model}`} onKeyDown={onKeyDown} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
            {currentFrame ? <AssetImage key={`${model}-${visibleFrameIndex}`} src={currentFrame} alt={`${model}, ângulo ${visibleFrameIndex + 1} de ${frameCount}, fotografia oficial`} fallbackLabel={model} loading="eager" decoding="async" fetchPriority="high" /> : null}
            {isLoadingCurrentFrame ? <span className="official-360__loading" role="status">Carregando ângulo {String(frameIndex + 1).padStart(2, "0")}…</span> : null}
            {failedFrames.has(frameIndex) && !isCurrentFrameReady ? <span className="official-360__loading" role="status">Ângulo indisponível temporariamente</span> : null}
            <span className="official-360__scrub-hint" aria-hidden="true"><MousePointer2 size={13} /> mover para girar</span>
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
