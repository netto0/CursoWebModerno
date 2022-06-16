const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota)) // Irá iterar sobre o array alunos e transformar em um array somente com as notas
console.log()
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual,indiceAtual,array) {
    console.log(`${acumulador} + ${atual} = ${acumulador+atual}`)
    return acumulador + atual
}, 10)

console.log(`\n${resultado}`)

/*
*  O método reduce recebe uma callback com 2 argumentos, o primeiro é o acumulador e o segundo é o valor atual.
*  Ele funciona da seguinte forma, na primeira volta do laço ele irá utilizar o valor inicial normalmente, 
*  a partir da segunda volta ele irá utilizar o retorno do laço anterior como valor inicial do laço atual. 
*  Se nenhum argumento for passado para a função callback ela automaticamente pegará os índices 0 e 1 do array 
*  Os parâmetros da função callback são passados da seguinte forma: 
*  .reduce(callback(acumulador, atual, indice, array){return}, valorInicial
*  Sendo que, se o valor inicial tiver sido definido na chamada da função ele será o acumulador na primeira volta do laço
*  e se o valor inicial não tiver sido definido, o acumulador será o 1º valor do array e o valor atual será o 2º
*/

console.log(alunos.map(a => a.nota).reduce(function(acumulador,atual){return acumulador},5))