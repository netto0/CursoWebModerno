// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

array = [1,2,3,4,5,6]

const soma = (ac,atual) => ac + atual
const somaArray = array => array.reduce(soma)

console.log(somaArray(array))