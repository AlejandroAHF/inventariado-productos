import { LoginFormInputs, AuthResponse } from "@/Interfaces/login.interfaces";

export async function loginUser(data: LoginFormInputs): Promise<AuthResponse> {
  const response = await fetch("https://api-gestion-productos.onrender.com/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result: AuthResponse = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Error en la autenticación");
  }

  // Guardar el token en localStorage
  localStorage.setItem("token", result.token);

  return result;
}
