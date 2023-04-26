import { Request, Response, NextFunction } from "express";

import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "./user.services";
import { AuthUser } from "../../auth/auth.types"

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getAllUsers()
    res.status(200).json({ message: 'User Found', data: user })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to show Users' })
  }
}

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)

    if(!user) {
      return res.status(404).json({ message: 'User not Found' })
    }
    res.status(201).json({ message: 'User Found', data: user })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to show a user by id' })
  }
}

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body)
    res.status(201).json({ message: 'User Created', data: user })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to create a user' })
  }
}

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : ''
    
    const user = await getUserById(id)

    const UserUpdated = await updateUser(id, {...req.body, password: user?.password});
    res.status(200).json({ message: 'User updated', data: UserUpdated });
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to update a user' })
  }
}

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.json(user);
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to delete s user' })
  }
}