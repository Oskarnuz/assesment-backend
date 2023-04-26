import { Router } from "express";

import { 
  getAllListsController, 
  getListByIdController, 
  createListController,  
  deleteListController 
} from "./list.controller";
import { isAuthenticated } from '../../middlewares/auth'


const router = Router()

router.get("/", isAuthenticated, getAllListsController);
router.get("/:id", isAuthenticated, getListByIdController);
router.post("/", isAuthenticated, createListController);
router.delete("/:id",isAuthenticated, deleteListController);

export default router