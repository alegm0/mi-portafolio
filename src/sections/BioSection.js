// sections/BioSection.js

import Image from "next/image";

export default function BioSection() {
  return (
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

  );
}
