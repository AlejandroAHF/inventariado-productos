interface ButtonProps {
  text: string;
  bgColor?: string;
  type?: "button" | "submit" | "reset"; // 🔹 Agregar la propiedad `type`
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, type = "button" }) => {
  return (
    <button
      type={type} // 🔹 Asegurar que `type` se aplique correctamente
      className={`${bgColor} px-4 py-2 font-bold border-2 border-black shadow-md`}
    >
      {text}
    </button>
  );
};

export default Button;
