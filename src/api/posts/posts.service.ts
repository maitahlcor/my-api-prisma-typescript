import { PrismaClient } from '@prisma/client';
import { postsCreateData } from './posts.type';

const prisma = new PrismaClient();

export async function getAllPosts() {
  const posts = await prisma.posts.findMany();
  return posts;
}

export async function getPostById(id: string) {
  const post = await prisma.posts.findUnique({
    where: {
      id,
    },
  });
  return post;
}

export async function createPost(data: postsCreateData) {
  const post = await prisma.posts.create({
    data,
  });
  return post;
}

export async function updatePostById(id: string, data: postsCreateData) {
  const updatedPost = await prisma.posts.update({
    where: { id },
    data,
  });
  return updatedPost;
}

export async function deletePostById(id: string) {
  const post = await prisma.posts.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });
  return post;
}
