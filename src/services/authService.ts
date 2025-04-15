import { UserModel } from "../config/data-source";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { SECRET_KEY } from "../config/dotenv";

export const loginService = async (email: string, password: string) => {
  const user = await UserModel.findOne({ where: { email } });

  if (!user) throw new Error("El correo no esta registrado");

  const isValid = await bcrypt.compare(password, user?.password);

  if (!isValid) {
    throw new Error("La contrasena es invalida");
  }

  const token = jwt.sign(
    { _id: user.id, username: user.userName, email: user.email },
    SECRET_KEY || "secret a key",
    { expiresIn: "2h" }
  );

  return { token, user };
};

export const registerService = async (
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const validateEmail = await UserModel.findOne({ where: { email } });
  const validateUsername = await UserModel.findOne({ where: { userName } });
  // const validatePassword = UserModel.findOne({where: {password}})

  if (validateEmail) {
    throw new Error("El correo ya existe!");
  }

  if (validateUsername) {
    throw new Error("El nombre de usuario ya existe!");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const userCreated = await UserModel.create({
    userName,
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  await UserModel.save(userCreated);

  return {
    id: userCreated.id,
    username: userCreated.userName,
    email: userCreated.email,
  };
};
