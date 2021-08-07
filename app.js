/*FOI COLOCADO UM NPM NO NODEMON, LA NO PACKGE.JSON, PRA EXECUTAR O NODEMON MAIS RAPIDO*/

const express = require("express");
const app = express()

app.use(express.json()) /*para se comunicar o html com o node.js*/
app.use(express.urlencoded({extended: false})) /*vai "traduzir" as informaçoes trazidas do html*/
app.use(express.static('public'))

//Criar um servidor é muito facil com o express 
app.listen(3021, () => console.log("SERVIDOR RODANDO"));



//CRIANDO ROTAS 

/* app.get("/", (req, res) => {
    res.send("Seja bem vindo")
}) */

//ROTAS EM ARQUIVOS
    /*GERALMENTE SERA ASSIM QUE VAMOS LEVAR NOSSO CLIENTE A NOSSAS PAGINAS NO NOSSO SITE*/

app.get ("/contato", (req, res) => {
    res.sendFile(__dirname + "/views/contato.html" )

})
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


/*ROTA DE RECEBIMENTO DE INFORMAÇÕES, METODO POST*/

app.post("/receber-contato", (req, res) => {
    console.log(req.body /*body seria o corpo do html, no caso as informações mandadas pelo formulario*/)
    res.send("Contato Recebido")
})
