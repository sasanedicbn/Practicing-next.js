"use client";
import React from "react";
import TodoInput from "./TodoInput";
import TodoListServer from "./TodoListServer";

const TodoForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-300 py-10 px-4">
      <div className="w-full max-w-md bg-gray-400 rounded-2xl shadow-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-emerald-900 mb-4">
          📝 Todo App
        </h1>
        <TodoInput />
        <div className="border-t border-gray-700 my-4"></div>
        <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
          <TodoListServer />
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
