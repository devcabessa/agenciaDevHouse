const express = require("express");
const app = express()
//Criar um servidor é muito facil com o express 
app.listen(3021, () => console.log("SERVIDOR RODANDO"));

//CRIANDO ROTAS 
app.get("/", (req, res) => {
    res.send("Seja bem vindo")
})

//ROTAS EM ARQUIVOS
    /*GERALMENTE SERA ASSIM QUE VAMOS LEVAR NOSSO CLIENTE A NOSSAS PAGINAS NO NOSSO SITE*/
app.get("/manutencao", (req, res) => {
    res.sendFile(__dirname + "/views/manutencao.html")
})