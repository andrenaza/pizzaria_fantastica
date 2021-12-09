const express = require("express");

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

router.get("/pizzas/create", PizzasController.create);
router.post("/pizzas/create", upload.single("img"), PizzasController.store);

module.exports = router;