import { PrismaClient } from '@prisma/client';
import { reviewsCreateData } from './reviews.type';

const prisma = new PrismaClient();

export async function getAllReviews() {
  const reviews = await prisma.reviews.findMany();
  return reviews;
}

export async function getReviewById(id: string) {
  const review = await prisma.reviews.findUnique({
    where: {
      id,
    },
  });
  return review;
}

export async function createReview(data: reviewsCreateData) {
  const review = await prisma.reviews.create({
    data,
  });
  return review;
}

export async function updateReviewById(id: string, data: reviewsCreateData) {
  const updatedUser = await prisma.reviews.update({
    where: { id },
    data,
  });
  return updatedUser;
}

export async function deleteReviewById(id: string) {
  const review = await prisma.reviews.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });
  return review;
}
