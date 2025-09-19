import { request, response } from "express";
import chefsM from "../model/chefsModel.js";

export const CadastrarChefs = async(request, response) => {
    const {nome, biografia, especialidade, experiencia, nacionalidade} = request.body
    if(!nome){
        response.status(400).json({mensage: "Campo obrigatório!"})
        return
    }
    if(!biografia){
        response.status(400).json({mensage: "Campo obrigatório!"})
        return
    }
    if(!especialidade){
        response.status(400).json({mensage: "Campo obrigatório!"})
        return
    }
    if(!experiencia){
        response.status(400).json({mensage: "Campo obrigatório!"})
        return
    }
    if(!nacionalidade){
        response.status(400).json({mensage: "Campo obrigatório!"})
        return
    }

    const cadastro = {
        nome,
        biografia,
        especialidade,
        experiencia,
        nacionalidade
    }
    try{
        const cadastrar = await chefsM.create(cadastro)
        if(!cadastrar){
            response.status(404).json({mensage:"Erro no cadastro do chef!"})
            return
        }
        response.status(201).json({mensage: "Cadastro feito com sucesso."}, cadastrar)
    }catch(error){
        console.log(error)
        response.status(500).json({mensage: "Erro interno do servidor!"})
    }
}

export const BuscarChef = async(request, response) => {
    const {id} = request.params;
    if(!id){
        response.status(400).json({mensage:"ID inválido"})
        return
    }

    try{
        const buscar = await chefsM.findByPk(id)
        if(!buscar){
            response.status(404).json({mensage:"Chef não encontrado."})
            return
        }

        response.status(200).json(buscar)
    }catch(error){
        console.log(error),
        response.status(500).json({mensage:"Erro interno do servidor"})
    }
}

export const ListarChefs = async(request, response) => {
const page = parseInt(request.query.page) || 1
const limit = parseInt(request.query.limit) || 10
const offset = (page - 1) * limit

try{
    const chefs = await chefsM.findAndCountAll({
        offset,
        limit
    })
    const totalPaginas = Math.ceil(chefs.count / limit)

    response.status(200).json({
        Chefs: chefs.count,
        chefs: chefs.rows,
        chefsPaginas: limit,
        totalPaginas,
        paginaAtual: page
    })
}catch
(error){
    console.log(error)
    response.status(500).json({mensage:"Erro interno do servidor!"})
}
}

export const AtualizarChef = async(request, response) => {
    const {id} = request.params;
    const {nome, biografia, especialidade, experiencia, nacionalidade} = request.body

    if(!id){
        response.status(400).json({mensage: "Id inválido"})
        return
    }

    try{
        const atualiza = await chefsM.findOne({
            where: id
        })
        if(!id){
            response.status(404).json({mensage:"Chef não encontrado"})
            return
        }

        if(nome !== undefined){
            atualiza.nome = nome
        }
        if(biografia !== undefined){
            atualiza.biografia = biografia
        }
        if(especialidade !== undefined){
            atualiza.especialidade = especialidade
        }
        if(experiencia !== undefined){
            atualiza.experiencia = experiencia
        }
        if(nacionalidade !== undefined){
            atualiza.nacionalidade = nacionalidade
        }
        await atualiza.save()
        response.status(200).json({mensage:"Chef atualizado com sucesso!!!"})
    }catch(error){
        console.log(error)
        response.status(500).json({mensage:"Erro interno do servidor."})
    }
}

export const DeletarChef = async (request, response) => {
 const {id} = request.params;
   if(!id){
        response.status(400).json({mensage: "Id inválido"})
        return
    }
     try{
        const buscar = await chefsM.destroy({
            where: id
        })
        if(!buscar){
            response.status(404).json({mensage:"Chef não encontrado."})
            return
        }
        response.status(204).send()
    }catch(error){
        console.log(error),
        response.status(500).json({mensage:"Erro interno do servidor"})
    }
}