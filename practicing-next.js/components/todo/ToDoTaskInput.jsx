"use client";
import { useState } from "react";
import ToDoTasksList from "./ToDoTasksList";

const ToDoTaskInput = () => {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const sumbitTaskHandler = (e) => {
    e.preventDefault();
    setTaskArr([...taskArr, task]);
    setTask("");
    console.log("Submitted Task:", task);
  };
  const deleteTaskHandler = (index) => {
    const deleteTask = taskArr.filter((_, i) => i !== index);
    setTaskArr(deleteTask);
  };
  const updateTaskHandler = (index) => {
    const updateTask = taskArr.map((task, i) => {
      if (i === index) {
        return <input type="text" value={task} />;
      }
      return task;
    });
    setTaskArr(updateTask);
  };

  return (
    <div>
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
      <ToDoTasksList
        tasks={taskArr}
        onDelete={deleteTaskHandler}
        onUpdate={updateTaskHandler}
      />
    </div>
  );
};

export default ToDoTaskInput;
