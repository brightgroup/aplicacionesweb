"use client";

import { motion } from "framer-motion";

const letters = [
  {
    letter: "E",
    word: "Empoderamiento",
    description:
      "Te dotamos de herramientas para que te conviertas en la mejor versión de ti mismo. Tu poder interno es la base de todo.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 24v8M17 29l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    letter: "M",
    word: "Moda",
    description:
      "Dominamos el lenguaje de la imagen. Aprende pasarela, fotopose, asesoramiento personal y las tendencias que marcan el mundo.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M12 8l8 4 8-4v22l-8 4-8-4V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 12v22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    letter: "M",
    word: "Mentalidad Fuerte",
    description:
      "Cultivamos la resiliencia, la disciplina y la autoestima sólida. Una mente poderosa es el cimiento del éxito duradero.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 8c6.627 0 12 5.373 12 12 0 4.418-2.393 8.28-5.956 10.38L24 34H16l-2.044-3.62C10.393 28.28 8 24.418 8 20c0-6.627 5.373-12 12-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 34h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 14v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    letter: "A",
    word: "Autenticidad",
    description:
      "Tu singularidad es tu mayor fortaleza. Te enseñamos a brillar siendo exactamente quien eres, sin máscaras ni pretensiones.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 8l3.09 6.26L30 15.27l-5 4.87 1.18 6.88L20 23.77l-6.18 3.25L15 20.14 10 15.27l6.91-1.01L20 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function EmmaAcronym() {
  return (
    <section className="py-24 md:py-32 bg-dark-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-sans mb-4">
            Nuestra Filosofía
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            ¿Qué significa{" "}
            <span className="text-gradient-gold italic">EMMA</span>?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
            Cuatro pilares que definen quiénes somos y la transformación que
            vivimos cada día.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {letters.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-dark-200 border border-dark-400 hover:border-gold-600/60 rounded-2xl p-8 text-center transition-all duration-500 hover:bg-dark-300 hover:shadow-[0_8px_40px_rgba(200,168,107,0.12)] cursor-default"
            >
              {/* Large background letter */}
              <span className="absolute top-4 right-5 font-display text-8xl font-black text-white/[0.04] group-hover:text-gold-400/[0.07] transition-colors duration-500 select-none leading-none">
                {item.letter}
              </span>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-400/10 text-gold-400 mb-6 group-hover:bg-gold-400/20 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Letter accent */}
              <div className="font-display text-5xl font-black text-gradient-gold mb-2 leading-none">
                {item.letter}
              </div>

              {/* Word */}
              <h3 className="font-display text-lg font-semibold text-white mb-4">
                {item.word}
              </h3>

              {/* Divider */}
              <div className="w-10 h-px bg-gold-400/40 mx-auto mb-4" />

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
