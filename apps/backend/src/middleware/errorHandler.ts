import { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof Error) {
    return res.status(500).json({ error: err.message });
  }

  return res.status(500).json({ error: 'Internal Server Error' });
};

export const BadRequest = (message: string): ApiError =>
  new ApiError(message, 400);
export const NotFound = (message: string): ApiError =>
  new ApiError(message, 404);
export const InternalServerError = (): ApiError =>
  new ApiError('Something went wrong', 500);
