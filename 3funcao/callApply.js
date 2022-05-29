function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco()) // Chamando a função desta forma ela utilizará o escopo global, se as variáveis nao fossem definidas no escopo global acima teríamos um erro
console.log(produto.getPreco())

const carro = { preco: 499990, desc: 0.20 }

console.log(getPreco.call(carro, 0.5, 'EU$')) // O método call passa o primeiro parametro o objeto em que será chamado e dps os parametros da função a ser chamada
console.log(getPreco.apply(carro,[0.1,'R$$'])) // Já no método apply a única diferença é que os parâmetros da função são passados em um array

// console.log(carro.getPreco()) //////// Para a função ser chamada assim ela precisa estar presente no objeto escolhido assim como no objeto "produto"