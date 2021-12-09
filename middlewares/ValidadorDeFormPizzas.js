const { check } = require("express-validator");

const validacoes = [
    check("nome")
    .notEmpty()
    .withMessage("Nome deve ser preenchido")
    .isLength({min:2, max:30})
    .withMessage("Nome deve ter pelo menos 2 caracteres e no máximo 30")
    .bail()
    ,
    check("ingredientes")
    .notEmpty()
    .withMessage("Ingredientes deve ser preenchido")
    .bail()
    ,
    check("preco")
    .isNumeric()
    .withMessage("Preço deve ser numérico")
    .bail()
];

module.exports = validacoes;