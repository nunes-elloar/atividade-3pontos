import { Router } from "express";
import {CadastrarChefs, BuscarChef, ListarChefs, AtualizarChef, DeletarChef} from "../controller/chefsC.js"

const router = Router()

router.post("/chefs", CadastrarChefs)
router.get("/chefs/:id",BuscarChef)
router.get("/chefs", ListarChefs)
router.put("/chefs/:id", AtualizarChef)
router.delete("/chefs/:id", DeletarChef)

export default router