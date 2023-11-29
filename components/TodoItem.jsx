"use client";

import { useEffect, useState } from "react";
import iconCross from "../public/images/icon-cross.svg";
import Image from "next/image";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [activeTodo, setActiveTodo] = useState(todo);
  //   const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompleted = () => {
    setActiveTodo({ ...activeTodo, completed: !activeTodo.completed });

    const updatedTodos = todos.map((item) => (item.id === todo.id ? { ...item, completed: !item.completed } : item));

    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-between items-center group cursor-pointer">
      <div className="cursor-pointer flex items-center">
        <div
          className={`${
            activeTodo.completed ? "opacity-100" : "opacity-20"
          } w-5 h-5 gradient-bg rounded-full mr-3  flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
        >
          <input type="checkbox" name={`todo-${todo.id}`} id={`todo-${todo.id}`} className="cursor-pointer" defaultChecked={activeTodo.completed} onClick={toggleCompleted} />
        </div>
        <label htmlFor={`todo-${todo.id}`} className="cursor-pointer text-[12px] tracking-[-.17px] text-dark49 truncate">
          {activeTodo.description}
        </label>
      </div>
      <Image src={iconCross} width={12} height={12} className="hidden group-hover:block" alt='Delete'/>
    </div>
  );
};

export default TodoItem;
