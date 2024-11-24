import { DatabaseConnectionError } from "../errors/database-connection-error";
import { CustomError } from "../errors/custom-error";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle specific errors
  if (err instanceof DatabaseConnectionError) {
    res
      .status(err.status)
      .send({ success: false, message: err.serializeErrors().message });
    return;
  }

  if (err instanceof CustomError) {
    res
      .status(err.status)
      .send({ success: false, message: err.serializeErrors().message });
    return;
  }

  // Default error handling
  res.status(500).send({
    success: false,
    message: "Something went wrong",
  });
};
