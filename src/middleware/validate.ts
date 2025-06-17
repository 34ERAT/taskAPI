import { NextFunction, Request, Response } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { Title, description } = req.body;
  if (Title == "" || description == "") {
    res.status(400).json({ error: "no field should be empty" });
    return;
  }
  next();
};
