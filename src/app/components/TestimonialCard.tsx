'use client'

import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="m-24 px-4">
      {/* Título de la sección */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8">
        LO QUE DICEN NUESTROS USUARIOS
      </h2>

      {/* Contenedor de testimonios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonio 1 */}
        <div className="relative bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 border-4 border-black mb-4">
            <Image
              src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1738367472/joq3arjvgkx07dcgg16p.jpg"
              alt="Ana López"
              width={80}
              height={80}
              className="object-cover"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#CEFF1A] border-2 border-black"></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-lg sm:text-xl">Ana López</h3>
            <p className="font-mono text-xs sm:text-sm text-gray-600 border-l-2 border-black pl-2">
              Gerente de Producto
            </p>
          </div>
          <div className="bg-[#FFF7F0] border-2 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm">
            <p>
              Kodigo Kraft ha revolucionado nuestra forma de gestionar inventarios. ¡Increíblemente eficiente!
            </p>
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-4 border-black bg-[#A7A6FF] hidden lg:block"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-black bg-[#CEFF1A] hidden lg:block"></div>
        </div>

        {/* Testimonio 2 */}
        <div className="relative bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 border-4 border-black mb-4">
            <Image
              src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1738367474/tdz8irxm1kag1ri9biwl.jpg"
              alt="Carlos Ruiz"
              width={80}
              height={80}
              className="object-cover"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#CEFF1A] border-2 border-black"></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-lg sm:text-xl">Carlos Ruiz</h3>
            <p className="font-mono text-xs sm:text-sm text-gray-600 border-l-2 border-black pl-2">
              Analista de Datos
            </p>
          </div>
          <div className="bg-[#FFF7F0] border-2 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm">
            <p>
              El sistema de reseñas es una maravilla. Los análisis de sentimiento son precisos y útiles.
            </p>
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-4 border-black bg-[#A7A6FF] hidden lg:block"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-black bg-[#CEFF1A] hidden lg:block"></div>
        </div>

        {/* Testimonio 3 */}
        <div className="relative bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 border-4 border-black mb-4">
            <Image
              src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1738367472/joq3arjvgkx07dcgg16p.jpg"
              alt="María Gómez"
              width={80}
              height={80}
              className="object-cover"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#CEFF1A] border-2 border-black"></div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-lg sm:text-xl">María Gómez</h3>
            <p className="font-mono text-xs sm:text-sm text-gray-600 border-l-2 border-black pl-2">
              Desarrolladora
            </p>
          </div>
          <div className="bg-[#FFF7F0] border-2 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm">
            <p>
              La plataforma es intuitiva y fácil de usar. ¡Recomendada al 100%!
            </p>
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-4 border-black bg-[#A7A6FF] hidden lg:block"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-black bg-[#CEFF1A] hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;