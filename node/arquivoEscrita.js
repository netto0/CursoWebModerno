const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 4998,
    marca: 'Apple'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo gerado com sucesso! ') // Se err estiver nulo (ou seja, deu tudo certo, ele retornara a string)
})
