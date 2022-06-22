// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.

function soConsoantes(string){
    const vogais = ['a','e','i','o','u']
    const stringSeparada = string.split('')
    let semVogal = []
    for (letra of stringSeparada){
        if (vogais.includes(letra)){}
        else{ semVogal.push(letra)}
    } 
    return semVogal.join("")
}

console.log(soConsoantes('Fundamentos'))
