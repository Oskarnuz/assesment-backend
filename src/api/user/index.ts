import { Router } from "express";

import { getAllUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController } from "./user.controller"
import { isAuthenticated } from '../../middlewares/auth';


const router = Router()

router.get("/", isAuthenticated, getAllUsersController);
router.get("/:id", isAuthenticated, getUserByIdController);
router.post("/", createUserController);
router.put("/:id", isAuthenticated, updateUserController);
router.delete("/:id", isAuthenticated, deleteUserController);


export default router