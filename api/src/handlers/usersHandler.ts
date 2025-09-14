// libraries
import { Request, Response } from "express";

// services
import userService from "../services/userServices";

const registerUserHandler = async (req: Request, res: Response) => {
  const { registerUser, getUserByEmail } = userService;

  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: "missing required fields" });
    }

    const user = await getUserByEmail(email);

    if (user.length > 0) {
      return res.status(409).json({ error: "user already exists" });
    }

    const result = await registerUser(name, email, password);

    return res.status(201).json(result);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export default registerUserHandler;
