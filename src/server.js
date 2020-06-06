const express = require("express")
const server = express()

//  configura pasta publica
server.use(express.static("public"))


//  utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//  configurar caminhos da minha aplicação
//  página inicial
//  req: Requisição
//  res: Resposta
server.get("/", (req, res) => {
  return res.render("index.html", {title: "Um título"}) // respondendo a requisição
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html") // respondendo a requisição
})

server.get("/search", (req, res) => {
  return res.render("search-results.html") // respondendo a requisição
})

// ligar o servidor
server.listen(3000) // dunção que iraficar ouvindo a porta 3mil
