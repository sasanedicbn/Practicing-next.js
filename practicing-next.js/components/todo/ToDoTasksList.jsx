const ToDoTasksList = ({ tasks, onDelete }) => {
  return (
    <div className="w-2/5 mt-4 bg-gray-800">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks available.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex">
              <div className="px-4 py-2  text-white rounded-lg shadow">
                {task}
              </div>
              <div className="text-white ml-auto flex gap-4 align-center m-2 ">
                <button className="cursor-pointer">Update</button>
                <button
                  onClick={() => onDelete(index)}
                  className="cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoTasksList;
