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
          src="/images/Fondo.jpg"
          alt="Alejandra Gonzalez"
          fill
          style={{ objectFit: "cover" }}
          className="hidden md:block"
        />
        {/* Mobile */}
        <Image
          src="/images/home.jpg"
          alt="Alejandra Gonzalez"
          fill
          style={{ objectFit: "cover" }}
          className="block md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Texto principal */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="pb-3 text-6xl md:text-8xl font-extrabold text-[#ffd700] drop-shadow-lg tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}
        >
          Alejandra Gonzalez
        </motion.h1>
        <p className="text-lg md:text-xl text-white opacity-95 tracking-wide font-light -mt-1">
          Brisbane, Australia
        </p>
      </div>

      {/* Botones de navegación */}
      <nav className="relative z-10 mt-6 flex space-x-4 sm:space-x-6 text-sm sm:text-base md:text-lg font-medium tracking-wide">
        <button onClick={() => scrollToSection("portafolio")} className="button-52">Portfolio</button>
        <button onClick={() => scrollToSection("bio")} className="button-52">Bio</button>
        <button onClick={() => scrollToSection("contacto")} className="button-52">Contact</button>
      </nav>
    </div>
  );
}
