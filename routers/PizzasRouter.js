// importar express
const express = require("express");

// importar PizzasController

const PizzasController = require("../controllers/PizzasController");

// criar roteador
const router = express.Router();

// definir rotas que responde
router.get("/pizzas", PizzasController.listar);

// exportar o roteador
module.exports = router;