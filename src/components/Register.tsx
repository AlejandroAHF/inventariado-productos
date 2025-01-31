import { Lock, User, Mail } from "lucide-react";
import Button from "./ui/Button";

const Register = () => {
  return (
    <div className="bg-[#C4F4D6] min-h-screen flex justify-center items-center p-4">
      <div className="bg-white w-96 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight">KODIGO KRAFT</h1>
          <p className="text-sm font-mono mt-2">Crear Nueva Cuenta_</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Username Field */}
          <div className="space-y-2">
            <label className="block font-bold text-sm">USUARIO</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border-2 border-black font-mono
                          focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Ingrese su usuario"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block font-bold text-sm">EMAIL</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border-2 border-black font-mono
                          focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Ingrese su email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block font-bold text-sm">CONTRASEÑA</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 border-2 border-black font-mono
                          focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Ingrese su contraseña"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="block font-bold text-sm">CONFIRMAR CONTRASEÑA</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 border-2 border-black font-mono
                          focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Confirme su contraseña"
              />
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Button text="REGISTRARSE →" bgColor="bg-[#CEFF1A]" />
          </div>

          {/* Footer Links */}
          <div className="flex justify-between text-sm font-mono mt-4">
            <a href="#" className="underline hover:no-underline">
              ¿Ya tienes una cuenta? Inicia sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;