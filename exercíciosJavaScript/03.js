/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

function exponenciacao (base, expoente) {
    let resultado = base ** expoente
    return `${base} ^ ${expoente} = ${resultado}`
}

console.log(exponenciacao(3,2))