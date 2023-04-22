import { Router } from "express";

import { getAllFavoritesController, getFavoriteByIdController, createFavoriteController, updateFavoriteController, deleteFavoriteController } from "./favorite.controller"


const router = Router()

router.get("/", getAllFavoritesController);
router.get("/:id", getFavoriteByIdController);
router.post("/", createFavoriteController);
router.put("/:id", updateFavoriteController);
router.delete("/:id", deleteFavoriteController);


export default router