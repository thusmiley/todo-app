"use client";

import { useEffect, useState } from "react";
import iconCross from "../public/images/icon-cross.svg";
import Image from "next/image";

export default function Home() {
  const [isDark, setIsDark] = useState("dark");
  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark("dark");
    } else {
      setIsDark("light");
    }
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-[-88px] mb-[72px]">
      <form action="" className="container px-6 mx-auto relative">
        <div className="bg-white py-[14px] px-5 rounded-[5px] mb-4">
          <div className="w-5 h-5 rounded-full border-[1px] border-gradient-bg bg-gradient-bg" />
          <input type="text" name="" id="" placeholder="Create a new todo..." />
        </div>

        <div className="bg-white py-[14px] px-5 rounded-[5px] w-full overflow-hidden shadow-md">
          <div className="relative">
            <div className="flex justify-between items-center">
              <div>
                <input type="radio" name="" id="" />
                <label htmlFor="">Jog around the park 3x</label>
              </div>
              <Image src={iconCross} width={12} height={12} className="" />
            </div>

            <div className="w-[120%] border-[1px] border-[#E3E4F1] absolute bottom-[-14px] left-[-10%]" />
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p>5 items left</p>
            <div className="flex justify-between items-center absolute bottom-[70px]">
              <p>All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>
            <p>Clear Completed</p>
          </div>
        </div>
        <div className="h-[48px] bg-white rounded-[5px] mt-4 shadow-md" />

        <p className="text-grey94 mt-10 text-center">Drag and drop to reorder list</p>
      </form>
    </main>
  );
}
