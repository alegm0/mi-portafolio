// components/Navbar.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("portafolio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const portfolio = document.getElementById("portafolio");
      const bio = document.getElementById("bio");
      const contacto = document.getElementById("contacto");

      if (
        contacto &&
        contacto.getBoundingClientRect().top < window.innerHeight * 0.5
      ) {
        setActiveSection("contacto");
      } else if (
        bio &&
        bio.getBoundingClientRect().top < window.innerHeight * 0.5
      ) {
        setActiveSection("bio");
      } else if (
        portfolio &&
        portfolio.getBoundingClientRect().top < window.innerHeight * 0.5
      ) {
        setActiveSection("portafolio");
      } else {
        setActiveSection("home");
      }

      setShowNavbar(scrollY > window.innerHeight * 0.9);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 5; // Ajusta si tu header es más alto o más bajo
      const top = section.offsetTop - offset;
      setIsMobileMenuOpen(false);

      window.scrollTo({
        top,
        behavior: "smooth",
   
      });

      setIsMobileMenuOpen(false);

      // Forzar actualización del activeSection después del scroll
      setTimeout(() => {
        setActiveSection(id); // Asegura que se marque el botón correcto
      }, 600); // Duración similar al scroll suave
    }
  };

  return (
    <>
      {showNavbar && (
        <div className="font-playfair fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm ">
          <div className="max-w-6xl mx-auto flex items-center justify-between  py-2  px-4 md:px-12 lg:px-0">
            {/* Logo o nombre pequeño */}
            <Link
              href="/"
              className="font-playfair text-black font-bold text-lg"
            >
              Alejandra Gonzalez
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-black font-medium text-sm">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="nav-link"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("portafolio")}
                className={`nav-link ${activeSection === "portafolio" ? "text-yellow-500" : "text-black"} hover:text-yellow-500`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("bio")}
                className={`nav-link ${activeSection === "bio" ? "text-yellow-500" : "text-black"} hover:text-yellow-500`}
              >
                Bio
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className={`nav-link ${activeSection === "contacto" ? "text-yellow-500" : "text-black"} hover:text-yellow-500`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Icon */}

            {/* Icono hamburguesa toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="text-black w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {/* Menú flotante móvil */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl px-6 py-6 space-y-4 z-40 animate-slideDown transition-all duration-300 ease-out">
              <nav className="flex flex-col text-left font-playfair text-black space-y-4 text-base">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="nav-link"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("portafolio")}
                  className={`hover:text-yellow-500 ${activeSection === "portafolio" ? "text-yellow-500 font-semibold" : ""}`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection("bio")}
                  className={`hover:text-yellow-500 ${activeSection === "bio" ? "text-yellow-500 font-semibold" : ""}`}
                >
                  Bio
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className={`hover:text-yellow-500 ${activeSection === "contacto" ? "text-yellow-500 font-semibold" : ""}`}
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      )}
    </>
  );
}
