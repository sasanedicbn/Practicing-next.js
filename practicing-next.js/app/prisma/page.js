import React from "react";
import prisma from "@/utils/db";

const getAllTasks = async () => {
  // await prisma.task.create({
  //   data: { content: "Do your math homework" },
  // });

  await prisma.task.update({
    where: { id: "1eb895cc-feea-4914-b928-10a105145f7c" },
    data: { content: "Updated homework task" },
  });

  await prisma.task.delete({
    where: { id: "a5e7c165-5b84-4e9d-83a0-65e81db3b2ef" },
  });
  const tasks = await prisma.task.findMany();
  return tasks;
};

const Prisma = async () => {
  const allTasks = await getAllTasks();
  return (
    <div>
      <h2 className="text-2xl text-amber-300">Prisma</h2>
      <ul>
        {allTasks?.map((task) => {
          return <li key={task.id}>{task.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default Prisma;
