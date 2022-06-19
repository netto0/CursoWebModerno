// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array

lengthVálido = array => array.length > 2
function receberPrimeiroEUltimoElemento(array){
    arraySuporte = []
    primeiroElemento = array[0]
    ultimoElemento = array[array.length - 1]
    if (lengthVálido(array)){
        arraySuporte.push(primeiroElemento,ultimoElemento)
    } else {
        return 'Array Inválido'
    }
    return arraySuporte
}

teste = ['ana','carlos','bia','pedro']

console.log(receberPrimeiroEUltimoElemento(teste))