const soma = function(a,b) { // Armazenando função anônima em uma constante
    return `Soma: ${a + b}`
}
console.log(soma(2,3))

const imprimirResultado = function(a,b,operacao = soma) { // Definindo a função soma como parametro padrão
    return `${operacao.name}: ${operacao(a,b)}`
}

console.log(imprimirResultado(6,9))
console.log(imprimirResultado(6,9,soma))
console.log(imprimirResultado(6,9, function(a,b) { // Definindo uma função dinamicamente no parametro
    return a - b
}))

console.log(imprimirResultado(7,3, (a,b) => a * b )) // Definindo função arrow dinamicamente no parametro
console.log(imprimirResultado(8,4, function subtracao(a,b) {
    return a - b
}))

