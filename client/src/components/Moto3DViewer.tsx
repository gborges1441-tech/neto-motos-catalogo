/**
 * Direção visual: Arquivo de Performance / neo-editorial automotivo.
 * Este viewer só recebe GLB/GLTF autorizado. Não converte fotos ou galerias
 * em falsa rotação e permanece fora do bundle inicial via importação dinâmica.
 */
import "@google/model-viewer";
import { ExternalLink, Rotate3D, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useRef, useState, type ElementType } from "react";
import type { MotoThreeDAsset } from "@/data/motos";

const ModelViewer = "model-viewer" as ElementType;

type Moto3DViewerProps = {
  model: string;
  asset: MotoThreeDAsset;
};

function updateOrbit(orbit: string, thetaDelta = 0, radiusDelta = 0) {
  const [theta = "0deg", phi = "75deg", radius = "105%"] = orbit.trim().split(/\s+/);
  const angle = Number.parseFloat(theta);
  const distance = Number.parseFloat(radius);
  const safeAngle = Number.isFinite(angle) ? angle : 0;
  const safeDistance = Number.isFinite(distance) ? distance : 105;
  const nextAngle = ((safeAngle + thetaDelta) % 360 + 360) % 360;
  const nextDistance = Math.max(62, Math.min(145, safeDistance + radiusDelta));
  return `${nextAngle.toFixed(0)}deg ${phi} ${nextDistance.toFixed(0)}%`;
}

export function Moto3DViewer({ model, asset }: Moto3DViewerProps) {
  const [open, setOpen] = useState(false);
  const [orbit, setOrbit] = useState(asset.initialOrbit ?? "0deg 75deg 105%");
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const focusBeforeOpen = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setOpen(false);
    setStatus("loading");
    setOrbit(asset.initialOrbit ?? "0deg 75deg 105%");
  }, [asset.initialOrbit, asset.modelUrl, model]);

  useEffect(() => {
    if (!open) return;
    focusBeforeOpen.current = document.activeElement as HTMLElement | null;
    window.requestAnimationFrame(() => closeRef.current?.focus());
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.requestAnimationFrame(() => focusBeforeOpen.current?.focus() ?? triggerRef.current?.focus());
    };
  }, [open]);

  function openViewer() {
    setStatus("loading");
    setOpen(true);
  }

  return (
    <section className={`moto-3d ${open ? "moto-3d--open" : ""}`} data-no-swipe aria-label={`Modelo 3D da ${model}`}>
      {!open ? (
        <button ref={triggerRef} className="moto-3d__trigger" type="button" onClick={openViewer}>
          <span className="moto-3d__trigger-mark"><Rotate3D size={16} /></span>
          <span><b>Explorar em 3D</b><small>Modelo digital oficial · arraste para girar</small></span>
          <Rotate3D size={15} aria-hidden="true" />
        </button>
      ) : (
        <div className="moto-3d__dialog" role="dialog" aria-modal="true" aria-label={`Exploração 3D da ${model}`}>
          <div className="moto-3d__header">
            <div><span className="page-kicker">MODELO DIGITAL OFICIAL</span><h3>{model} / 3D</h3><small>Arraste para orbitar · pinça ou controles para aproximar</small></div>
            <button ref={closeRef} className="moto-3d__close" type="button" onClick={() => setOpen(false)} aria-label="Fechar visualizador 3D"><X size={17} /></button>
          </div>
          <div className="moto-3d__stage" aria-busy={status === "loading"}>
            <ModelViewer
              src={asset.modelUrl}
              poster={asset.poster}
              alt={`Modelo tridimensional oficial da ${model}`}
              camera-controls
              disable-pan
              camera-orbit={orbit}
              camera-target={asset.cameraTarget ?? "auto auto auto"}
              environment-image={asset.environment ?? "neutral"}
              shadow-intensity="0.72"
              exposure="1"
              interaction-prompt="none"
              loading="lazy"
              reveal="auto"
              onLoad={() => setStatus("ready")}
              onError={() => setStatus("error")}
            />
            {status === "loading" && <span className="moto-3d__loading">Carregando malha 3D…</span>}
            {status === "error" && <span className="moto-3d__error">Não foi possível carregar este arquivo 3D. Consulte a fonte oficial.</span>}
          </div>
          <div className="moto-3d__controls" aria-label="Controles da visualização 3D">
            <div className="moto-3d__control-group">
              <button type="button" onClick={() => setOrbit((value) => updateOrbit(value, -18))} aria-label="Girar para a esquerda"><Rotate3D size={15} /></button>
              <button type="button" onClick={() => setOrbit(asset.initialOrbit ?? "0deg 75deg 105%") } aria-label="Restaurar enquadramento"><RotateCcw size={15} /></button>
              <button type="button" onClick={() => setOrbit((value) => updateOrbit(value, 18))} aria-label="Girar para a direita"><Rotate3D className="moto-3d__flip" size={15} /></button>
              <button type="button" onClick={() => setOrbit((value) => updateOrbit(value, 0, -13))} aria-label="Aproximar"><ZoomIn size={15} /></button>
              <button type="button" onClick={() => setOrbit((value) => updateOrbit(value, 0, 13))} aria-label="Afastar"><ZoomOut size={15} /></button>
            </div>
            <a href={asset.source} target="_blank" rel="noreferrer"><ExternalLink size={13} /> Fonte do modelo</a>
          </div>
        </div>
      )}
    </section>
  );
}
