// importar express
const express = require("express");

// importar PizzasController

const PizzasController = require("../controllers/PizzasController");

// criar roteador
const router = express.Router();

// definir rotas que responde
router.get("/", PizzasController.listar);
router.get("/pizzas", PizzasController.listar);
router.get("/pizzas/:id", PizzasController.getPizza);

// exportar o roteador
module.exports = router;