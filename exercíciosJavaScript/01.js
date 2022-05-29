/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function operacao (valor1, valor2, operacao1 = ['+','-','*','/']) {
    let resultado = '' 
    if (operacao1 == '+') {
        resultado = valor1 + valor2
    } else if (operacao1 == '-') {
        resultado = valor1 - valor2 
    } else if (operacao1 == '*') {
        resultado = valor1 * valor2
    } else if (operacao1 == '/') {
        resultado = valor1 / valor2
    } else {
        return 'Operação inválida'
    }
    return `${valor1} ${operacao1} ${valor2} = ${resultado}`
}

console.log(operacao(2,3,'-'))
