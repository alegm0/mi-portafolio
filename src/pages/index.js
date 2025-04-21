import { sanityClient } from "../sanity/client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../pages/Navbar";
import { urlFor } from "../sanity/lib/client";
import { ChevronDown } from "lucide-react";

export default function Home({ shoots }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Verifica en el primer render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  console.log("Shoots desde Sanity:", shoots);

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll a una sección específica
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToLastShoot = () => {
    const lastShoot = document.querySelector(
      "#portafolio-gallery > a:last-child"
    );
    if (lastShoot) {
      const offset = 15; // 👈 Ajusta este número si quieres más o menos espacio
      const shootBottom =
        lastShoot.getBoundingClientRect().bottom + window.scrollY;
      const scrollPosition = shootBottom - window.innerHeight + offset;

      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Navbar Sticky */}
      <Navbar />
      {/* Sección de inicio fija con fondo */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-white font-playfair">
        <div className="absolute inset-0">
          <Image
            src="/images/FondoHorizontal1.jpg"
            alt="Alejandra Gonzalez"
            fill
            style={{ objectFit: "cover" }}
            className="hidden md:block"
          />

          {/* Imagen fondo mobile */}

          <div className="relative w-full h-full overflow-hidden md:hidden">
            <Image
              src="/images/homeBW.jpg"
              alt="Alejandra Gonzalez"
              fill
              style={{
                objectFit: "scale-down",
                transform: "scale(2.6) translateX(18.5%) translateY(-2%)", // 👈 Mueve la imagen hacia la izquierda
              }}
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0"></div>
        </div>

        {/* Contenedor de información */}
        <div className="relative z-10 text-center font-playfair ">
          <motion.h1
            className=" pb-3 text-6xl md:text-8xl font-extrabold text-[#ffd700] drop-shadow-lg tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}
          >
            Alejandra Gonzalez
          </motion.h1>

          <p className="text-lg md:text-xl text-white opacity-95 tracking-wide font-light mt-[-4px]">
            Brisbane, Australia
          </p>
        </div>

        {/* Menú de navegación */}

        {/* Menú de navegación */}
        {/* Menú de navegación */}
        <nav className="relative z-10 mt-0 flex space-x-4 sm:space-x-6 text-sm sm:text-base md:text-lg font-medium tracking-wide md:mt-6  lg:mt-6">
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
        .button-52 {
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.5px;
          padding: 4px 15px;
          outline: 0;
          border: 1px solid white;
          color: white;
          cursor: pointer;
          position: relative;
          background-color: transparent;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          z-index: 1;
          transition: color 0.2s ease;
        }


 .button-52:hover {
    background-color: #FFD700;
    color: black;
    border-color: #FFD700;
  }

        @media (max-width: 640px) {
          .button-52 {
            flex-direction: row;
            justify-content: center;
            text-align: center;
            background: none;
            border: none;
            color: white;
            font-size: 16px;
            font-weight: 500;
            text-decoration: underline;
            text-underline-offset: 4px;
            padding: 6px 12px;
            transition: all 0.2s ease-in-out;
          }

          .button-52:active {
            opacity: 0.7;
          }
        }
      `}</style>

      {/* Sección del Portafolio */}

      <div
        id="portafolio"
        className="bg-white px-4 py-8 md:p-12 pt-4 pb-0 w-full min-h-[90vh] md:min-h-[120vh] lg:min-h-0"
      >
        <div className="max-w-6xl mx-auto ">
          {/* Medidas + flecha responsive */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-0 md:mb-5 mt-10 md:mt-3 ">
            <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center md:text-left">
              Height: 1.66m | Bust: 85cm | Waist: 62cm | Hips: 90cm
            </p>

            <button
              onClick={scrollToLastShoot}
              className="text-gray-500 hover:text-black text-2xl animate-bounce mt-0 md:mt-0 md:ml-4 self-center md:self-auto"
            >
              ↓
            </button>
          </div>

          {/* Galería de shoots */}

          <div
            id="portafolio-gallery"
            className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 "
          >
            {shoots?.map((shoot) => (
              <Link
                key={shoot.slug.current}
                href={`/miportfolio/${shoot.slug.current}`}
                legacyBehavior
              >
                <a className="block">
                  <div className="relative w-full aspect-[3/1] sm:aspect-square bg-gray-200 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    {/* Imagen responsive con hotspot (mobile) o completa (desktop) */}
                    <Image
                      src={
                        isMobile
                          ? urlFor(shoot.cover)
                            .width(500)
                            .height(300)
                            .fit("crop")
                            .url()
                          : urlFor(shoot.cover).width(500).url()
                      }
                      alt={shoot.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay con título */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center">
                      <p className="text-white text-lg font-semibold text-center">
                        {shoot.title}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Sección Bio */}
      <div
        id="bio"
        className="bg-white w-full min-h-screen flex items-center justify-center p-12"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna de texto */}
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold text-black mb-4 text-center md:text-left">
              Bio
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am Colombian, 22 years old, and modeling is my way of expressing
              myself. It’s not just about posing; it’s about telling stories
              through gaze, movement, and light. I’m inspired by fashion,
              authenticity, and the freedom to create images that convey
              strength and emotion. Every session is an opportunity to explore
              new sides of myself and turn the ordinary into art.
            </p>

            <p className="text-lg font-semibold text-center md:text-left mt-6">
              Welcome to my portfolio.
            </p>

            {/* Redes sociales */}
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a
                href="https://www.instagram.com/im_ale24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-7 h-7 transition-transform transform hover:scale-110"
                />
              </a>
              <a
                href="https://www.tiktok.com/@ale.gm21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/tiktok.svg"
                  alt="TikTok"
                  className="w-7 h-7 transition-transform transform hover:scale-110"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alejandra-gonzalez-mu%C3%B1oz-7a9285308/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-7 h-7 transition-transform transform hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Imagen en la derecha */}
          <div className="relative w-full h-auto">
            <Image
              src="/images/bio-photo.jpg" // Asegúrate de cambiar esta ruta a tu imagen real
              alt="Alejandra Gonzalez"
              width={600} // Ajusta el tamaño según lo necesites
              height={600}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Sección Contacto */}

      {/* Sección de Contacto */}
      <div
        id="contacto"
        className="bg-white w-full min-h-screen flex flex-col items-center justify-center p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Whether you're a brand, photographer, or creative, feel free to reach
          out. I'm open to collaborations, bookings, and new projects. Let’s
          create something beautiful.
        </p>

        {/* Formulario */}
        {/* Formulario con confirmación sin redirección */}

        <form
          onSubmit={async (e) => {
            e.preventDefault(); // Evita la recarga de la página
            const formData = new FormData(e.target);

            const response = await fetch("https://formspree.io/f/xgvawzzl", {
              method: "POST",
              body: formData,
              headers: { Accept: "application/json" },
            });

            if (response.ok) {
              setSuccessMessage(
                "Message sent! I can’t wait to connect with you ♡"
              ); // Muestra mensaje
              e.target.reset(); // Vaciar los campos
            } else {
              setSuccessMessage(
                "Oops! Something went wrong, please try again."
              );
            }
          }}
          className="w-full max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
          />
          <button className="bg-[#ffd700] text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
            Send Message
          </button>

          {/* Mensaje de confirmación */}
          {successMessage && (
            <p className="mt-4 text-center text-yellow-600">{successMessage}</p>
          )}
        </form>

        {/* Redes sociales */}
        <div className="flex space-x-6 mt-6">
          <a
            href="https://www.instagram.com/im_ale24/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="w-7 h-7 transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://www.tiktok.com/@ale.gm21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/tiktok.svg"
              alt="TikTok"
              className="w-7 h-7 transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandra-gonzalez-mu%C3%B1oz-7a9285308/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-7 h-7 transition-transform transform hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

// Obtener los shoots desde Sanity
export async function getStaticProps() {
  const query = `*[_type == "shoot"]{
    title,
    slug,
    cover
  }`;

  const shoots = await sanityClient.fetch(query);
  console.log("Datos de Sanity:", shoots);

  return {
    props: { shoots },
    revalidate: 60,
  };
}
