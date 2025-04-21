import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center text-black font-montserrat p-6 overflow-y-auto">
      {/* Nombre y Título */}
      <div className="text-center">
        <h1 className="text-5xl md:text-4xl font-semibold">
          Alejandra Gonzalez
        </h1>
        <p className="text-2xl md:text-3xl mt-0">Model</p>
      </div>

      {/* Menú de Navegación */}
      <nav className="flex space-x-6 text-lg font-medium mt-0">
        <a href="/portfolio" className="nav-link">
          Portafolio
        </a>
        <a href="/about" className="nav-link">
          Bio
        </a>
        <a href="/contact" className="nav-link">
          Contacto
        </a>
      </nav>

      {/* Contenido principal con altura igualada */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mt-6 gap-6 md:h-[80vh] items-stretch">
        {/* Sección de la descripción */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Bio</h2>

          <p className="text-lg leading-relaxed text-justify px-4 md:px-0">
            I am <span className="font-semibold">Colombian</span>, 22 years old,
            and modeling is my way of{" "}
            <span className="italic">expressing myself</span>. It’s not just
            about posing; it’s about{" "}
            <span className="font-semibold">telling stories</span> through gaze,
            movement, and light. I’m inspired by{" "}
            <span className="italic">fashion, authenticity,</span> and the
            freedom to create images that convey{" "}
            <span className="font-semibold">strength and emotion</span>. Every
            session is an opportunity to{" "}
            <span className="italic">explore new sides of myself</span> and turn
            the ordinary into <span className="font-semibold">art</span>.
            <span className="block mt-4 text-center font-semibold">
              Welcome to my portfolio.
            </span>
          </p>

          {/* Medidas */}
          <div className="text-center">
            <p className="text-lg mt-4 font-semibold">Medidas:</p>
            <p className="text-lg">Altura: 1.66m</p>
            <p className="text-lg">Busto: 79cm / 31''</p>
            <p className="text-lg">Cintura: 65cm / 25''</p>
            <p className="text-lg">Cadera: 90cm / 35''</p>
            <p className="text-lg">Hair: black & long</p>
            <p className="text-lg">Eyes: black</p>
            <p className="text-lg">Sex: female</p>
          </div>

          {/* Redes Sociales */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.instagram.com/im_ale24/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.tiktok.com/@ale.gm21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/tiktok.svg" alt="Tiktok" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandra-gonzalez-mu%C3%B1oz-7a9285308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center h-full">
          <Image
            src="/images/favoriteAlejandra.jpg" // Cambia esto por la imagen real
            alt="Alejandra Gonzalez"
            width={700}
            height={400}
            className="rounded-lg object-cover h-full w-[90%] md:w-[80%]"
          />
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 5px 10px;
          text-decoration: underline;
          transition: color 0.3s ease-in-out;
        }
        .nav-link:hover {
          color: #ffdf00;
        }
      `}</style>
    </div>
  );
}
