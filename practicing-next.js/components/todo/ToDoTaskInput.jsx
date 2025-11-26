"use client";
import { useState } from "react";

const ToDoTaskInput = () => {
  const [task, setTask] = useState("");
  const sumbitTaskHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Task:", task);
  };
  return (
    <form
      onSubmit={sumbitTaskHandler}
      className="flex items-center gap-3 w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
      />

      <button
        onClick={sumbitTaskHandler}
        className="px-4 py-2 rounded-xl bg-primary text-white font-medium hover:bg-primary/80 active:scale-95 transition bg-gray-500"
      >
        Add
      </button>
    </form>
  );
};

export default ToDoTaskInput;
