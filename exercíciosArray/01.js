// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

// Função comum
function cumprimentar(pessoa) {
    console.log('Olá, '.concat(pessoa,'!'))
}
cumprimentar('Maria')

// Arrow Function
cumprimentar1 = pessoa => console.log('Olá, '.concat(pessoa,'!'))
cumprimentar1('Fernanda')