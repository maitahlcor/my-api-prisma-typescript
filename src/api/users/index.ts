import { Router } from 'express';

import {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserByIdHandler,
  deleteUserByIdHandler,
} from './users.controller';

const router = Router();

router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.post('/', createUserHandler);
router.patch('/:id', updateUserByIdHandler);
router.delete('/:id', deleteUserByIdHandler);

export default router;
