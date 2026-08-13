// Style reminder: WhatsApp is a restrained utility accent, never a replacement for the charcoal / paper / vermilion editorial system.
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type WhatsAppButtonProps = {
  model?: string;
  compact?: boolean;
  label?: string;
};

export function whatsappHref(model?: string) {
  const message = model
    ? `Olá, Neto! Vi a ${model} no catálogo e gostaria de saber mais sobre ela.`
    : "Olá, Neto! Estou vendo o catálogo e gostaria de uma orientação para escolher um modelo.";
  return `https://wa.me/5511978473480?text=${encodeURIComponent(message)}`;
}

export type QuoteDetails = {
  name: string;
  phone: string;
  model: string;
  budget: string;
  use: string;
  message: string;
};

export function quoteHref(details: QuoteDetails) {
  const message = [
    "Olá, Neto! Quero solicitar um orçamento.",
    `Nome: ${details.name}`,
    `Meu WhatsApp: ${details.phone}`,
    `Modelo de interesse: ${details.model}`,
    `Faixa de investimento: ${details.budget || "Ainda não defini"}`,
    `Uso principal: ${details.use || "Quero orientação"}`,
    details.message ? `Observações: ${details.message}` : "",
  ].filter(Boolean).join("\n");
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
      onClick={() => trackEvent("whatsapp_click", { model: model ?? "catalogo" })}
      aria-label={label ?? `Falar com o Neto sobre ${model ?? "o catálogo"}`}
    >
      <span className="whatsapp-mark" aria-hidden="true"><PhoneCall size={compact ? 13 : 15} strokeWidth={2.4} /></span>
      <span>{label ?? "Falar com o Neto"}</span>
      {!compact && <ArrowUpRight size={15} strokeWidth={1.8} />}
    </a>
  );
}
