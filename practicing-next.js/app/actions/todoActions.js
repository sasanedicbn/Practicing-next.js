"use server";

import prisma from "@/utils/db.ts";

export async function deleteTask(id) {
  await prisma.task.delete({ where: { id: Number(id) } });
}
