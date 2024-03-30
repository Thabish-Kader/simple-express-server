import { Request, Response, NextFunction } from "express";

type CustomError = Error & { status?: number };

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
};
