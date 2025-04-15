import { Router } from "express";

const authRoute = Router()

authRoute.get('/login')
authRoute.post('/register')
authRoute.post('/logout')

export default authRoute;