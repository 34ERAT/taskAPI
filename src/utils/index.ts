import { Request, Response } from "express";
export function asyncHandler(func: Function) {
  return async (req: Request, res: Response) => {
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
