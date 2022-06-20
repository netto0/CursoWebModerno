// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

const eNum = valor => !isNaN(valor)

valores = ["Javascript", 1, "3", "Web", 20]

function filtrarNumeros(array = Array){
    resultado = array.filter(eNum)
    return resultado
}

console.log(filtrarNumeros(valores))