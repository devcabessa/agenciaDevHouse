const express = require("express");
const app = express()
app.use(express.static('public'))

//Criar um servidor é muito facil com o express 
app.listen(3021, () => console.log("SERVIDOR RODANDO"));



//CRIANDO ROTAS 

/* app.get("/", (req, res) => {
    res.send("Seja bem vindo")
}) */

//ROTAS EM ARQUIVOS
    /*GERALMENTE SERA ASSIM QUE VAMOS LEVAR NOSSO CLIENTE A NOSSAS PAGINAS NO NOSSO SITE*/


app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html")
})

app.get("/manutencao", (req, res) => {
    res.sendFile(__dirname + "/views/manutencao.html")
})

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})



