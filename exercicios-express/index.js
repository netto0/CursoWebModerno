const express = require("express");
const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario")
const produtoApi = require("./api/produto")

const app = express();
const bodyParser = require("body-parser");

produtoApi(app, 'com param!')
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(saudacao("Netto"));

app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  // let corpo = ''
  // req.on('data', function(parte) {
  //     corpo += parte
  // })

  // req.on('end', function() {
  //     res.send(corpo)
  // })
  res.send(req.body);
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get("/opa", (req, res, next) => {
  console.log("Durante...");
  res.json([
    { id: 7, name: "aaaa", position: 1 },
    { id: 24, name: "bbbb", position: 2 },
    { id: 71, name: "cccc", position: 3 },
  ]);
  next();
});
// res.json({
//     name: 'teste',
//     price: 9.99
// })

// res.send("Estou Bem")

app.use("/opa", (req, res) => {
  console.log("Depois...");
});

app.listen(3000, () => {
  console.log("Backend Executando...");
});
