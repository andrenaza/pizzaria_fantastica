const express = require("express");
const app = express();

const PizzasRouter = require("./routers/PizzasRouter")

app.use("/", PizzasRouter);

app.listen (3000,()=> {console.log("Servidor rodando")})
