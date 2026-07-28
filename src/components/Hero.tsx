"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Smartphone, MapPin, BadgeCheck } from "lucide-react";

const marcasParceiras = ["OMO", "Comfort", "Speed Queen", "Wash&Dry Now"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-roxo-950"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-40 sm:px-10 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div style={{ opacity }} className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.35em] text-champagne-300"
          >
            Ciclos Lavanderia Express
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl"
          >
            Lavar roupa nunca{" "}
            <span className="font-bold text-champagne-300">pareceu tão bom</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-roxo-100/90 sm:text-lg"
          >
            Você não devia estar dobrando roupa — devia estar vivendo. Máquinas
            industriais, sabão e amaciante inclusos, ambiente climatizado com
            café e Wi-Fi. Em minutos, sua roupa está pronta e seu tempo é seu
            de novo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#app"
              className="group inline-flex items-center gap-2 rounded-full bg-champagne-500 px-7 py-3.5 text-sm font-semibold text-roxo-950 transition-all hover:bg-champagne-400 hover:shadow-lg hover:shadow-champagne-500/20"
            >
              <Smartphone className="h-4 w-4" />
              Baixar o App
            </a>
            <a
              href="#localizacao"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
            >
              <MapPin className="h-4 w-4" />
              Ver localização
            </a>
          </motion.div>

          {/* Selos das marcas parceiras */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10"
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-champagne-300/80">
              Produtos de qualidade
            </p>
            <div className="flex flex-wrap gap-2.5">
              {marcasParceiras.map((marca) => (
                <span
                  key={marca}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-champagne-300" />
                  {marca}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Foto da fachada à noite, ao lado do texto — apenas desktop */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl shadow-roxo-950/40 ring-1 ring-white/15 lg:aspect-[4/5]">
            <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%]">
              <Image
                src="/img/ambiente/fachada-noturna.jpeg"
                alt="Fachada da Ciclos Lavanderia Express à noite"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-white/30 p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-champagne-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
