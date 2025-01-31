'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormInputs } from "@/Interfaces/login.interfaces";
import { loginUser } from "@/Services/Login.services";

export default function LoginForm() {
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
    <div className="bg-white p-8 shadow-md rounded-lg w-96">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
