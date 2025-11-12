"use server";
import prisma from "@/utils/db.ts";

export const delteTask = async (req, { params }) => {
  const id = params.id;
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
};
