// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
// bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
// exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
// é bissexto ou não.

function eBissexto(ano){
    quatrocentos = ano % 400 == 0
    cem = ano % 100 == 0
    quatro = ano % 4 == 0
    if (quatrocentos) {
        return true
    } else if (cem) {
        return false
    } else if (quatro) {
        return true
    } else {
        return false
    }
}

console.log(eBissexto(2100))