// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

string = 'A sorte favorece os audazes'



function contarCaractere(caractere, string){
    const separar = string => string.split('')
    const dividido = separar(string)
    const separado = dividido.filter(valor => valor === caractere)
    contado = separado.length
    return contado
}

console.log(contarCaractere("c", "Conhece-te a ti mesmo"))