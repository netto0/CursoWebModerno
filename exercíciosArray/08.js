// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

const ePositivo = valor => valor >= 0
const eInteiro = valor => Number.isInteger(valor)


function multSemSinal(v1,v2) {
    if (ePositivo(v1) && eInteiro(v1) && ePositivo(v2) && eInteiro(v2)) {
        soma = 0
        for (let i = 1; i <= v2; i++){
            soma += v1
        }
    } else {
        return 'Entradas Inválidas'
    }

    return soma
}

console.log(multSemSinal(6.9,7))