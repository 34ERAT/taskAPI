import { PrismaClient, Task } from "@prisma/client";

const prisma = new PrismaClient();
export const findMany = async () => {
  return await prisma.task.findMany({
    where: {
      isDeleted: false,
    },
  });
};
export const create = async (newTask: Task) => {
  return await prisma.task.create({ data: newTask });
};
export const findUnique = async (id: string) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};
export const update = async (
  id: string,
  { isCompleted, description, Title }: Task,
) => {
  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      isCompleted: isCompleted && isCompleted,
      description: description && description,
      Title: Title && Title,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      isDeleted: true,
    },
  });
};
