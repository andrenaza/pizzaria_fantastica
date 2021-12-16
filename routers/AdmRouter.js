const express = require("express");
const ValidadorDeFormPizzas = require("../middlewares/ValidadorDeFormPizzas");

const multer = require("multer");

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {cb(null, __dirname + "/../public/img")},
        filename: (req,file,cb) => {cb(null, Date.now() + "-" + file.originalname)}
    }
);

const upload = multer({storage});



const router = express.Router();

const PizzasController = require("../controllers/PizzasController");
const AdmController = require("../controllers/AdmController");
const UsuarioLogado = require("../middlewares/UsuarioLogado");

router.get("/login", AdmController.showLogin);
router.post("/login", AdmController.login);

router.get("/pizzas/create", UsuarioLogado, PizzasController.create);
router.post("/pizzas/create", UsuarioLogado, upload.single("img"), ValidadorDeFormPizzas, PizzasController.store);

module.exports = router;