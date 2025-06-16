import express from "express";
import taskRouter from "./routes/tasks";
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.use(taskRouter);
app.listen(port, () => {
  console.log(`server runing at port ${port}`);
});
