"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-dark border-t border-dark-400/40 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="font-display text-2xl font-bold text-gradient-gold mb-1">
            EMMA
          </div>
          <p className="text-gray-600 text-xs tracking-[0.2em] uppercase font-sans">
            Models Agency
          </p>
        </div>

        {/* Quick links */}
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="#"
            className="text-gray-500 hover:text-gold-300 text-xs font-sans tracking-wide transition-colors duration-200"
          >
            Política de Privacidad
          </a>
          <span className="text-dark-400">|</span>
          <a
            href="#"
            className="text-gray-500 hover:text-gold-300 text-xs font-sans tracking-wide transition-colors duration-200"
          >
            Términos de Servicio
          </a>
          <span className="text-dark-400">|</span>
          <a
            href="mailto:emmamodelsagency@gmail.com"
            className="text-gray-500 hover:text-gold-300 text-xs font-sans tracking-wide transition-colors duration-200"
          >
            Contacto
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-dark-400/40 mb-8" />

        {/* Meta compliance disclaimer */}
        <div className="bg-dark-100 border border-dark-400/50 rounded-xl p-6 text-center mb-6">
          <p className="text-gray-500 text-xs font-sans leading-relaxed max-w-2xl mx-auto">
            <span className="text-gray-400 font-medium">Aviso Legal:</span> Este
            sitio web <strong className="text-gray-400">no forma parte</strong>{" "}
            del sitio web de Facebook ni de Meta Platforms, Inc. Además, este
            sitio{" "}
            <strong className="text-gray-400">
              NO está respaldado por Facebook
            </strong>{" "}
            de ninguna manera. Facebook es una marca registrada de Meta
            Platforms, Inc.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 text-xs font-sans">
          © {currentYear} EMMA Models Agency — Una evolución de Splendor Agency.
          Todos los derechos reservados.
          <br />
          <span className="text-gray-700">
            Montería · Barranquilla · Cartagena — Colombia
          </span>
        </p>
      </div>
    </footer>
  );
}
