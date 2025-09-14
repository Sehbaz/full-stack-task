// libraries
import { Router } from "express";

// handler
import userHandler from "../handlers/usersHandler";

const { registerUserHandler, loginUserHandler } = userHandler;

const router = Router();

router.post("/register", registerUserHandler);
router.post("/login", loginUserHandler);

export default router;
