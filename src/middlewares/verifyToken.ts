import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/dotenv";

interface IUser {
  _id: string;
  userName: string;
  email: string;
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.my_cookie_acces;

  if (!token) {
    res.status(401).json({ message: "Acceso denegado" });
    return;
  }

  try {
    const user = jwt.verify(token, SECRET_KEY || "secret a key") as IUser;
    req.userId = user._id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token inválido" });
  }
};
