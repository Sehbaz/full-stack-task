// libraries
import jwt from "jsonwebtoken";

// models
import { TokenPayload } from "../models/user";

export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
};
