//importanto express
const express = require("express");

//importanto roteador
const PizzasRouter = require("./routers/PizzasRouter")
const admRouter = require ("./routers/AdmRouter");

//Importando Middleware
const LogMiddleware = require("./middlewares/LogMiddleware");

// criando servidor
const app = express();

//configurando o template engine EJS
app.set("view engine", "ejs");
app.set("views", "./views");

//configurando o processamento de formulários
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Middleware de LOG
app.use(LogMiddleware);

//configurando pasta public
app.use(express.static(__dirname + "/public"));

//criar a rota respondendo a requisição
app.use("/", PizzasRouter);
app.use("/adm", admRouter);

//levantar servidor
app.listen (3000,()=> {console.log("Servidor rodando")})
