const pizzas = require("../database/pizzas.json");
const { get } = require("../routers/PizzasRouter");
const fs = require("fs");

const controller = {

    listar: (req, res)=> {
       return res.render("index", {pizzas, busca:""});
    },

    getPizza: (req, res) => {
        const idPizza = req.params.id;
        
        const pizza = pizzas.find( (p,i) => p.id == idPizza);

        res.render("pizzas", {pizza});
    },

    busca: (req, res) =>{
        const string = req.query.q.trim();
        
        const pizzasFiltradas = pizzas.filter(
            p => p.nome.toUpperCase().includes(string.toUpperCase())
        );

        res.render("index", {pizzas:pizzasFiltradas, busca:string});
    },

    create: (req, res) => {
        res.render("crud-pizzas/create");
    },

    store: (req, res) => {
        const nome = req.body.nome;
        const ingredientes = req.body.ingredientes.split(",").map(a => a.trim());
        const preco = Number(req.body.preco);
        const pizza = {nome, ingredientes, preco, img:"/img/" + req.file.filename};
        
        //Adicionar id a pizza recém-criada
        pizza.id = pizzas[pizzas.length -1].id + 1;

        //adicionar a pizza ao array de pizzas
        pizzas.push(pizza);

        //salvar o json do array de pizzas no arquivo Pizzas.json
        fs.writeFileSync(
            __dirname + "/../database/Pizzas.json",
            JSON.stringify(pizzas, null,4),
            {flag:"w"}
            );

        //Direcionar o usuário para a página que exibe a lista de pizzas
        res.redirect("/");
    }
}

module.exports = controller;