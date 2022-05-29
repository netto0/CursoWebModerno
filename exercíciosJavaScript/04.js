/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function div(dividendo, divisor) {
    const resultado = (dividendo / divisor) 
    const resto = dividendo % divisor
    return `${dividendo} ÷ ${divisor} = ${resultado.toFixed(2)} | Resto: ${resto.toFixed(2)}`
}

console.log(div(14,3))