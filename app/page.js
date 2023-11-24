"use client";

import { useEffect, useState } from "react";
import iconCross from "../public/images/icon-cross.svg";
import Image from "next/image";

export default function Home() {
  const [isDark, setIsDark] = useState("dark");
  const [newInput, setNewInput] = useState("");
  const [countId, setCountId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark("dark");
    } else {
      setIsDark("light");
    }
  });
  // let todoList = ["Let's get started!"];
  const handleSubmit = (e) => {
    e.preventDefault();
    setCountId(countId + 1);
    console.log(countId);
    if (newInput) {
      const newTodo = {
        id: countId,
        description: newInput.trim(),
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      setNewInput("");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-[-88px] mb-[72px]">
      <form action="" className="container px-6 mx-auto relative" onSubmit={handleSubmit}>
        <div className="bg-white py-[14px] px-5 rounded-[5px] mb-4 flex items-center justify-start">
          <div className="w-[21px] h-5 rounded-full border-[1px] border-[#E3E4F1] mr-3" />
          <input
            type="text"
            name="newInput"
            id="newInput"
            placeholder="Create a new todo..."
            className=""
            value={newInput}
            onChange={(e) => {
              setNewInput(e.target.value);
            }}
          />
        </div>

        <div className="bg-white py-[14px] px-5 rounded-[5px] w-full overflow-hidden shadow-md">
          <div className="relative">
            {todos.map((todo) => {
              <div key={todo.id} className="flex justify-between items-center group cursor-pointer">
                <div className="cursor-pointer flex items-center">
                  <div
                    className={`${
                      isCompleted ? "opacity-100" : "opacity-20"
                    } w-5 h-5 gradient-bg rounded-full mr-3  flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
                  >
                    <input type="checkbox" name="todo" id={`todo-${todo.id}`} className="cursor-pointer" onChange={() => setIsCompleted(!isCompleted)} />
                  </div>
                  <label htmlFor="todo" className="cursor-pointer text-[12px] tracking-[-.17px] text-dark49 truncate">
                    {todo.description}
                  </label>
                </div>
                <Image src={iconCross} width={12} height={12} className="hidden group-hover:block" />
              </div>;
            })}
            <div className="w-[120%] border-[1px] border-[#E3E4F1] absolute bottom-[-14px] left-[-10%]" />
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-grey94 text-[12px] tracking-[-.17px]">5 items left</p>
            <div className="flex justify-center items-center absolute bottom-[75px] font-bold text-grey94 text-[14px] tracking-[-.19px] left-0 right-0 mx-auto space-x-[18px]">
              <p>All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>
            <p className="text-grey94 text-[12px] tracking-[-.17px]">Clear Completed</p>
          </div>
        </div>
        <div className="h-[48px] bg-white rounded-[5px] mt-4 shadow-md" />

        <p className="text-grey94 mt-10 text-center text-[14px] tracking-[-.19px]">Drag and drop to reorder list</p>
      </form>
    </main>
  );
}
