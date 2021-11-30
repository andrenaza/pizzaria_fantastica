const pizzas = require("../database/pizzas.json");
const { get } = require("../routers/PizzasRouter");

const controller = {

    listar: (req, res)=> {
        res.send(pizzas)
    },

    getPizza: (req, res) => {
        const idPizza = req.params.id;
        
        const pizza = pizzas.find( (p,i) => p.id == idPizza);

        res.render("pizzas", {pizza});
    }
}

module.exports = controller;