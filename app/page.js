"use client";

import { useEffect, useState } from "react";
import NewInputForm from "@/components/NewInputForm";
import TodoItem from "@/components/TodoItem";

export default function Home() {
  // const data = [{ id: 0, content: "Create your first todo!", completed: false }];
  // const [isDark, setIsDark] = useState("dark");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [countLeftItem, setCountLeftItem] = useState(0);

  // useEffect(() => {
  //   if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  //     setIsDark("dark");
  //   } else {
  //     setIsDark("light");
  //   }
  // });

  useEffect(() => {
    const filterTodos = () => {
      if (filterStatus === "active") {
        return setFilteredTodos(todos.filter((todo) => !todo.completed));
      } else if (filterStatus === "completed") {
        return setFilteredTodos(todos.filter((todo) => todo.completed));
      } else if (filterStatus === "all") {
        return setFilteredTodos(todos);
      }
    };

    filterTodos();
  }, [todos, filterStatus]);

  useEffect(() => {
    const todoLeft = todos.filter((todo) => !todo.completed);
    setCountLeftItem(todoLeft.length);
  }, [todos]);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus("all");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-[-88px] mb-[72px]">
      <div className="container px-6 mx-auto relative">
        <NewInputForm todos={todos} setTodos={setTodos} />

        <div className="bg-white py-[14px] px-5 rounded-[5px] w-full overflow-hidden shadow-md">
          <div className="relative">
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-grey94 text-[12px] tracking-[-.17px]">
              {countLeftItem} item<span className={`${countLeftItem > 1 ? "inline" : "hidden"}`}>s</span> left
            </p>
            <div className="flex justify-center items-center absolute bottom-[75px] font-bold text-grey94 text-[14px] tracking-[-.19px] left-0 right-0 mx-auto space-x-[18px]">
              <p className={`${filterStatus === "all" ? "text-darkBlue" : ""} cursor-pointer hover:text-dark49`} onClick={() => setFilterStatus("all")}>
                All
              </p>
              <p className={`${filterStatus === "active" ? "text-darkBlue" : ""} cursor-pointer hover:text-dark49`} onClick={() => setFilterStatus("active")}>
                Active
              </p>
              <p className={`${filterStatus === "completed" ? "text-darkBlue" : ""} cursor-pointer hover:text-dark49`} onClick={() => setFilterStatus("completed")}>
                Completed
              </p>
            </div>
            <p className="text-grey94 text-[12px] tracking-[-.17px] cursor-pointer hover:text-dark49" onClick={clearCompleted}>
              Clear Completed
            </p>
          </div>
        </div>
        <div className="h-[48px] bg-white rounded-[5px] mt-4 shadow-md" />

        <p className="text-grey94 mt-10 text-center text-[14px] tracking-[-.19px]">Drag and drop to reorder list</p>
      </div>
    </main>
  );
}
