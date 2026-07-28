"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-roxo-700">
            Localização
          </span>
          <h2 className="font-serif text-3xl leading-tight text-roxo-950 sm:text-4xl">
            Venha conhecer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-roxo-100"
          >
            <iframe
              title="Localização Ciclos Lavanderia Express"
              src="https://www.google.com/maps?q=Ciclos%20Lavanderia%20Express&output=embed"
              className="h-80 w-full grayscale-[15%] lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-6 rounded-2xl bg-roxo-50 p-8 sm:p-10"
          >
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-roxo-700" />
              <div>
                <p className="font-serif text-lg text-roxo-950">Endereço</p>
                <p className="text-sm text-roxo-950/70">
                  Tv. Ranulfo Féo, 75 — Várzea, Teresópolis/RJ, 25953-650
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-roxo-700" />
              <div>
                <p className="font-serif text-lg text-roxo-950">Horário</p>
                <p className="text-sm text-roxo-950/70">Todos os dias, das 6h às 22h</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-roxo-700" />
              <div>
                <p className="font-serif text-lg text-roxo-950">WhatsApp</p>
                <a
                  href="https://wa.me/5521972225300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-roxo-700 underline decoration-champagne-400 underline-offset-4 hover:text-roxo-950"
                >
                  (21) 97222-5300
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-roxo-700" />
              <div>
                <p className="font-serif text-lg text-roxo-950">Instagram</p>
                <a
                  href="https://www.instagram.com/2cicloslavanderia.oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-roxo-700 underline decoration-champagne-400 underline-offset-4 hover:text-roxo-950"
                >
                  @2cicloslavanderia.oficial
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
