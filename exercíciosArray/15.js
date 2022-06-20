// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

array = [10,70,22,43]
array2 = [1,2,3,4]

valorEIndicePar = (valor,indice) => indice % 2 == 0 && valor % 2 == 0

function receberSomenteOsParesDeIndicesPares(array = Array) {
    final = array.filter(valorEIndicePar)
    return (final)
}

console.log(receberSomenteOsParesDeIndicesPares(array))
