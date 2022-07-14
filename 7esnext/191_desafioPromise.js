/* Desafio: Encapsular a chamada de um arquivo em uma promise */
const fs = require('fs')
const path = require('path')

function exibirConteudo(erro, conteudo) {
    console.log(conteudo.toString())
}



function lerArquivo(nome) {
    
    return new Promise((resolve, reject) => {
        erro = true
        if (erro) {
            reject('Algum erro')
            return
        }
        const caminhoAtual = path.join(__dirname, nome)
        console.log('Lendo Arquivo...')
        resolve(fs.readFile(caminhoAtual,exibirConteudo))})
    }


lerArquivo('dados.txt').then().catch(console.log)