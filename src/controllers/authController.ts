import e, { Request, Response } from "express";
import { loginService, registerService } from "../services/authService";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(401).json({ message: "Campos obligatorios" });
      return
    }

    const { token } = await loginService(email, password);

    res.cookie("my_cookie_acces", token, {
      sameSite: "lax",
      httpOnly: true,
    });

    res.status(200).json({
      succes: true,
      message: "Has iniciado sesion con exito!",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  }
};

export const registerController = async (req: Request, res: Response) => {
  const { userName, firstName, lastName, email, password } = req.body;

  try {
    if (!userName || !firstName || !lastName || !email || !password) {
      res.status(400).json({ message: "Todos los campos son obligatorios" });
      return;
    }

    await registerService(userName, firstName, lastName, email, password);

    res.status(201).json({
        success: true,
        message: "Te registraste con éxito!"
      })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  }
};

export const logoutController = (req: Request, res: Response) => {
  try {
    res.clearCookie("my_cookie_acces");

    res.status(200).json({
      succes: true,
      message: "Has cerrado la sesion!",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  }
};
