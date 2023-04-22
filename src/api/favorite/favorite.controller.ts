import { Request, Response, NextFunction } from "express";

import { getAllFavorites, getFavoriteById, createFavorite, updateFavorite, deleteFavorite } from "./favorite.services";


export const getAllFavoritesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const favorite = await getAllFavorites()
    res.status(200).json({ message: 'Favorite Found', data: favorite })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible ti show favotites' })
  }
}

export const getFavoriteByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const favorite = await getFavoriteById(id)

    if(!favorite) {
      return res.status(404).json({ message: 'Favorite not Found' })
    }
    res.status(201).json({ message: 'Favorite Found', data: favorite })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to show a favorite by Id' })
  }
}

export const createFavoriteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const favorite = await createFavorite(req.body)
    res.status(201).json({ message: 'Favorite Created', data: favorite })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to create a favotite' })
  }
}

export const updateFavoriteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const favorite = await updateFavorite(id, req.body)

    if(!favorite) {
      return res.status(404).json({ message: 'Favorite not found' })
    }

    res.status(201).json({ message: 'Favorite updated', data: favorite })
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to update a favotite' })
  }
}

export const deleteFavoriteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const favorite = await deleteFavorite(id);
    res.json(favorite);
  } catch(error: any) {
    res.status(500).json({ message: 'Not is possible to delete a favotite' })
  }
}