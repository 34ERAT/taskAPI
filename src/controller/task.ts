import { PrismaClient, Task } from "@prisma/client";
import { Request, Response } from "express";
import { asyncHandler } from "../utils";
import {
  create,
  findMany,
  findUnique,
  remove,
  update,
} from "../service/tasks.service";

export const getTasks = asyncHandler(async (_req: Request, res: Response) => {
  const result = await findMany();
  if (result) {
    res.status(200).json(result);
  }
});

export const newTask = asyncHandler(async (req: Request, res: Response) => {
  // const { Title, description, isCompleted }: Task = req.body;
  const newtask: Task = req.body;
  const task = await create(newtask);
  if (task) res.status(201).json(task);
});

export const getTask = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "id is required" });

  const task = await findUnique(id);
  if (task) {
    res.status(200).json(task);
  }
});

export const patchTask = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "id is required" });

  const updateTask: Task = req.body;
  const task = await update(id, updateTask);
  if (task) {
    res.status(200).json(task);
  }
});

export const deleteTask = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "id is required" });
  const task = await remove(id);
  if (task) res.status(200).json(task);
});
