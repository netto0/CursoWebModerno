// Criar uma função que receba um array de números e retorne o menor número desse array.

eMenor = (acumulador, atual) => {if (atual < acumulador) {return atual}else return acumulador}
const menorNumero = array => array.reduce(eMenor)

console.log(menorNumero([5, -15, 50, 3]))