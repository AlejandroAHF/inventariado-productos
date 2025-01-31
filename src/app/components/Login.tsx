'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormInputs } from "@/Interfaces/login.interfaces";
import { loginUser } from "@/Services/Login.services";
import { Lock, Mail } from "lucide-react";
import Button from "./ui/Button";
import Link from 'next/link'

const LoginForm = () =>  {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormInputs) => {
    setError(null);
    try {
      console.log(await loginUser(data));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="bg-purple-400 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white w-96 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight">KODIGO KRAFT</h1>
          <p className="text-sm font-mono mt-2">Sistema de Gestión_</p>
        </div>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

          {/* Button */}
          <div className="mt-6">
            <Button text="INGRESAR →" bgColor="bg-[#CEFF1A]" type="submit"/>
          </div>

          {/* Footer Links */}
          <div className="flex justify-between text-sm font-mono mt-4">
            <Link href={"/Register"} className={"underline hover:no-underline"}>Registrarse</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;