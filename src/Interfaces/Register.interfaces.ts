export interface RegisterFormInputs {
    name: string;
    email: string;
    password: string;
}
  
export interface RegisterResponse {
    success: boolean;
    message?: string;
}  