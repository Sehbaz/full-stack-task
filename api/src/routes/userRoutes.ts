// libraries
import { Router } from "express";

// handler
import registerUserHandler from "../handlers/usersHandler";

const router = Router();

router.post("/register", registerUserHandler);

export default router;
