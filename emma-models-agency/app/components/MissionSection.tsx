"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[480px] md:h-[560px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
                alt="Nuestra Misión EMMA"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-dark-200 border border-gold-600/40 rounded-xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="font-display text-4xl font-black text-gradient-gold">22</div>
                  <div className="text-gray-400 text-xs tracking-wide font-sans">años de</div>
                  <div className="text-gold-300 text-xs font-semibold font-sans">experiencia</div>
                </div>
                <div className="w-px h-12 bg-gold-600/30" />
                <div className="text-center">
                  <div className="font-display text-4xl font-black text-gradient-gold">3</div>
                  <div className="text-gray-400 text-xs tracking-wide font-sans">ciudades</div>
                  <div className="text-gold-300 text-xs font-semibold font-sans">en Colombia</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative frame accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold-400/40 rounded-tl-xl pointer-events-none" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-sans mb-5">
              Nuestra Misión
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Transformamos vidas,{" "}
              <span className="text-gradient-gold italic">no solo apariencias</span>
            </h2>
            <div className="w-16 h-px bg-gold-400/60 mb-8" />

            <div className="space-y-5 font-sans text-gray-300 leading-relaxed">
              <p>
                En EMMA Models Agency, nuestra misión trasciende el modelaje
                convencional. Nos enfocamos en el{" "}
                <span className="text-white font-medium">
                  desarrollo de la salud mental y emocional
                </span>{" "}
                de cada alumno, construyendo desde adentro hacia afuera.
              </p>
              <p>
                Formamos personas con una{" "}
                <span className="text-white font-medium">autoestima sólida y genuina</span>,
                capaces de enfrentar con elegancia y confianza los desafíos
                personales y profesionales que se presenten en su camino.
              </p>
              <p>
                Creemos que cuando una persona se conoce, se valora y se
                expresa auténticamente, el mundo entero la nota. Ese es nuestro
                legado: crear{" "}
                <span className="text-gold-300 font-medium">
                  personas extraordinarias
                </span>{" "}
                que trascienden.
              </p>
            </div>

            {/* Values pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Autoestima", "Disciplina", "Autenticidad", "Resiliencia", "Excelencia"].map(
                (value) => (
                  <span
                    key={value}
                    className="text-xs font-sans text-gold-300 border border-gold-600/40 bg-gold-400/5 px-4 py-1.5 rounded-full"
                  >
                    {value}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
