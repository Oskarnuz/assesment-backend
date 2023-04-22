import { Router } from "express";

import { getAllListsController, getListByIdController, createListController, updateListController, deleteListController } from "./list.controller";
import { isAuthenticated } from '../../middlewares/auth'


const router = Router()

router.get("/", isAuthenticated, getAllListsController);
router.get("/:id", isAuthenticated, getListByIdController);
router.post("/", createListController);
router.put("/:id", isAuthenticated, updateListController);
router.delete("/:id",isAuthenticated, deleteListController);

export default router