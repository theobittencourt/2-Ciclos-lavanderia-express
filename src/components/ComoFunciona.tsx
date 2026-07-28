"use client";

import { motion } from "framer-motion";
import {
  DoorOpen,
  Scale,
  QrCode,
  WashingMachine,
  Wind,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

type Passo = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
};

const passos: Passo[] = [
  { icon: DoorOpen, titulo: "Chegue", descricao: "Sem hora marcada, sem fila." },
  {
    icon: Scale,
    titulo: "Cesto medidor",
    descricao: "Coloque as roupas no cesto — ele já indica a quantidade certa.",
  },
  {
    icon: QrCode,
    titulo: "Pague no totem",
    descricao: "PIX ou totem próprio, em segundos.",
  },
  {
    icon: WashingMachine,
    titulo: "Lave",
    descricao: "Máquinas Speed Queen com sabão e amaciante dosados automaticamente.",
  },
  {
    icon: Wind,
    titulo: "Seque",
    descricao: "Secadoras industriais Wash&Dry Now, rápidas e eficientes.",
  },
  {
    icon: PartyPopper,
    titulo: "Pronto",
    descricao: "Roupa limpa, seca e dobrada. Tempo recuperado.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-roxo-500 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-champagne-400">
            Como funciona
          </span>
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
            Do cesto à roupa pronta, sem complicação
          </h2>
        </motion.div>

        <div className="relative">
          {/* Linha conectora */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-champagne-400/40 to-transparent lg:block" />

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {passos.map(({ icon: Icon, titulo, descricao }, i) => (
              <motion.div
                key={titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-champagne-500 text-roxo-950">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne-400">
                  Passo {i + 1}
                </span>
                <h3 className="mb-1 font-serif text-base text-white">{titulo}</h3>
                <p className="text-xs leading-relaxed text-roxo-100/70">{descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
