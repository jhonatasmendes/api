import { db } from "../database/db.js"

export const getUsers = (_, res) => {
    const sql = "select * from usuario"

    db.query(sql, (err, data) =>{
        if (err) {
            console.log("Erro ao processar a requisição.")
            return res.status(500).json(err)
        } else {
            console.log("Dados de usuario obtidos com sucesso.")
            return res.status(200).json(data)
        }
    })
}

export const addUser = (req, res) => {
    const sql = "insert into usuario (nome) values (?)"

    const { nome } = req.body

    db.query(sql, [nome], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição")
            return res.status(500).json(err)
        } else {
            console.log("Usuário cadastrado com sucesso")
            return res.status(201).json(data)
        }
    })
}

export const updateUser = (req, res) => {
    const sql = "update usuario set nome = ? where id = ?"

    const { id, nome } = req.body

    db.query(sql, [nome, id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição")
            return res.status(500).json(err)
        } else {
            console.log("Dados de usuário alterados com sucesso")
            return res.status(200).json(data)
        }
    })
}

export const deleteUser = (req, res) => {
    const sql = "delete from usuario where id = ?"

    const { id } = req.query

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição")
            return res.status(500).json(err)
        } else {
            console.log("Usuário removido com sucesso")
            return res.status(200).json(data)
        }
    })
}