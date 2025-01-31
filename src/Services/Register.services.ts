import { RegisterFormInputs, RegisterResponse } from "@/Interfaces/Register.interfaces";

export async function registerUser(data: RegisterFormInputs): Promise<RegisterResponse> {
  const response = await fetch("https://api-gestion-productos.onrender.com/api/v1/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result: RegisterResponse = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Error en el registro");
  }

  return result; // No se almacena token, solo devuelve éxito o error
}
