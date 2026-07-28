"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const fotos = [
  {
    src: "/img/ambiente/fachada-noturna.jpeg",
    label: "Fachada — letreiro CICLOS na parede roxa",
    className: "sm:row-span-2",
  },
  {
    src: "/img/ambiente/secadora-wash-dry-now.jpeg",
    label: "Secadora Wash&Dry Now",
  },
  {
    src: "/img/ambiente/estacao-cafe-snacks.jpeg",
    label: "Estação de café Dolce Gusto e snacks",
  },
  {
    src: "/img/ambiente/ambiente-tv-ar-condicionado.jpeg",
    label: "Ambiente climatizado com TV e Wi-Fi",
  },
  {
    src: "/img/ambiente/lavadora-speed-queen.jpeg",
    label: "Lavadora Speed Queen",
  },
  {
    src: "/img/ambiente/mesa-inox-area-dobra.jpeg",
    label: "Mesa em aço inox e área de dobra",
  },
];

export function Ambiente() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section id="ambiente" className="bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-roxo-700">
            Ambiente
          </span>
          <h2 className="font-serif text-3xl leading-tight text-roxo-950 sm:text-4xl">
            Um espaço que parece um lounge, não uma lavanderia
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:grid-rows-2">
          {fotos.map((foto, i) => (
            <motion.button
              key={foto.src}
              type="button"
              onClick={() => setAberta(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.015 }}
              className={`group relative overflow-hidden rounded-xl text-left ${foto.className ?? ""}`}
            >
              <div className="relative aspect-[4/3] h-full w-full overflow-hidden">
                <Image
                  src={foto.src}
                  alt={foto.label}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-roxo-950/80 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {foto.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {aberta !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setAberta(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-roxo-950/90 p-6"
        >
          <button
            type="button"
            onClick={() => setAberta(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fotos[aberta].src}
              alt={fotos[aberta].label}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
