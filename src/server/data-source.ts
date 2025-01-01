import { DataSource } from "typeorm";
import path from "path";
import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  driver: mysql,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, "entities/*.ts")],
  migrations: [path.join(__dirname, "migrations/*.ts")],
});
