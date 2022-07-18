/* Desafio: Encapsular a chamada de um arquivo em uma promise */
const fs = require('fs')
const path = require('path')

function lerArquivo(nomeArquivo) {
    return new Promise(resolve => {
        caminho = path.join(__dirname, nomeArquivo)
        fs.readFile(caminho,(erro,conteudo) => resolve(conteudo.toString())) // Neste caso o resolve atua como uma função recursiva
    })
}

lerArquivo('dados.txt')
    .then((conteudo) => conteudo.split('\n'))
    .then(dividido => console.log(dividido[1]))



// function exibirConteudo(erro, conteudo) {
//     console.log(conteudo.toString())
// }



// function lerArquivo(nome) {
    
//     return new Promise((resolve, reject) => {
//         erro = false
//         if (erro) {
//             reject('Algum erro')
//             return
//         }
//         const caminhoAtual = path.join(__dirname, nome)
//         console.log('Lendo Arquivo...')
//         resolve(fs.readFile(caminhoAtual,(conteudo) => conteudo.toString()))})
//     }


// lerArquivo('dados.txt').then()