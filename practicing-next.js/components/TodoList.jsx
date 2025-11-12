import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-indigo-400 text-center">
        Your Tasks
      </h2>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <div
            className="flex  items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
            key={task.id}
          >
            <li key={task.id}>
              <span
                className={`${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.content}
              </span>
            </li>
            <button className="text-yellow-400 cursor-pointer ml-auto">
              Update
            </button>
            <button className="text-red-500 cursor-pointer ml-3">Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
