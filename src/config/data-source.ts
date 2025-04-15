import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } from "./dotenv";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: PGHOST,
    port: Number(PGPORT),
    username: PGUSER,
    password: PGPASSWORD,
    database:  PGDATABASE,
    synchronize: true,
    logging: true,
    entities: ["dist/entities/**/*.js"],
    subscribers: [],
    migrations: [],
})

export const ProductModel = AppDataSource.getRepository(Product);
export const UserModel = AppDataSource.getRepository(User);


