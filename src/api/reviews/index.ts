import { Router } from 'express';
import {
  getAllReviewsHandler,
  getReviewByIdHandler,
  createReviewHandler,
  updateReviewByIdHandler,
  deleteReviewByIdHandler,
} from './reviews.controller';

const router = Router();

router.get('/', getAllReviewsHandler);
router.get('/:id', getReviewByIdHandler);
router.post('/', createReviewHandler);
router.patch('/:id', updateReviewByIdHandler);
router.delete('/:id', deleteReviewByIdHandler);

export default router;
