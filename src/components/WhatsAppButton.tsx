"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// Desativado: o site é apenas uma demonstração e a oferta expirou.
export function WhatsAppButton() {
  return (
    <motion.span
      role="button"
      aria-disabled="true"
      aria-label="WhatsApp indisponível na versão demonstrativa"
      title="Indisponível na versão demonstrativa"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 cursor-not-allowed items-center justify-center rounded-full bg-neutral-500 text-white shadow-lg shadow-black/20 grayscale"
    >
      <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />
    </motion.span>
  );
}
