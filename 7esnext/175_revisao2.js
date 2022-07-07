// Arrow function
const soma = (a,b) => a + b // Quando n tem corpo "{}" o return é implicito
console.log(soma(2,3)) // se houver apenas 1 parâmetro não é necessário os parênteses

// Arrow function (this)
const lexico1 = () => console.log(this === exports) // O this de uma arrow function aponta para o objeto, já de uma função tradicional aponta para o módulo
const lexico2 = lexico1.bind({}) // .bind cria uma "função vinculada" que encapsula uma função orinal | Ao chamar a função vinculada quem é executada é a função encapsulada
function lexico3() {console.log(this === exports)}
lexico1()
lexico2()
lexico3()

// Parametro Default
function log(texto = 'Node') { // O parâmetro default irá entrar em ação quando o parâmetro estiver undefined, implicito ou explicitamente
    console.log(texto) // Caso o parâmetro seja passado como "null" assim ele permanecerá
}

log()
log('Sou Mais Forte')

// Operador rest
function total(...numeros) { // No contexto de parâmetro de funções, o operador rest funciona como um unificador, pois ele agrupa todos os argumentos passados em um array
    let soma = 0
    numeros.forEach(n => soma += n)
    return soma
}
console.log(total(2,3,4,5))
