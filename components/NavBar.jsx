"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import moonIcon from "../public/images/icon-moon.svg";
import sunIcon from "../public/images/icon-sun.svg";
import logo from "../public/images/logo-todo.svg";
import { useToggle } from "../hooks/useToggle.js";

const NavBar = (props) => {
  const [isDarkTheme, toggleTheme] = useToggle(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme-color") === "dark";
    }
  });

  useEffect(() => {
    document.documentElement.className = isDarkTheme ? "dark" : "";
    localStorage.setItem("theme-color", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <header className={`${isDarkTheme ? "header-bg-dark" : "header-bg-light"} h-[200px] md:h-[300px]`}>
      <nav className="flex justify-between items-center container px-6 mx-auto pt-[48px] pb-10 md:max-w-[540px] md:mx-auto md:pt-[70px]">
        <Image src={logo} width={109} height={20} alt="todo logo" className="w-[109px] h-5 md:w-[167px] md:h-10" />
        <Image
          src={isDarkTheme ? sunIcon : moonIcon}
          width={20}
          height={20}
          alt="dark mode toggle"
          className="w-5 h-5 md:w-[26px] md:h-[26px] cursor-pointer"
          onClick={toggleTheme}
        />
      </nav>
    </header>
  );
};

export default NavBar;
