const loginUser = (nome, senha) => {
        return new Promise((resolve, reject) => {
            const error = false
            if (error) {
                reject('Mensagem de Erro')
            }
            console.log('Executando loginUser')
            resolve({ nome, senha })
        })
}

const primeiraLetra = (nome) => {
    return new Promise((resolve, reject) => {
        resolve(nome[0])
    })
}
loginUser('Carlitos','abcd1234').then((dados) => primeiraLetra(dados))