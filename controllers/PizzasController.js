const pizzas = require("../database/pizzas.json");
const { get } = require("../routers/PizzasRouter");

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
    }
}

module.exports = controller;