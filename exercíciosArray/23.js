// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela

string = 'Me divirto aprendendo a programar'
const separar = string => string.split(' ')

function contarPalavras(string = String){
    const separado = separar(string)
    return separado.length
}
// console.log(separar(string).lenght)
console.log(contarPalavras(string))
