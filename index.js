import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
app.use(express.json());
const prisma = new PrismaClient();
function asyncHandler(func) {
  return async (req, res) => {
    try {
      return await func(req, res);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "something went wrong",
      });
      return;
    }
  };
}
app
  .route("/Task")
  .get(
    asyncHandler(async (_req, res) => {
      const result = await prisma.task.findMany({
        where: {
          isDeleted: false,
        },
      });
      if (result) {
        res.status(200).json(result);
      }
    }),
  )
  .post(
    asyncHandler(async (req, res) => {
      const { Title, description, isCompleted } = req.body;
      if (
        Title == undefined ||
        description == undefined ||
        isCompleted == undefined
      )
        if (!id)
          return res.status(400).json({
            message: "wrong requrest you request should look like this",
            exmaple: {
              Title: "super data",
              description:
                "Lorem ipsum dolor sit amet.\nConsectetur adipiscing elit.",
              isCompleted: false,
            },
          });
      const newtask = req.body;
      const task = await prisma.task.create({ data: newtask });
      if (task) res.status(201).json(task);
    }),
  );

app
  .route("/Task/:id")
  .get(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "id is required" });

      const task = await prisma.task.findUnique({
        where: {
          id,
        },
      });

      if (task) {
        res.status(200).json(task);
      }
    }),
  )
  .patch(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "id is required" });

      const { Title, description, isCompleted } = req.body;
      const task = await prisma.task.update({
        where: {
          id,
        },
        data: {
          isCompleted: isCompleted && isCompleted,
          description: description && description,
          Title: Title && Title,
        },
      });

      if (task) {
        res.status(200).json(task);
      }
    }),
  )
  .delete(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "id is required" });
      const task = await prisma.task.update({
        where: {
          id,
        },
        data: {
          isDeleted: true,
        },
      });
      if (task) res.status(200).json(task);
    }),
  );
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server runing at port ${port}`);
});
