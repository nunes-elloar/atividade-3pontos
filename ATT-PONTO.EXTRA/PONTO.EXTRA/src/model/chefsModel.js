import { DataTypes } from "sequelize";
import { conn } from '../config/sequelize.js'

const chefsM = conn.define(
    "chefs",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        biografia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        especialidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experiencia: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        nacionalidade: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "chefs",
        timestamps: true,
        createdAt: "create_at",
        updatedAt: "update_at"
    }
)

export default chefsM