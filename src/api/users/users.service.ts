import { PrismaClient } from '@prisma/client';
import { useresCreateData } from './users.type';

const prisma = new PrismaClient();

export async function getAllUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export async function getUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return user;
}

export async function createUser(data: useresCreateData) {
  const user = await prisma.users.create({
    data,
  });
  return user;
}

export async function updateUserById(id: string, data: useresCreateData) {
  const updatedUser = await prisma.users.update({
    where: { id },
    data,
  });
  return updatedUser;
}

export async function deleteUserById(id: string) {
  const user = await prisma.users.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });
  return user;
}
