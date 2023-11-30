"use client";

import { useEffect, useState } from "react";

const InputForm = ({ todos, setTodos, setFilterStatus }) => {
  const [newInput, setNewInput] = useState("");
  const [countId, setCountId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountId(countId + 1);
    if (newInput) {
      const newTodo = {
        id: countId,
        description: newInput.trim(),
        completed: false,
        deleted: false,
      };
      setTodos([newTodo, ...todos]);
      setNewInput("");
      setFilterStatus("all");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white py-[14px] px-5 rounded-[5px] mb-4 flex items-center justify-start md:py-5 md:px-6 md:mb-6">
      <div className="w-[21px] h-5 rounded-full border-[1px] border-[#E3E4F1] mr-3 md:mr-6 md:w-[22px]" />
      <input
        type="text"
        name="new-input"
        id="new-input"
        placeholder="Create a new todo..."
        className=""
        value={newInput}
        onChange={(e) => {
          setNewInput(e.target.value);
        }}
      />
    </form>
  );
};

export default InputForm;
