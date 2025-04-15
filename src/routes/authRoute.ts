import { Router } from "express";
import { loginController, logoutController, registerController } from "../controllers/authController";

const authRoute = Router()

authRoute.get('/login', loginController)
authRoute.post('/register', registerController)
authRoute.get('/logout', logoutController)

export default authRoute;