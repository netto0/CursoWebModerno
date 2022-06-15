const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas? (utilizando a função reduce)

const eBolsista = (acumulador,atual) => acumulador&&atual // A cada volta do laço a função irá conferir se os 2 itens sao true
const resultado = alunos.map(a => a.bolsista).reduce(eBolsista)
console.log(resultado)

// Desafio 2: Algum aluno é bolsista?

const ouBolsista = (acumulador,atual) => acumulador||atual // A cada volta do laço a função irá conferir se um dos 2 itens sao true
const resultado2 = alunos.map(a => a.bolsista).reduce(ouBolsista)
console.log(resultado2)