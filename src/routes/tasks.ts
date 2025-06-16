import { Router } from "express";
import {
  deleteTask,
  getTask,
  getTasks,
  newTask,
  patchTask,
} from "../controller";
const taskRouter = Router();

taskRouter.route("/Task").get(getTasks).post(newTask);

taskRouter.route("/Task/:id").get(getTask).patch(patchTask).delete(deleteTask);
export default taskRouter;
