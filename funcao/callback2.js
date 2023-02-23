const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(item => item < 7) 
/* A função filter também é uma função padrão das arrays de JS que percorre pela array. 
Ela recebe outra função como parâmetro e caso essa função indicada no parâmetro retorne true para o item em questão, esse item será adicionado a um novo array de itens filtrados.
*/ 

console.log(notasBaixas2)

