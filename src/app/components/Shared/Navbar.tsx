import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#FFF7F0]">
      <Link href={"/register"} className={"underline hover:no-underline"}>
        Registrarse
      </Link>
      <Link href={"/login"} className={"underline hover:no-underline"}>
        Registrarse
      </Link>
    </nav>
  );
};

export default Navbar;
