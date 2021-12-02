const express = require("express");

const PizzasRouter = require("./routers/PizzasRouter")

const admRouter = require ("./routers/AdmRouter");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));

app.use("/", PizzasRouter);
app.use("/", admRouter);

app.listen (3000,()=> {console.log("Servidor rodando")})
