import { UserModel } from "../config/data-source";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { SECRET_KEY } from "../config/dotenv";



export const loginService = async(email: string, password: string) => {
  const user = await UserModel.findOne({ where: { email } });

    const token = jwt.sign(
        {_id: user?.id, username: user?.userName, email: user?.email}, SECRET_KEY || 'secret a key', {
            expiresIn: '2h'
        }
    )

    if (!user) throw new Error("El correo no esta registrado");

    const isValid = await bcrypt.compare(password, user?.password)

    if(!isValid) {
        throw new Error('La contrasena es invalida');
    }

    return {token, user}
};