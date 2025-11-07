import React from "react";
import prisma from "@/utils/db";

const getAllTasks = async () => {
  await prisma.task.create({
    data: { content: "Do your math homework" },
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
