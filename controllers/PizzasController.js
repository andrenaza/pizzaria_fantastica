const pizzas = require("../database/pizzas.json")

const controller = {
    listar: (req, res)=> {
        res.send(pizzas)
    }
}

module.exports = controller;