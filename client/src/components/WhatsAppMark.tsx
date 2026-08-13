type WhatsAppMarkProps = { size?: number };

export function WhatsAppMark({ size = 18 }: WhatsAppMarkProps) {
  return (
    <svg className="whatsapp-glyph" width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4.3A11.7 11.7 0 0 0 6.1 22.2L4.5 27.6l5.7-1.5A11.7 11.7 0 1 0 16 4.3Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M11.2 10.5c.3-.5.6-.6 1-.6h.7c.3 0 .6.2.8.6l1 2.4c.2.4.1.7-.1.9l-.8 1c.7 1.3 1.8 2.4 3.2 3.1l1-.8c.3-.2.6-.2.9-.1l2.4 1.1c.4.2.6.4.5.8-.1 1-.7 1.8-1.5 2.2-.7.4-1.6.2-2.5 0-1.1-.3-2.6-1-4.1-2.1-1.5-1.2-2.7-2.6-3.5-4.1-.7-1.4-1-2.6-.7-3.5.2-.6.8-1.3 1.7-1.5Z" fill="currentColor" />
    </svg>
  );
}
