const valor = 'Global'

function minhaFuncao() {
    console.log(valor)  
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// As funções em JS carregam consigo o local em que foram definidas, ou seja, a variável acionada será a variável presente no mesmo contexto da função.