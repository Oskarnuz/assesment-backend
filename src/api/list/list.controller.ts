import { Request, Response, NextFunction } from "express";
import { AuthUser } from "../../auth/auth.types";

import { 
  getAllLists, 
  getListById, 
  createList, 
  deleteList,
  updateList 
} from "./list.services";


export const getAllListsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lists = await getAllLists()
    res.status(200).json({ message: 'List Found', data: lists })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to show lists' })
  }
}

export const getListByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const list = await getListById(Number(id))

    if(!list) {
      return res.status(404).json({ message: 'List not Found' })
    }
    res.status(201).json({ message: 'List Found', data: list })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to show a list by Id' })
  }
}

export const createListController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const ownerId = req.user;
    const { name } = req.body;

    if (!ownerId) {
      return res.status(400).json({ message: 'User id is missing' });
    }

    const list = await createList(name, ownerId);
    res.status(201).json({ message: 'List created', data: list });
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to create a list' })
  }
}

export const deleteListController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const list = await deleteList(Number(id));
    res.json(list);
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to delete a list' })
  }
}

export const updateListController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name, favorites } = req.body;

    const updatedList = await updateList(Number(id), { name, favorites }); 
    res.status(201).json({ message: 'List updated', data: favorites });
  } catch (error: any) {
    res.status(500).json({ message: 'Unable to update the list' });
  }
};
