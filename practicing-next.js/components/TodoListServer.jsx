import TodoList from "./TodoList";
import prisma from "@/utils/db.ts";

const TodoListServer = async () => {
  const Alltasks = await prisma.task.findMany();
  return <TodoList tasks={Alltasks} />;
};

export default TodoListServer;
