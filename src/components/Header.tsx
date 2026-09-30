"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Smartphone } from "lucide-react";
import { DemoBanner } from "@/components/DemoBanner";

const links = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#precos", label: "Preços" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#app", label: "App" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const { scrollY } = useScroll();

  // Transparente sobre o Hero, ganha fundo sólido (#2a0f33) ao rolar
  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(42, 15, 51, 0)", "rgba(42, 15, 51, 0.97)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);

  return (
    <motion.header
      style={{ background }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm"
    >
      <DemoBanner />
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 h-px bg-white/15"
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 sm:px-10">
        <a href="#top" className="flex shrink-0 items-center">
          <Image
            src="/img/logo.png"
            alt="Ciclos Lavanderia Express"
            width={1536}
            height={1024}
            className="h-20 w-auto sm:h-24"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-champagne-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#app"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-champagne-500 px-3 py-2 text-xs font-semibold text-roxo-950 transition-colors hover:bg-champagne-400 sm:px-4 sm:text-sm"
        >
          <Smartphone className="h-4 w-4" />
          <span className="hidden sm:inline">Baixar o App</span>
        </a>
      </div>
    </motion.header>
  );
}
