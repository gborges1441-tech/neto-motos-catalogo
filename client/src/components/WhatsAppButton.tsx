// Style reminder: WhatsApp is a restrained utility accent, never a replacement for the charcoal / paper / vermilion editorial system.
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppMark } from "@/components/WhatsAppMark";

type WhatsAppButtonProps = {
  model?: string;
  compact?: boolean;
  label?: string;
  className?: string;
  source?: string;
  location?: string;
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

export function WhatsAppButton({ model, compact = false, label, className = "", source = "catalog", location = "whatsapp_button" }: WhatsAppButtonProps) {
  return (
    <a
      className={`whatsapp-button ${compact ? "whatsapp-button--compact" : ""} ${className}`.trim()}
      href={whatsappHref(model)}
      target="_blank"
      rel="noreferrer"
      data-analytics="click_whatsapp"
      onClick={() => trackEvent("whatsapp_click", { model: model ?? "catalogo", source, location })}
      aria-label={label ?? `Falar com o Neto sobre ${model ?? "o catálogo"}`}
    >
      <span className="whatsapp-mark" aria-hidden="true"><WhatsAppMark size={compact ? 15 : 18} /></span>
      <span>{label ?? "Falar com o Neto"}</span>
      {!compact && <ArrowUpRight size={15} strokeWidth={1.8} />}
    </a>
  );
}
