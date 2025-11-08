import React from "react";
import { prisma } from "@/lib/prisma";

const fetchTasks = async () => {
  const tasks = await prisma.task.findMany();
  return tasks || [];
};

const TodoList = async () => {
  const tasks = await fetchTasks();

  if (tasks.length === 0) {
    return (
      <div className="flex items-center justify-center text-gray-400 text-lg mt-6">
        No tasks available
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-gray-200 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-indigo-400 text-center">
        Your Tasks
      </h2>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition"
          >
            <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-500" : "text-gray-200"
              }`}
            >
              {task.content}
            </span>

            <div className="flex gap-2 ml-4">
              <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-sm rounded-md font-medium transition">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-sm rounded-md font-medium transition">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
