"use client";
import { deleteTask } from "@/app/actions/todoActions";
// import { useRouter } from "next/navigation";

const TodoList = ({ tasks }) => {
  // const router = useRouter();

  const handleDelete = async (id) => {
    // console.log("Deleting task with id:", id);
    await deleteTask(id);
    router.refresh();
  };
  // console.log("task id:", tasks);

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
            <button
              onClick={() => handleDelete(task.id)}
              className="text-yellow-400 cursor-pointer ml-auto"
            >
              Delete
            </button>
            {/* <button
              className="text-red-500 cursor-pointer ml-3"
              type="submit"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button> */}
            {/* <form action={deleteTask}>
              <input type="hidden" name="id" value={task.id} />
              <button className="text-red-500 ml-3">Delete</button>
            </form> */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
