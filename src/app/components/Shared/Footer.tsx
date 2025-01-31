"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#FF9F9F] border-t-4 border-black">
      <div className="max-w-6xl mx-auto p-8">
        {/* Contenedor principal con sombra y borde */}
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Contenido en columnas */}
          <div className="flex flex-wrap gap-8 justify-between">
            {/* Sección Branding */}
            <div className="flex-1 min-w-[250px]">
              <h2 className="text-3xl font-black mb-4">KODIGO KRAFT</h2>
              <p className="font-mono text-sm text-gray-600">
                Construyendo el futuro del desarrollo web
              </p>
            </div>

            {/* Sección Enlaces */}
            <div className="flex-1 min-w-[250px]">
              <h3 className="font-bold text-lg mb-4">NAVEGACIÓN</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li>
                  <Link href="/docs" className="hover:underline">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog Técnico
                  </Link>
                </li>
                <li>
                  <Link href="/ejemplos" className="hover:underline">
                    Ejemplos de Código
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sección Legal */}
            <div className="flex-1 min-w-[250px]">
              <h3 className="font-bold text-lg mb-4">LEGAL</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li>
                  <Link href="/privacidad" className="hover:underline">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="hover:underline">
                    Términos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/soporte" className="hover:underline">
                    Soporte Técnico
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-black my-8"></div>

          {/* Copyright */}
          <div className="text-center font-mono text-sm">
            <p>© {new Date().getFullYear()} KODIGO KRAFT</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
