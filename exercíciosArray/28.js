// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.

num = "1234"
console.log(num.length)

function filtrarPorQuantidadeDeDigitos(array, qtdDigito){
    const resultado = []
    for(numero of array){
        if(String(numero).length == qtdDigito){
            resultado.push(numero)
        }
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))