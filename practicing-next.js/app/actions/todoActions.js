import prisma from "@/utils/db";

export async function DELETE(req, { params }) {
  console.log(params.id, "id koji dolazi");
  const id = Number(params.id);
  await prisma.task.delete({ where: { id } });
  return new Response(JSON.stringify({ success: true }));
}
