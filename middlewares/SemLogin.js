module.exports = (req, res, next) =>{
    if(req.session.usuario != undefined){
        res.redirect("/adm/pizzas/create")
    }
    next();
}