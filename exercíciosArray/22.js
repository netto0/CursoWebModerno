// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
// gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
// sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
// não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

function geraNum(min, max) {
    return Math.random() * (max - min) + min;
  }

function funcaoDaSorte(numero){
    const gerado = geraNum(1,10).toFixed(0)
    if (numero == gerado){
        return `Parabéns! O número sorteado foi o ${numero}`
    } else {
        return `Que pena! O número sorteado foi o ${gerado}`
    }
}

console.log(funcaoDaSorte(6))