/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function tipoTriagulo (lado1, lado2, lado3) {
    let tipo = ''
    if (lado1 == lado2 == lado3) {
        tipo = 'Equilátero'
    } else if (lado1 == lado2 && lado1 != lado3 || lado2 == lado3 && lado2 != lado1 || lado1 == lado3 && lado1!= lado2) {
        tipo = 'Isóceles'
    } else if (lado1 != lado2 != lado3) {
        tipo = 'Escaleno'
    }
    return `O triângulo informado é do tipo ${tipo}`
}

console.log(tipoTriagulo(3,2,2))