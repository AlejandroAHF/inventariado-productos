const Button = ({ text = "Login", bgColor = "bg-[#CEFF1A]" }) => {
  return (
    <div 
      className={`${bgColor} border-black p-1 text-black shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-lg text-center hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Button;