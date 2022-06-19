// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

function simboloMais(numero){
    array = []
    for (i=0; i < numero; i++) {
        array.push('+')
    }
    // return ''.concat(array).replace(',','')
    junto = array.join('')
    return `"${junto}"`
}

console.log(simboloMais(6))