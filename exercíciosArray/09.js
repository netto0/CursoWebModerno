// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(valor, vezes) {
    array = []
    for (i = 0; i < vezes; i++){
        array.push(valor)
    }
    return array
}

console.log(repetir('código',2))