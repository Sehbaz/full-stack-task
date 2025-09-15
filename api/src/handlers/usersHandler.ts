// libraries
import { Request, Response } from "express";

// services
import { User } from "../models/user";
import userService from "../services/userServices";

const { registerUser, getUserByEmail, getUser } = userService;

const registerUserHandler = async (req: Request, res: Response) => {
  const userData: User = { ...req.body };

  try {
    if (!userData.name || !userData.email || !userData.password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await getUserByEmail(userData.email);
    if (existingUser.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    const result = await registerUser(userData);
    return res.status(201).json(result);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const loginUserHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = await getUser(email, password);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export default { registerUserHandler, loginUserHandler };
