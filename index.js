const express = require("express");

const PizzasRouter = require("./routers/PizzasRouter")

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));

app.use("/", PizzasRouter);

app.listen (3000,()=> {console.log("Servidor rodando")})
