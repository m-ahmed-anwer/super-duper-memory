import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof DatabaseConnectionError) {
    res.status(err.status).send({ errors: err.serializeErrors() });
    return;
  }

  if (err instanceof CustomError) {
    res.status(err.status).send({ errors: err.serializeErrors() });
    return;
  }

  res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
};
