import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entity/Task"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "maunti",
    database: "todolist",
    synchronize: true,
    logging: false,
    entities: [Task],
    migrations: [],
    subscribers: [],
})
