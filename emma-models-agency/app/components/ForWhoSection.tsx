"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "1", unit: "año", label: "Duración del programa" },
  { value: "3", unit: "años", label: "Edad mínima de ingreso" },
  { value: "41", unit: "años", label: "Edad máxima de ingreso" },
  { value: "3", unit: "sedes", label: "Ciudades disponibles" },
];

const ageGroups = [
  {
    range: "3 – 7 años",
    label: "Pequeños Talentos",
    description: "Iniciamos el desarrollo de la seguridad personal desde la primera infancia a través del juego y el arte.",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&q=80",
  },
  {
    range: "8 – 17 años",
    label: "Jóvenes Promesas",
    description: "Etapa clave para construir identidad, autoestima y habilidades artísticas que perdurarán toda la vida.",
    image: "https://images.unsplash.com/photo-1541534401786-2077eed87a74?w=400&q=80",
  },
  {
    range: "18 – 41 años",
    label: "Talentos en Evolución",
    description: "Nunca es tarde. Reinvéntate, abre nuevas puertas y descubre el poder que siempre has tenido.",
    image: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=400&q=80",
  },
];

export default function ForWhoSection() {
  return (
    <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-sans mb-4">
            El curso es para ti
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Para quién es{" "}
            <span className="text-gradient-gold italic">EMMA</span>?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
            No importa tu edad ni experiencia previa. Si tienes el deseo de
            crecer, EMMA tiene un lugar para ti.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-400/40 rounded-2xl overflow-hidden mb-20 border border-dark-400/40"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-100 px-8 py-8 text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-black text-gradient-gold leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-gold-300 text-sm font-sans mb-2">
                {stat.unit}
              </div>
              <div className="text-gray-500 text-xs font-sans tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Age group cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ageGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group relative rounded-2xl overflow-hidden bg-dark-200 border border-dark-400 hover:border-gold-600/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={group.image}
                  alt={group.label}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-dark-200/40 to-transparent" />

                {/* Age range badge */}
                <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm border border-gold-600/40 rounded-full px-4 py-1">
                  <span className="text-gold-300 text-xs font-semibold font-sans">
                    {group.range}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {group.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {group.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
