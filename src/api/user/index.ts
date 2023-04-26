import { Router } from "express";

import { getAllUsersController, getUserByIdController, createUserController } from "./user.controller"
import { isAuthenticated } from '../../middlewares/auth';


const router = Router()

router.get("/", isAuthenticated, getAllUsersController);
router.get("/:id", isAuthenticated, getUserByIdController);
router.post("/", createUserController);



export default router