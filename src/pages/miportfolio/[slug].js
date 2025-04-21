import { sanityClient } from "../../sanity/client";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ShootPage({ shoot }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!shoot) {
    return <p className="text-center text-xl">Cargando...</p>;
  }

  // Manejo del teclado para cambiar imagen con flechas y cerrar con ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        if (event.key === "ArrowRight") nextImage();
        if (event.key === "ArrowLeft") prevImage();
        if (event.key === "Escape") closeImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Función para abrir la imagen en pantalla completa
  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(shoot.images[index]);
  };

  // Función para cerrar la imagen
  const closeImage = () => setSelectedImage(null);

  // Función para navegar a la siguiente imagen
  const nextImage = () => {
    if (currentIndex < shoot.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(shoot.images[currentIndex + 1]);
    }
  };

  // Función para navegar a la imagen anterior
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(shoot.images[currentIndex - 1]);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Botón para volver atrás */}


      <Link href="/#portafolio" legacyBehavior>
        <a className="text-black hover:text-[#ffd700] text-lg font-semibold">
          ← Back to Portfolio
        </a>
      </Link>


      {/* Nombre del shoot */}
      <h1 className="text-3xl font-bold mt-4 mb-7">{shoot.title}</h1>

      {/* Galería estilo Masonry */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 ">
        {shoot.images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openImage(index)}
          >
            <Image
              src={image}
              alt={`Imagen ${index + 1}`}
              width={400}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}


        
      </div>
      <div className="w-full flex justify-center mt-12">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="group relative font-playfair flex items-center gap-2 text-black text-base md:text-lg cursor-pointer"
  >
    {/* Texto animado */}
    <span className="overflow-hidden h-6 md:h-7 relative inline-block">
      <span className="block text-black group-hover:text-[#FFD700] transition-all duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] transform group-hover:-translate-y-6">
        Volver arriba
      </span>
      <span className="block absolute left-0 top-6 text-[#FFD700] transition-all duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] transform group-hover:-translate-y-6">
        Volver arriba
      </span>
    </span>

    {/* Flecha animada */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 transform -rotate-90 transition-colors duration-300 group-hover:text-[#FFD700] text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>

    {/* Línea inferior animada */}
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFD700] scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300" />
  </button>
</div>


      {/* Modal de imagen en pantalla completa */}
      {selectedImage && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          {/* Botón de cerrar */}
          <button
            className="absolute top-5 right-5 text-black hover:text-gray-500 transition-transform transform hover:scale-110"
            onClick={closeImage}
          >
            <X size={28} />
          </button>

          {/* Botón de imagen anterior */}
          {currentIndex > 0 && (
            <button
              className="absolute left-5 text-black hover:text-gray-500 transition-transform transform hover:scale-110"
              onClick={prevImage}
            >
              <ChevronLeft size={40} />
            </button>
          )}

          {/* Imagen en pantalla completa */}
          <Image
            src={selectedImage}
            alt="Imagen Ampliada"
            width={900}
            height={1200}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Botón de imagen siguiente */}
          {currentIndex < shoot.images.length - 1 && (
            <button
              className="absolute right-5 text-black hover:text-gray-500 transition-transform transform hover:scale-110"
              onClick={nextImage}
            >
              <ChevronRight size={40} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// Obtener datos de Sanity
export async function getServerSideProps({ params }) {
  const query = `*[_type == "shoot" && slug.current == $slug][0]{
    title,
    "images": images[].asset->url
  }`;

  const shoot = await sanityClient.fetch(query, { slug: params.slug });
  return {
    props: { shoot },
  };
}
