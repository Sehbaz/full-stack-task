// libraries
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { eq } from "drizzle-orm";

// db setup
import { db } from "../db/index";
import { usersTable } from "../db/schema";
import { generateToken } from "../utils/auth";

const getUserByEmail = async (email: string) => {
  return await db.select().from(usersTable).where(eq(usersTable.email, email));
};

const getUser = async (email: string, password: string) => {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  const token = generateToken({ id: user.id, email: user.email });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };
};

const registerUser = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const [user] = await db
    .insert(usersTable)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
    });

  if (!user) {
    throw new Error("User registration failed: no user returned from DB");
  }

  const token = generateToken({ id: user.id, email: user.email });

  return {
    message: "user registered successfully",
    user: user,
    token,
  };
};

export default { getUserByEmail, getUser, registerUser };
