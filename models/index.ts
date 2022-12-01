import { Sequelize } from "sequelize-typescript";
import config from "../config/config.json";
import Book from "./books";
import Author from "./author";

const sequelizeConnection = new Sequelize(
    config.local.database,
    config.local.username,
    config.local.password,
    {
        host: config.local.host,
        dialect: config.local.dialect as "mysql",
        port: config.local.port,
    }
);

export default sequelizeConnection;
