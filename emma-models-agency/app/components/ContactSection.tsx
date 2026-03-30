"use client";

import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/573116870302?text=Hola%2C%20me%20interesa%20iniciar%20mi%20formaci%C3%B3n%20en%20EMMA%20Models%20Agency";

const locations = [
  {
    city: "Montería",
    department: "Córdoba",
    description: "Nuestra sede principal, cuna de EMMA en el Caribe colombiano.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    city: "Barranquilla",
    department: "Atlántico",
    description: "La puerta de oro de Colombia, donde el talento no tiene límites.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    city: "Cartagena",
    department: "Bolívar",
    description: "Ciudad Heroica, sede de elegancia, historia y nuevos comienzos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-32 bg-dark-100 relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

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
            Estamos esperándote
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestras{" "}
            <span className="text-gradient-gold italic">Sedes</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto font-sans leading-relaxed">
            Encuéntranos en tres ciudades del Caribe colombiano. Tu ciudad, tu
            transformación.
          </p>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group bg-dark-200 border border-dark-400 hover:border-gold-600/50 rounded-2xl p-8 text-center transition-all duration-400 hover:bg-dark-300 hover:shadow-[0_8px_40px_rgba(200,168,107,0.1)]"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-400/10 text-gold-400 mb-5 group-hover:bg-gold-400/20 transition-colors duration-300">
                {loc.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                {loc.city}
              </h3>
              <p className="text-gold-400/70 text-xs font-sans tracking-widest uppercase mb-4">
                {loc.department}
              </p>
              <div className="w-8 h-px bg-gold-400/30 mx-auto mb-4" />
              <p className="text-gray-400 text-sm font-sans leading-relaxed">
                {loc.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-gradient-to-br from-dark-200 to-dark-300 border border-gold-600/30 rounded-2xl p-10 md:p-14 text-center overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-sans mb-4 relative z-10">
            Contáctanos Ahora
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">
            Tu transformación empieza{" "}
            <span className="text-gradient-gold italic">hoy</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto font-sans relative z-10">
            Escríbenos y un asesor te contactará para orientarte en el proceso
            de inscripción sin compromiso.
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative z-10">
            <a
              href="mailto:emmamodelsagency@gmail.com"
              className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-sans text-sm transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              emmamodelsagency@gmail.com
            </a>
            <span className="hidden sm:block text-gold-600/40">|</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-sans text-sm transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +57 311 687 0302
            </a>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-300 text-dark font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,168,107,0.4)] hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
