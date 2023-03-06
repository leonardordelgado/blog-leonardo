const express = require('express')
const router = express.Router();


router.get("/Blog_leonardo", function(req, res){
    res.render("pages/home/index");
    //criando uma rota onde / vai me direcionar a pagina principal nomeada index.
    //res.render significa que a rota ira renderizar o arquivo que esta no caminho.
})

router.get("/", function(req, res){
    res.render("pages/home/index");
    //criando uma rota onde / vai me direcionar a pagina principal nomeada index.
    //res.render significa que a rota ira renderizar o arquivo que esta no caminho.
})
router.get("/about", function(req, res){
    res.render("./views/start/about");
    //criando uma rota onde / vai me direcionar a pagina sobre nomeada about.
})
router.get('/git', function(req, res){
    res.redirect("https://github.com/leonardoresendedelgado")
})
module.exports = router