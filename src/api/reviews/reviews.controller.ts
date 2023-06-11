import { Request, Response, NextFunction } from 'express';

import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReviewById,
  deleteReviewById,
} from './reviews.service';

export async function createReviewHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const review = await createReview(data);

    return res.json(review);
  } catch (error) {
    return next(error);
  }
}

export async function getAllReviewsHandler(req: Request, res: Response) {
  const reviews = await getAllReviews();

  return res.json(reviews);
}

export async function getReviewByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const review = await getReviewById(id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    return res.json(review);
  } catch (error) {
    return next(error);
  }
}

export async function updateReviewByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const review = await updateReviewById(id, data);

    return res.json(review);
  } catch (error) {
    return next(error);
  }
}

export async function deleteReviewByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  await deleteReviewById(id);

  return res.status(204).end();
}
