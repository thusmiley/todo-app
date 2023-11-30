"use client";

import { useEffect, useState } from "react";
import InputForm from "@/components/InputForm";
import TodoItem from "@/components/TodoItem";
import { Reorder } from "framer-motion";

export default function Home() {
  // const [isDark, setIsDark] = useState("dark");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [countLeftItem, setCountLeftItem] = useState(0);
  // const [emptyActiveTodos, setEmptyActiveTodos] = useState(true);
  // const [emptyCompletedTodos, setEmptyCompletedTodos] = useState(true);

  // useEffect(() => {
  //   if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  //     setIsDark("dark");
  //   } else {
  //     setIsDark("light");
  //   }
  // });

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.completed));
        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.completed));
        default:
          return setFilteredTodos(todos);
      }
    };

    handleFilter();
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
    <main className="flex min-h-screen flex-col items-center justify-between mt-[-88px] mb-[72px] md:max-w-[540px] md:mx-auto md:mb-[52px] md:mt-[-150px]">
      <div className="container px-6 mx-auto relative">
        <InputForm todos={todos} setTodos={setTodos} setFilterStatus={setFilterStatus} />

        {/* the list */}
        <div className="bg-white py-1 px-5 rounded-[5px] w-full overflow-hidden shadow-md md:px-6 md:py-[10px]">
          {filteredTodos.length > 0 ? (
            <Reorder.Group axis="y" onReorder={setFilteredTodos} values={filteredTodos}>
              <div className="relative divide-y-[1px] divide-[#E3E4F1]">
                {filteredTodos.map((todo) => (
                  <Reorder.Item key={todo.id} value={todo}>
                    <TodoItem todo={todo} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} />
                  </Reorder.Item>
                ))}
              </div>
            </Reorder.Group>
          ) : (
            <p className="text-[12px] tracking-[-.17px] text-dark49 text-center py-[10px] md:text-[18px] md:tracking-[-.25px] md:py-5">You have no items in this list.</p>
          )}

          {/* list controls */}
          <div className="py-4 flex justify-between items-center border-t-[1px] border-[#E3E4F1] md:py-5">
            <p className="text-grey94 text-[12px] tracking-[-.17px] md:text-[14px] md:tracking-[-.19px] md:w-[20%]">
              {countLeftItem} item<span className={`${countLeftItem > 1 ? "inline" : "hidden"}`}>s</span> left
            </p>
            <div className="flex justify-center items-center absolute bottom-[75px] font-bold text-grey94 text-[14px] tracking-[-.19px] left-0 right-0 mx-auto space-x-[18px] md:relative md:bottom-0 md:w-[50%] md:text-center">
              <p className={`${filterStatus === "all" ? "text-darkBlue" : ""} cursor-pointer hover:text-dark49`} onClick={() => setFilterStatus("all")}>
                All
              </p>
              <p
                className={`${filterStatus === "active" ? "text-darkBlue" : ""} cursor-pointer hover:text-dark49`}
                onClick={() => {
                  setFilterStatus("active");
                }}
              >
                Active
              </p>
              <p className={`${filterStatus === "completed" ? "text-darkBlue" : ""} cursor-pointer hover:text-dark49`} onClick={() => setFilterStatus("completed")}>
                Completed
              </p>
            </div>
            <p
              className="text-grey94 text-[12px] tracking-[-.17px] cursor-pointer hover:text-dark49 md:text-[14px] md:tracking-[-.19px] md:w-[30%] md:text-right"
              onClick={clearCompleted}
            >
              Clear Completed
            </p>
          </div>
        </div>
        <div className="h-[48px] bg-white rounded-[5px] mt-4 shadow-md md:hidden" />

        <p className="text-grey94 mt-10 text-center text-[14px] tracking-[-.19px] md:mt-[50px]">Drag and drop to reorder list</p>
      </div>
    </main>
  );
}
