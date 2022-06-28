const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Forma assíncrona
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo) // É preciso usar o json.parse pois o conteudo retornado pela callback é em string
    console.log(`1 ${config.db.host}:${config.db.port}`)
})

// Forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(2,conteudo)

const config = require('./arquivo.json')
console.log(3, config.db)

// O retorno da forma assíncrona saiu fora de ordem pois ele não segurou o event loop para ser executado

fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteúdo da pasta:')
    console.log(arquivos)
})