'use client'

import { ClipboardList, Package, Star } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image"; // Importar el componente Image de Next.js

const Welcome = () => {
  return (
    <div className="bg-[#FFF7F0] border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-wrap gap-12 items-center justify-center">
          {/* Contenido Principal */}
          <div className="flex-1 min-w-[300px]">
            {/* Título */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                KODIGO KRAFT
                <span className="text-[#CEFF1A]">_</span>
              </h1>
              <p className="font-mono text-lg border-l-4 border-black pl-4">
                Plataforma especializada en gestión de productos y análisis de reseñas
              </p>
            </div>

            {/* Descripción */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <ClipboardList className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">REGISTRO DETALLADO</h3>
                  <p className="font-mono text-sm">
                    Crea entradas completas para cada producto con especificaciones técnicas, 
                    categorías y metadatos relevantes_
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Star className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">SISTEMA DE RESEÑAS</h3>
                  <p className="font-mono text-sm">
                    Calificación por estrellas y comentarios detallados con análisis 
                    de sentimiento integrado_
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Package className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">INVENTARIO INTELIGENTE</h3>
                  <p className="font-mono text-sm">
                    Seguimiento en tiempo real de stock con alertas y reportes 
                    automatizados_
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link href="/register">
              <Button 
                text="Comenzar ahora →" 
                bgColor="bg-[#A7A6FF]" 
              />
            </Link>
          </div>

          {/* Mockup Visual con Imágenes */}
          <div className="flex-1 min-w-[300px] relative">
            <div className="grid grid-cols-2 gap-4 p-2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Imagen 1 con elementos geométricos */}
              <div className="relative border-2 border-black p-1 bg-[#CEFF1A]">
                <div className="absolute top-2 -left-2 w-4 h-4 bg-[#A7A6FF] border-2 border-black"></div>
                <Image
                  src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1738367472/joq3arjvgkx07dcgg16p.jpg"
                  alt="Equipo colaborando"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover border-2 border-black"
                  priority
                />
                <div className="absolute bottom-2 -right-2 w-6 h-6 bg-[#CEFF1A] border-2 border-black"></div>
              </div>

              {/* Imagen 2 con superposición geométrica */}
              <div className="relative border-2 border-black p-1 bg-[#A7A6FF]">
                <Image
                  src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1738367474/tdz8irxm1kag1ri9biwl.jpg"
                  alt="Análisis de datos"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover border-2 border-black"
                  priority
                />
                <div className="absolute top-0 -left-3 w-3 h-full bg-black/20"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#CEFF1A] border-2 border-black grid grid-cols-2 gap-0.5 p-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-black w-full h-full"></div>
                  ))}
                </div>
              </div>

              {/* Barra inferior decorativa */}
              <div className="col-span-2 h-4 bg-black mt-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-repeat-x bg-[length:40px_4px]" 
                     style={{backgroundImage: 'linear-gradient(90deg, #CEFF1A 50%, transparent 50%)'}}>
                </div>
              </div>
            </div>

            {/* Elementos flotantes laterales */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-black bg-white hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-4 border-black bg-[#CEFF1A] hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;