import Image from "next/image";
import moonIcon from "../public/images/icon-moon.svg";
import logo from "../public/images/logo-todo.svg";

const NavBar = () => {
  return (
    <header className="header-bg-light h-[200px] md:h-[300px]">
      <nav className="flex justify-between items-center container px-6 mx-auto pt-[48px] pb-10 md:max-w-[540px] md:mx-auto md:pt-[70px]">
        <Image src={logo} width={109} height={20} alt="logo" className="w-[109px] h-5 md:w-[167px] md:h-10" />
        <Image src={moonIcon} width={20} height={20} alt="moon icon" className="w-5 h-5 md:w-[26px] md:h-[26px]" />
      </nav>
    </header>
  );
};

export default NavBar;
