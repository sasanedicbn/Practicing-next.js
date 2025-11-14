"use client";

import { useRouter } from "next/navigation";

const TodoList = ({ tasks }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/prisma/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (!res.ok) {
        console.error(data.error || "Something went wrong");
        return;
      }

      router.refresh(); // osvježava server-side listu zadataka
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-indigo-400 text-center">
        Your Tasks
      </h2>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <span
              className={`${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.content}
            </span>
            <button
              className="text-red-500 ml-auto cursor-pointer"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
