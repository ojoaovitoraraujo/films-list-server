import "reflect-metadata"
import { DataSource } from "typeorm"
import {Films} from "../app/entities/filmsEntity"
import { CreateFilmsTable1709040960381 } from "./migrations/1709040960381-CreateFilmsTable"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "films_bd",
    synchronize: true,
    logging: false,
    entities: [Films],
    migrations: [CreateFilmsTable1709040960381],
    subscribers: [],
})
