import { prisma } from "./utils/db.ts";
async function testDb() {
  try {
    const tasks = await prisma.task.findMany();
    console.log("Tasks from DB:", tasks);
  } catch (error) {
    console.error("Error connecting to DB:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testDb();
