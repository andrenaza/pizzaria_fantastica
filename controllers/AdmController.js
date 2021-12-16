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

        // se chegou até aqui, escreve session do uruário
        req.session.usuario = usuario;
        
        // redirecionar para uma pagina interna
        return res.redirect("/adm/pizzas/create");
    },
    logout: (req,res) =>{
        req.session.usuario = undefined;
        return res.redirect("login");
    }
}