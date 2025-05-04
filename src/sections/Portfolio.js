import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity/lib/client";
import scrollToLastShoot from "../utils/scrollToLastShoot";

export default function Portfolio({ shoots }) {
  return (
    <div id="portafolio" className="relative w-full">
      <div className="bg-white px-4 py-8 md:p-12 pt-4 pb-0 w-full min-h-[90vh] md:min-h-[120vh] lg:min-h-0">
        <div className="max-w-6xl mx-auto">
          {/* Medidas + flecha responsive */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-0 md:mb-5 mt-10 md:mt-3">
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
            className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4"
          >
            {shoots?.map((shoot) => (
              <Link
                key={shoot.slug.current}
                href={`/miportfolio/${shoot.slug.current}`}
                legacyBehavior
              >
                <a className="block">
                  <div className="relative w-full aspect-[3/1] sm:aspect-square bg-gray-200 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Image
                      src={urlFor(shoot.cover)
                        .width(500)
                        .height(300)
                        .fit("crop")
                        .url()}
                        alt={`Sesión fotográfica "${shoot.title}" destacando estilo y composición visual`}
loading="lazy"
                      width={500}
                      height={300}
                      className="block md:hidden w-full h-full object-cover"
                    />

                    {/* Imagen para desktop: completa */}
                    <Image
                      src={urlFor(shoot.cover).width(500).url()}
                      alt={`Sesión fotográfica "${shoot.title}" destacando estilo y composición visual`}
loading="lazy"
                      width={500}
                      height={500}
                      className="hidden md:block w-full h-full object-cover"
                    />

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
    </div>
  );
}
