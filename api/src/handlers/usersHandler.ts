// libraries
import { Request, Response } from "express";

// services
import userService from "../services/userServices";

const { registerUser, getUserByEmail, getUser } = userService;

const registerUserHandler = async (req: Request, res: Response) => {
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

const loginUserHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "missing required fields" });
    }

    const user = await getUser(email, password);

    if (!user) {
      return res.status(401).json({ error: "invalid email or password" });
    }

    return res.status(200).json({
      message: "login successful",
      user,
      token: user.token,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export default { registerUserHandler, loginUserHandler };
