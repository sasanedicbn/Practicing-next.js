"use client";
import React, { useState } from "react";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      return;
    }

    console.log(todo, "tekst sto se salje");
  };
  return (
    <form
      onSubmit={handleAddTodo}
      className="flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-2xl shadow-lg w-full max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className="flex-1 px-4 py-2 text-gray-200 bg-gray-800 rounded-lg outline-none placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 transition"
      />
      <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition">
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
