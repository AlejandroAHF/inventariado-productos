'use client'

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#FFF59F] border-b-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tight hover:scale-105 transition-transform">
              KODIGO KRAFT
            </span>
          </Link>

          {/* Menú de navegación */}
          <div className="flex items-center gap-8">
            <Link 
              href="/register" 
              className="font-mono text-sm hover:underline hover:scale-105 transition-transform"
            >
              Registro
            </Link>
            
            <Link 
              href="/login"
              className="font-mono text-sm hover:underline hover:scale-105 transition-transform"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;