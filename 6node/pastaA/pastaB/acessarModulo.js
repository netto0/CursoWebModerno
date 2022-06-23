const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') // Só é informado o nome da pasta e dentro dela o interpretador busca pelo arquivo index.js

const c = require('./pastaC/index')
console.log(c.ola2)