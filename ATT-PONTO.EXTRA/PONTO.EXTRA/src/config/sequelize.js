import { Sequelize } from "sequelize";

export const conn = new Sequelize ("PontoEX", "root", "123456789", {
    dialect: "mysql",
    port: 3306,
    host: "localhost"
})