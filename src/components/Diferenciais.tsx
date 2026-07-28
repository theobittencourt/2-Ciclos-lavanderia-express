"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Zap,
  Coffee,
  ShieldCheck,
  CreditCard,
  Clock,
  type LucideIcon,
} from "lucide-react";

type Diferencial = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
};

const diferenciais: Diferencial[] = [
  {
    icon: Droplets,
    titulo: "Sabão e amaciante inclusos",
    descricao:
      "OMO e Comfort dosados automaticamente em cada ciclo. Chegue de mãos vazias — nós cuidamos do resto.",
  },
  {
    icon: Zap,
    titulo: "Máquinas industriais",
    descricao:
      "Speed Queen e Wash&Dry Now: mais rápidas, mais potentes e muito mais eficientes que qualquer máquina de casa.",
  },
  {
    icon: Coffee,
    titulo: "Ambiente para esperar bem",
    descricao:
      "Climatizado, com Wi-Fi, café expresso Dolce Gusto e snacks à vontade enquanto sua roupa fica pronta.",
  },
  {
    icon: ShieldCheck,
    titulo: "Segurança por câmeras",
    descricao:
      "Monitoramento contínuo do espaço — suas roupas e seus pertences sempre por perto e protegidos.",
  },
  {
    icon: CreditCard,
    titulo: "Pagamento sem fricção",
    descricao:
      "PIX ou totem próprio. Sem dinheiro, sem ficha, sem complicação.",
  },
  {
    icon: Clock,
    titulo: "Todos os dias, 6h às 22h",
    descricao:
      "Sua rotina não espera, e a gente também não. Aberto inclusive fins de semana e feriados.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-roxo-50 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-roxo-700">
            Diferenciais
          </span>
          <h2 className="font-serif text-3xl leading-tight text-roxo-950 sm:text-4xl">
            Tudo pensado para o seu tempo valer mais
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {diferenciais.map(({ icon: Icon, titulo, descricao }) => (
            <motion.div
              key={titulo}
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-roxo-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-roxo-700/10"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-roxo-700 text-champagne-300 transition-colors group-hover:bg-roxo-800">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 font-serif text-lg text-roxo-950">{titulo}</h3>
              <p className="text-sm leading-relaxed text-roxo-950/65">{descricao}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
