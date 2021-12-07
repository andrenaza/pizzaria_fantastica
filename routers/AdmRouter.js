const express = require("express");

const router = express.Router();

const PizzasController = require("../controllers/PizzasController");

router.get("/pizzas/create", PizzasController.create);
router.post("/pizzas/create", PizzasController.store);

module.exports = router;