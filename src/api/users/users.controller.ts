import { Request, Response, NextFunction } from 'express';

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from './users.service';

export async function getAllUsersHandler(req: Request, res: Response) {
  const users = await getAllUsers();

  return res.json(users);
}

export async function getUserByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}


export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const user = await createUser(data);

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}


export async function updateUserByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const user = await updateUserById(id, data);

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

export async function deleteUserByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  await deleteUserById(id);

  return res.status(204).end();
}
