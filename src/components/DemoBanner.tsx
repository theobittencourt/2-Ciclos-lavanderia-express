import { MessageCircle } from "lucide-react";

const WHATSAPP_THEO = "5521967543780";
const MENSAGEM = "Olá Theo, gostaria de uma nova oferta para o site da Dois Ciclos.";

const whatsappHref = `https://wa.me/${WHATSAPP_THEO}?text=${encodeURIComponent(MENSAGEM)}`;

export function DemoBanner() {
  return (
    <div role="alert" className="relative bg-black text-white">
      {/* Faixa zebrada de aviso */}
      <div
        aria-hidden
        className="h-1.5 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #facc15 0 12px, #000 12px 24px)",
        }}
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-5 sm:px-10">
        <p className="text-xs leading-snug sm:text-sm">
          <span className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Site demonstrativo
          </span>
          <span className="mx-2 text-white/40">·</span>
          Esta página é apenas uma demo e a oferta expirou.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-4 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-[#1ebe5a] sm:text-sm"
        >
          <MessageCircle className="h-4 w-4" fill="currentColor" strokeWidth={0} />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
