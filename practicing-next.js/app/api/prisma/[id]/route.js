import prisma from "@/utils/db.ts";

export async function DELETE({ params }) {
  const { id } = await params;

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    await prisma.task.delete({ where: { id } });
    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
