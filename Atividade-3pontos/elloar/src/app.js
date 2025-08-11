import express from "express";
import cors from "cors";
import {conn} from "../config/sequelize.js";

const PORT = 3333
const app = express();
app.use(express.json())
app.use(cors ({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))
conn.sync()
app.listen(PORT, () =>{
    console.log("Servidor iniciado na porta:", PORT, "😎👍")
})