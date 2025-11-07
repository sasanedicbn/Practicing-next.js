import React from "react";
import prisma from "@/utils/db";

const getAllTasks = async () => {
  await prisma.task.create({
    data: { content: "Do your math homework" },
  });
};

const Prisma = async () => {
  await getAllTasks();
  return <div>Prisma</div>;
};

export default Prisma;
