const loginUser = (nome, senha, callback) => {
    setTimeout(() => {
    console.log('Executando loginUser...')
    console.log({nome, senha})
    callback({nome,senha})
},1500)
}

const trocaLetras = (nome, callback) => {
    setTimeout(() => {
    console.log('Executando trocaLetras...')
    alterado = nome.replace('e','1')
    console.log(alterado)
    callback(alterado)
}, 1500)
}

const primeiraLetra = (nome) => {
    setTimeout(() => {
    console.log('Executando primeiraLetra...')
    console.log(nome[0])
}, 1500)
}


loginUser('Pedro', '1234', (dados) => trocaLetras(dados.nome, (alterado) => primeiraLetra(alterado)))