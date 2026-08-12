// Style reminder: WhatsApp is a restrained utility accent, never a replacement for the charcoal / paper / vermilion editorial system.
import { ArrowUpRight, MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  model?: string;
  compact?: boolean;
  label?: string;
};

export function whatsappHref(model?: string) {
  const message = model
    ? `Olá, Neto! Acabei de ver a ${model} no catálogo e quero avançar. Você pode me confirmar disponibilidade, cores, condições de pagamento e o próximo passo para comprar?`
    : "Olá, Neto! Vi o catálogo da Neto Motos e quero escolher uma Shineray. Pode me ajudar a comparar os modelos, condições e disponibilidade?";
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
