import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "./entity/Task";
import { Users } from "./entity/Users";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "todolist",
  synchronize: false,
  logging: false,
  entities: [Task, Users],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});
