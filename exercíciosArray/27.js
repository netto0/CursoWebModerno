// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir:


function inverter(objeto) {
    let separado = Object.entries(objeto)
    let inverte = []
    for (objeto of separado){
        inverte.push(objeto.reverse())
    }
    objetoInvertido = Object.fromEntries(inverte)
    return objetoInvertido
}

console.log(inverter({ a: 1, b: 2, c: 3}))