// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function compararNumeros(a, b) { // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return a - b;
  }
const arrayDeNumeros = ['12', '16', '1', '5']
const ordenado = arrayDeNumeros.sort(compararNumeros)
console.log(ordenado)
console.log(ordenado[ordenado.length - 2])