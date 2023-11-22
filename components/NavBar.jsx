import Image from "next/image";
import moonIcon from "../public/images/icon-moon.svg";
import logo from "../public/images/logo-todo.svg";

const NavBar = () => {
  return (
    <div className="header-bg-light h-[200px]">
        <nav className="flex justify-between items-center container px-6 mx-auto pt-[48px] pb-10">
          <Image src={logo} width={109} height={20} alt="logo" />
          <Image src={moonIcon} width={20} height={20} alt="moon icon" />
        </nav>
    </div>
  );
};

export default NavBar;
