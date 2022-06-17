// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

const booleanOuNumber = valor => typeof (valor) == 'number' || typeof (valor) == 'boolean'

function contrario(valor) {
    if (booleanOuNumber(valor)) {
        if (typeof (valor) == 'number') {
            return -valor
        } else {
            return !valor
        }

    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof (valor)}`
    }

}

console.log(contrario(false))