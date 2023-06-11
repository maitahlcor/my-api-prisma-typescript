import { Request, Response, NextFunction } from 'express';

import {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
} from './posts.service';

export async function getAllPostsHandler(req: Request, res: Response) {
  const posts = await getAllPosts();

  return res.json(posts);
}

export async function getPostByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const post = await getPostById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function createPostsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const review = await createPost(data);

    return res.json(review);
  } catch (error) {
    return next(error);
  }
}

export async function updatePostByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const post = await updatePostById(id, data);

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function deletePostByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    await deletePostById(id);

    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}
