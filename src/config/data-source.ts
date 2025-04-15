import { DataSource } from "typeorm";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: ["dist/entities/**/*.js"],
    subscribers: [],
    migrations: [],
})

export const ProductModel = AppDataSource.getRepository(Product);


