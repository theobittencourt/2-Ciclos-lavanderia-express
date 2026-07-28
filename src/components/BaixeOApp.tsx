"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, Bell, QrCode } from "lucide-react";
import { QRCodePlaceholder } from "./QRCodePlaceholder";

const beneficios = [
  { icon: Zap, texto: "Pague em segundos, sem depender do totem" },
  { icon: Bell, texto: "Receba um aviso quando a roupa estiver pronta" },
  { icon: Smartphone, texto: "Acompanhe o ciclo de lavagem pelo celular" },
];

export function BaixeOApp() {
  return (
    <section id="app" className="bg-roxo-950 px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:flex-row lg:items-center lg:gap-14"
      >
        <div className="text-center lg:text-left">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-champagne-400">
            App Ciclos
          </span>
          <h2 className="mb-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
            Chega de depender do totem
          </h2>
          <p className="mb-8 text-base leading-relaxed text-roxo-100/80 sm:text-lg">
            Baixe o app Ciclos e leve a lavanderia no bolso: pague, acompanhe o
            ciclo da sua roupa e receba um aviso assim que estiver pronta —
            tudo direto do seu celular.
          </p>

          <ul className="mb-8 flex flex-col items-center gap-3 lg:items-start">
            {beneficios.map(({ icon: Icon, texto }) => (
              <li key={texto} className="flex items-center gap-3 text-sm text-roxo-100/90">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-champagne-500/15 text-champagne-300">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                {texto}
              </li>
            ))}
          </ul>

          <p className="hidden items-center justify-center gap-2 text-sm font-medium text-champagne-300 lg:flex lg:justify-start">
            <QrCode className="h-4 w-4" />
            Aponte a câmera do seu celular para o QR code ao lado
          </p>

          {/* TODO: trocar pelo link real da App Store / Google Play quando o app estiver publicado */}
          <a
            href="#"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-champagne-500 px-7 py-3.5 text-sm font-semibold text-roxo-950 transition-all hover:bg-champagne-400 hover:shadow-lg hover:shadow-champagne-500/20 lg:hidden"
          >
            <Smartphone className="h-4 w-4" />
            Baixar o app
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full max-w-[200px] shrink-0"
        >
          <QRCodePlaceholder className="w-full shadow-2xl shadow-roxo-950/40" />
          <p className="mt-4 text-center text-xs text-roxo-100/60">
            Escaneie para baixar o app
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
