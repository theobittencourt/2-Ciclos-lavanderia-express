"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/**
 * SUBSTITUIR por depoimentos reais de clientes (nome, nota, texto).
 * Os itens abaixo são placeholders fictícios — não representam avaliações reais do Google.
 */
const depoimentos = [
  {
    nome: "Cliente Ciclos",
    nota: 5,
    texto:
      "Troquei duas horas de máquina de casa por vinte minutos aqui, com café na mão. Não volto atrás.",
  },
  {
    nome: "Cliente Ciclos",
    nota: 5,
    texto:
      "O ambiente é limpo, cheiroso e tranquilo. Parece mais um lounge do que uma lavanderia.",
  },
  {
    nome: "Cliente Ciclos",
    nota: 5,
    texto:
      "Levo o notebook, uso o Wi-Fi, trabalho um pouco e quando vejo a roupa já está pronta.",
  },
  {
    nome: "Cliente Ciclos",
    nota: 5,
    texto:
      "Sabão e amaciante inclusos fazem toda diferença — chego sem carregar nada.",
  },
];

export function Depoimentos() {
  return (
    <section className="bg-roxo-50 px-6 py-24 sm:px-10">
      {/* SUBSTITUIR: depoimentos acima são exemplos ilustrativos, trocar por avaliações reais de clientes */}
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-roxo-700">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl leading-tight text-roxo-950 sm:text-4xl">
            Quem já recuperou seu tempo
          </h2>
          <p className="mt-3 text-xs text-roxo-950/40">
            Exemplos ilustrativos — em breve, avaliações reais de clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-roxo-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: d.nota }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-champagne-500 text-champagne-500" />
                ))}
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-roxo-950/75">
                “{d.texto}”
              </p>
              <span className="text-xs font-semibold text-roxo-700">{d.nome}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
