"use client";

import { AlertTriangle } from "lucide-react";
import Button from "./components/ui/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-[#FFD5C4] min-h-screen flex justify-center items-center p-4">
      <div className="bg-white w-96 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
        <AlertTriangle className="h-16 w-16 stroke-black fill-[#FFD5C4] mx-auto mb-6" />

        <h1 className="text-5xl font-black mb-4">404</h1>

        <div className="space-y-4 mb-8">
          <p className="text-2xl font-mono">NO HEMOS ENCONTRADO_</p>
          <p className="text-sm font-mono bg-black text-white p-2">
            Error: Path not resolved
          </p>
        </div>

        <Link href="/">
          <Button text="VOLVER AL INICIO →" bgColor="bg-[#CEFF1A]" />
        </Link>
        <p className="text-xs font-mono mt-6">¿Perdido? Revisa la ruta.</p>
      </div>
    </div>
  );
};

export default NotFound;
