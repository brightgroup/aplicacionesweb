"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/573116870302?text=Hola%2C%20me%20interesa%20iniciar%20mi%20formaci%C3%B3n%20en%20EMMA%20Models%20Agency";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
          alt="EMMA Models Agency"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/75 to-dark" />
        {/* Subtle gold vignette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="h-px w-8 bg-gold-400" />
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-sans">
            Una Evolución de Splendor Agency
          </span>
          <span className="h-px w-8 bg-gold-400" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6"
        >
          <span className="text-gradient-gold">Más que modelos,</span>
          <br />
          <span className="text-white">formamos personas</span>
          <br />
          <span className="text-gradient-gold italic">seguras</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
        >
          Una evolución de Splendor Agency con{" "}
          <span className="text-gold-300 font-medium">22 años de experiencia</span>{" "}
          formando talentos con autoestima sólida, habilidades reales y una
          mentalidad ganadora.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-300 text-dark font-semibold text-base md:text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,168,107,0.4)] hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon />
            Inicia tu formación hoy
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1 text-gold-400/60">
            <span className="text-xs tracking-widest uppercase font-sans">Descubre más</span>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
