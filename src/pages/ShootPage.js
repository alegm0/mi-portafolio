
import { sanityClient } from "@/sanity/client";
import { useRef } from "react";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const query = `*[_type == "shoot"]{ "slug": slug.current }`;
  const shoots = await sanityClient.fetch(query);

  const paths = shoots.map((shoot) => ({
    params: { slug: shoot.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "shoot" && slug.current == $slug][0]{
    title,
    "images": images[].asset->url
  }`;
  const shoot = await sanityClient.fetch(query, { slug: params.slug });

  return {
    props: { shoot },
  };
}

export default function ShootPage({ shoot }) {
  const portfolioRef = useRef(null);

  return (
    <div className="relative w-full">
      {/* Sección fija superior */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white font-montserrat bg-black">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/FondoHorizontal1.jpg"
            alt="Alejandra Gonzalez"
            layout="fill"
            objectFit="cover"
            className="hidden md:block"
          />
          <Image
            src="/images/portada.jpg"
            alt="Alejandra Gonzalez"
            layout="fill"
            objectFit="cover"
            className="block md:hidden"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#ffd700] drop-shadow-md">
          Alejandra Gonzalez
        </h1>

        <nav className="relative z-10 mt-4 flex space-x-6 text-lg font-medium">
          <a href="/" className="nav-link">
            Inicio
          </a>
          <a href="/about" className="nav-link">
            Bio
          </a>
          <a href="/contact" className="nav-link">
            Contacto
          </a>
        </nav>
      </div>

      {/* Galería de imágenes */}
      <div ref={portfolioRef} className="w-full min-h-screen bg-white p-6 text-center">
        <h1 className="text-4xl font-bold text-black">{shoot.title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {shoot.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Shoot ${index + 1}`}
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          ))}

        </div>


        <div className="text-base font-medium border border-white text-white px-6 py-2 mt-10 rounded-full backdrop-blur-md bg-black/40 hover:bg-yellow-400 hover:text-black transition duration-300"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm md:text-base font-medium text-black border border-black px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Volver arriba
          </button>
        </div>
      </div>
    </div>
  );
}


export default function Gallery({ shoot }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : shoot.images.length - 1));
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev < shoot.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative min-h-screen p-6 bg-white">
      {/* Botón para regresar a las carpetas */}
      <button
        className="absolute top-4 left-4 text-gray-800 hover:text-black text-xl"
        onClick={() => router.push("/")}
      >
        ← Volver
      </button>

      {/* Nombre de la carpeta */}
      <h1 className="text-left text-3xl font-bold text-black mb-6">{shoot.title}</h1>

      {/* Galería en formato mosaico */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {shoot.images.map((image, index) => (
          <div key={index} className="relative cursor-pointer">
            <Image
              src={image}
              alt={`Imagen ${index + 1}`}
              width={300}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-full"
              onClick={() => openImage(index)}
            />
          </div>


        ))}

      </div>




      {/* Vista de imagen ampliada */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Botón de cerrar */}
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={closeImage}
          >
            ✕
          </button>

          {/* Botón de navegación izquierda */}
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={prevImage}
          >
            ←
          </button>

          {/* Imagen grande */}
          <Image
            src={shoot.images[selectedImage]}
            alt="Imagen ampliada"
            width={800}
            height={600}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
          />

          {/* Botón de navegación derecha */}
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={nextImage}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

// Obtener imágenes de la carpeta desde Sanity
export async function getStaticProps({ params }) {
  const query = `*[_type == "shoot" && slug.current == $slug][0]{
    title, 
    "images": images[].asset->url
  }`;
  const shoot = await sanityClient.fetch(query, { slug: params.slug });

  return {
    props: { shoot },
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "shoot"]{ "slug": slug.current }`;
  const shoots = await sanityClient.fetch(query);
  const paths = shoots.map((shoot) => ({ params: { slug: shoot.slug } }));

  return {
    paths,
    fallback: false,
  };
}
