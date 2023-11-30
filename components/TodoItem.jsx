"use client";

import { useEffect, useState } from "react";
import iconCross from "../public/images/icon-cross.svg";
import Image from "next/image";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [completableTodo, setCompletableTodo] = useState(todo);
  const [deletableTodo, setDeletableTodo] = useState(todo);

  const toggleCompleted = () => {

    setCompletableTodo({ ...completableTodo, completed: !completableTodo.completed });

    const updatedTodos = todos.map((item) => (item.id === todo.id ? { ...item, completed: !item.completed } : item));

    setTodos(updatedTodos);
  };

  const deleteTodo = () => {
    setDeletableTodo({ ...deletableTodo, deleted: true });

    const updatedTodos = todos.map((item) => (item.id === todo.id ? { ...item, deleted: true } : item));

    setTodos(updatedTodos.filter((todo) => !todo.deleted));
  };

  return (
    <div className="flex justify-between items-center group cursor-pointer py-4 md:py-5">
      <div className="cursor-pointer flex items-center">
        <div
          className={`${
            completableTodo.completed ? "opacity-100" : "opacity-20"
          } w-5 h-5 gradient-bg rounded-full mr-3  flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300 ease-in-out md:mr-6`}
        >
          <input
            type="checkbox"
            name={`todo-${todo.id}`}
            id={`todo-${todo.id}`}
            className="cursor-pointer w-[18px] h-[18px] border-none bg-white rounded-full outline-none appearance-none checked:gradient-bg checked:w-5 checked:h-5 grid place-content-center"
            defaultChecked={completableTodo.completed}
            onClick={toggleCompleted}
          />
        </div>
        <label
          htmlFor={`todo-${todo.id}`}
          className={`${
            completableTodo.completed ? "text-greyd1 line-through" : "text-dark49"
          } cursor-pointer text-[12px] tracking-[-.17px] truncate md:text-[18px] md:tracking-[-.25px]`}
        >
          {completableTodo.description}
        </label>
      </div>
      <Image src={iconCross} width={12} height={12} className="hidden group-hover:block" alt="Delete" aria-label="Delete todo" onClick={deleteTodo} />
    </div>
  );
};

export default TodoItem;
