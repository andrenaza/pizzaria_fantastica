const req = require("express/lib/request");


module.exports = {
    showLogin: (req, res) =>{
        return res.render("login");
    },

    login: (req,res) =>{
        // capturar o email e senha inseridos pelo usuário
        const {email, senha} = req.body;

        // carregar o array de usuários
        const usuarios = require("../database/Usuários.json");

        // buscar o usuário no array pelo e-mail digitado
        const usuario = usuarios.find(u => u.email == email && u.senha == senha);

        // caso usuário não exista, retornar erro (fim)
        if (usuario === undefined){
            return res.send("Usuário e/ou senha inválidos.")
        }

        // se chegou até aqui, mandar msg de sucesso
        return res.send("Ok! Tudo certo.")
    }
}