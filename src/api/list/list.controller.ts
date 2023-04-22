import { Request, Response, NextFunction } from "express";
import { isAuthenticated } from '../../middlewares/auth'

import { getAllLists, getListById, createList, updateList, deleteList } from "./list.services";


export const getAllListsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const list = await getAllLists()
    res.status(200).json({ message: 'List Found', data: list })
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
    const list = await getListById(id)

    if(!list) {
      return res.status(404).json({ message: 'List not Found' })
    }
    res.status(201).json({ message: 'List Found', data: list })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to show a list by Id' })
  }
}

export const createListController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const list = await createList(req.body)
    res.status(201).json({ message: 'List Created', data: list })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to create a list' })
  }
}

export const updateListController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const list = await updateList(id, req.body)

    if(!list) {
      return res.status(404).json({ message: 'List not found' })
    }

    res.status(201).json({ message: 'List updated', data: list })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to update a list' })
  }
}

export const deleteListController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const list = await deleteList(id);
    res.json(list);
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to delete a list' })
  }
}