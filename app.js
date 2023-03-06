const express = require('express');// buscando o modulo express e salvando numa constante 
const app = express();// fazendo uma instancia do express e salvando em app
const server = require('./conections/conections')
const path = require("path");// carrega o modulo path
const index = require("./routes/home/index")
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');//especifica a ferramentaque sera usada para renderizar html

app.use(express.static(path.join(__dirname, "public")));//faz uma referencia ao caminho para public para usar o css sem caminhos longos
app.use('/Blog_leonardo', index);
app.use('/', index);
app.use('/about', index);

app.listen(port,() =>{
    console.log("Funcionando")
    });