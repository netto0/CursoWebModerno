//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

function idadeEmDias(anos) {
    return anos * 365
}

console.log(idadeEmDias(70))
// ====
const idadeEmDias2 = anos => anos * 365
console.log(idadeEmDias2(22))