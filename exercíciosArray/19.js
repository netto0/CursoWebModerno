// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

const soma = (acumulador, atual) => acumulador + atual
const media = (total, length) => total / length

function calcularMedia(array){
    total = array.reduce(soma)
    resultado = media(total, array.length)
    return resultado
}

console.log(calcularMedia([1, 2, 3, 4, 5]))