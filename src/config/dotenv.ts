import dotenv from "dotenv";

dotenv.config();

export const { PORT, PGUSER, PGDATABASE, PGHOST, PGPASSWORD, PGPORT, SECRET_KEY} =
  process.env;
