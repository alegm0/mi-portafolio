import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import scrollToSection from "../utils/scrollToSection";

export default function Hero() {
  const sectionMap = {
    Portfolio: "portafolio",
    Bio: "bio",
    Contact: "contacto",
  };
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white font-playfair">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        {/* Desktop */}
        <Image
          src="/images/o2.jpg"
          alt="Background Alejandra Gonzalez"
          fill
          loading="lazy"
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
          className="hidden md:block"
        />
        {/* Mobile */}
        <Image
          src="/images/o2.jpg"
          alt="Background Alejandra Gonzalez"
          fill
          loading="lazy"
          style={{ objectFit: "cover", objectPosition: "89% 10%" }}
          className="block md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Texto principal */}
      <div className="relative z-10 flex flex-col w-full items-center justify-between h-full py-20">
        {/* Información principal arriba */}
        <div className="text-center space-y-2 ">
          <motion.h1
            className="text-5xl text-[#ffd700] md:text-7xl font-bold  drop-shadow-lg tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}
          >
            Alejandra Gonzalez
          </motion.h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            Sydney, Australia
          </p>
        </div>

        {/* Botones centrados pero más abajo */}
        <nav className="relative z-10 mt-1 flex space-x-4 sm:space-x-6 text-sm sm:text-base md:text-lg font-medium tracking-wide">
          <button
            onClick={() => scrollToSection("portafolio")}
            className="button-52"
          >
            Portfolio
          </button>
          <button onClick={() => scrollToSection("bio")} className="button-52">
            Bio
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="button-52"
          >
            Contact
          </button>
        </nav>
      </div>
      <style jsx>{`
  @media (max-width: 768px) {
    .py-20 {
      padding-top: 2rem !important; /* o un valor que te guste, como 2rem */
      padding-bottom: 2rem !important;
    }
  }
`}</style>

    </div>
  );
}
