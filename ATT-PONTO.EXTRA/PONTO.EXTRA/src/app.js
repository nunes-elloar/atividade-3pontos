import express from "express";
import cors from "cors"

import { conn } from "./config/sequelize.js";

import router from "./routers/chefsR.js";


const app = express();
app.use(express.json());
app.use(cors({
    methods:["GET", "POST", "PUT", "PATCH", "DELETE"],
    origin: "*",
    credentials: true
}));

conn.sync() 
.then(() => {
    console.log("Banco de dados ON 😎✌️")
})
.catch((error) => console.log(error))
app.get("/", (request, response) => {
  response.status(200).json({ mensagem: "Olá, Mundo!" });
});
app.use("/api/chefs", router)

export default app