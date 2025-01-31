"use client"; // Necesario si usas Next.js App Router

import { Lock, User, Mail, Link } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormInputs } from "@/Interfaces/Register.interfaces";
import { registerUser } from "@/Services/Register.services";
import { useRouter } from "next/navigation"; // Usar "next/router" si usas Pages Router
import Button from "./ui/Button";

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormInputs>();
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: RegisterFormInputs) => {
    setError(null);
    setSuccessMessage(null);

    console.log("Datos enviados:", data); // Verifica los datos antes de enviarlos

    try {
      const response = await registerUser(data);
      console.log("Respuesta de la API:", response);

      setSuccessMessage("¡Registro exitoso! Redirigiendo...");
      setTimeout(() => {
        router.push("/Login"); // Redirigir al login tras el registro
      }, 2000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error inesperado");
      }
    }
  };

  return (
    <div className="bg-[#C4F4D6] min-h-screen flex justify-center items-center p-4">
      <div className="bg-white w-96 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight">KODIGO KRAFT</h1>
          <p className="text-sm font-mono mt-2">Crear Nueva Cuenta_</p>
        </div>

        {/* Mensajes de error o éxito */}
        {error && <p className="text-red-500 font-mono text-sm mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 font-mono text-sm mb-4">{successMessage}</p>}

        {/* Formulario */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <div className="space-y-2">
            <label className="block font-bold text-sm">USUARIO</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                {...register("name", { required: true })} // 🔹 Cambio de "name" a "username"
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
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
                className="w-full pl-10 pr-4 py-3 border-2 border-black font-mono
                          focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Ingrese su contraseña"
              />
            </div>
          </div>
      
          {/* Button (Falta type="submit") */}
          <div className="mt-6">
            <Button text="REGISTRARSE →" bgColor="bg-[#CEFF1A]" type="submit" />
          </div>

          {/* Footer Links */}
          <div className="flex justify-between text-sm font-mono mt-4">
            <Link href={"/Login"} className={"underline hover:no-underline"}> ¿Ya tienes una cuenta? Inicia sesión </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
