import { Router } from "express";

import { 
  getAllListsController, 
  getListByIdController, 
  createListController,  
  deleteListController,
  updateListController 
} from "./list.controller";
import { isAuthenticated } from '../../middlewares/auth'


const router = Router()

router.get("/", isAuthenticated, getAllListsController);
router.get("/:id", isAuthenticated, getListByIdController);
router.post("/", isAuthenticated, createListController);
router.delete("/:id",isAuthenticated, deleteListController);
router.put("/:id", isAuthenticated, updateListController);

export default router