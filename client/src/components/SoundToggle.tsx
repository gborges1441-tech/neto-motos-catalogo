// Style reminder: sound controls are quiet, optional and tactile—never an autoplay gimmick in the premium catalogue.
import { Volume2, VolumeX } from "lucide-react";

type SoundToggleProps = { enabled: boolean; onToggle: () => void };

export function SoundToggle({ enabled, onToggle }: SoundToggleProps) {
  return (
    <button className="sound-toggle" type="button" onClick={onToggle} aria-pressed={enabled} aria-label={enabled ? "Desativar som de página" : "Ativar som de página"}>
      {enabled ? <Volume2 size={15} strokeWidth={1.7} /> : <VolumeX size={15} strokeWidth={1.7} />}
      <span>{enabled ? "Som" : "Mudo"}</span>
    </button>
  );
}

