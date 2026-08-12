// Style reminder: WhatsApp is a restrained utility accent, never a replacement for the charcoal / paper / vermilion editorial system.
import { ArrowUpRight, MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  model?: string;
  compact?: boolean;
  label?: string;
};

export function whatsappHref(model?: string) {
  const message = model
    ? `Olá Neto! Vi a ${model} no catálogo e gostaria de saber as condições para comprar.`
    : "Olá Neto! Vi o catálogo da Neto Motos e gostaria de conversar sobre uma Shineray.";
  return `https://wa.me/5511978473480?text=${encodeURIComponent(message)}`;
}

export function WhatsAppButton({ model, compact = false, label }: WhatsAppButtonProps) {
  return (
    <a
      className={`whatsapp-button ${compact ? "whatsapp-button--compact" : ""}`}
      href={whatsappHref(model)}
      target="_blank"
      rel="noreferrer"
      data-analytics="click_whatsapp"
      aria-label={label ?? `Falar com o Neto sobre ${model ?? "o catálogo"}`}
    >
      <MessageCircle size={compact ? 15 : 17} strokeWidth={1.8} />
      <span>{label ?? "Falar com o Neto"}</span>
      {!compact && <ArrowUpRight size={15} strokeWidth={1.8} />}
    </a>
  );
}

