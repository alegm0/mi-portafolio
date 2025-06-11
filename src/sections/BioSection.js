import Image from "next/image";

export default function BioSection() {
  return (
    <div
      id="bio"
      className="bg-white w-full min-h-screen flex items-center justify-center p-12 "
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
        {/* Columna de texto */}
        <div className="flex flex-col justify-center text-left md:text-left">
          <h2 className="text-3xl font-bold text-black mb-6 text-center md:text-left ">
            Bio
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am Colombian, 22 years old, and modeling is my way of expressing
            myself. It’s not just about posing; it’s about telling stories
            through gaze, movement, and light. I’m inspired by fashion,
            authenticity, and the freedom to create images that convey strength
            and emotion. Every session is an opportunity to explore new sides of
            myself and turn the ordinary into art.
          </p>

          <p className="text-lg font-semibold text-center md:text-left mt-6 text-black">
            Welcome to my portfolio.
          </p>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4 responsive-margin-adjust">
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
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[80vh] flex justify-center items-center">
          <Image
            loading="lazy"
            src="/images/bio-photo.jpg"
            alt="Background Alejandra Gonzalez"
            fill
            className="object-cover 30% rounded-lg shadow-lg"
             style={{ objectPosition: "center 20%" }}
          />
        </div>
      

      </div>

      {/* Media Query solo para responsive */}
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

        @media (max-width: 768px) {
          /* Ajustes para el contenedor principal */

          .bg-white {
            padding: 1rem !important;
            padding-top: 0rem !important;
          }

          /* Ajustes para el título "Bio" */
          h2.text-2xl {
            font-size: 1.25rem !important;
            margin-bottom: 0.5rem !important;
          }

          /* Ajustes para los párrafos */
          p.text-lg,
          p.text-sm {
            font-size: 0.9rem !important;
            margin-top: 0.25rem !important;
          }

          
          .responsive-margin-adjust {
            margin-top: 1rem !important; /* o mt-1 en Tailwind */
          margin-bottom: 1rem !important; 
            }

          #bio .relative {
            height: 40vh !important; /* Ajusta la altura de la imagen en responsive */
          }

      
          /* Elimina padding solo en responsive para "Welcome to my portfolio" y redes */
         
        }
      `}</style>
    </div>
  );
}
