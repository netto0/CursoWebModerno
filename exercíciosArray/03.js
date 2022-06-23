// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.

function salarioTotal(horas, porHora) {
    const salarioBruto = horas * porHora
    const salarioLiquido = salarioBruto - salarioBruto * 0.3
    return `Salário igual a R$ ${parseFloat(salarioLiquido).toFixed(2).replace('.',',')}`
}

console.log(salarioTotal(180,60))