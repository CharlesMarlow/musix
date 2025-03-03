import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler: ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err);

  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }

  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
    return;
  }

  res.status(500).json({ error: 'Internal Server Error' });
  return;
};

export const BadRequest = (message: string): ApiError =>
  new ApiError(message, 400);
export const NotFound = (message: string): ApiError =>
  new ApiError(message, 404);
export const InternalServerError = (): ApiError =>
  new ApiError('Something went wrong', 500);
