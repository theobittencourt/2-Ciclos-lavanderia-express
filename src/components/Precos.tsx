"use client";

import { motion } from "framer-motion";
import { Check, Clock3 } from "lucide-react";

export function Precos() {
  return (
    <section id="precos" className="bg-roxo-50 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-roxo-700">
            Preços
          </span>
          <h2 className="font-serif text-3xl leading-tight text-roxo-950 sm:text-4xl">
            Simples, transparente, sem surpresa
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-3xl bg-roxo-500 p-10 text-center shadow-2xl shadow-roxo-900/20 sm:p-14"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, var(--color-champagne-400) 0, transparent 45%)",
            }}
          />

          <div className="relative">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-champagne-300">
              Lavar ou secar — 1 cesto
            </p>
            <div className="mb-6 flex items-end justify-center gap-1">
              <span className="pb-2 font-serif text-2xl text-champagne-300">R$</span>
              <span className="font-serif text-6xl leading-none text-white sm:text-7xl">
                16,90
              </span>
            </div>

            <ul className="mx-auto mb-8 flex max-w-sm flex-col gap-3 text-left">
              {[
                "Sabão OMO e amaciante Comfort inclusos",
                "Dosagem automática — não precisa trazer nada de casa",
                "Máquinas Speed Queen / Wash&Dry Now",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-roxo-100/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-400" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-champagne-400/40 bg-champagne-400/10 px-5 py-2.5 text-xs font-semibold text-champagne-300">
              <Clock3 className="h-4 w-4" />
              Desconto especial das 6h às 8h — confira no local
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-roxo-950/50">
          Promoção não válida para os demais horários. Valores sujeitos a alteração.
        </p>
      </div>
    </section>
  );
}
