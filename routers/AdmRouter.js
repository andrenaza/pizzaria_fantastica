const express = require("express");

const router = express.Router();

const PizzasController = require("../controllers/PizzasController");

router.get("/adm/pizzas/create", PizzasController.create);

module.exports = router;