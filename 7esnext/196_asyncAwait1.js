function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))
    

function retornarValor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10),1500)
    })
}

async function executar() {
    let valor = await retornarValor() // Primeiro o cód vai esperar a função retornarValor definir a variável p/ só assim seguir
    console.log(`Async/Await...${valor}`)
    await esperarPor(1500) // agora o cód irá esperar a execução do esperarPor para dar prosseguimento
    console.log(`Async/Await...${valor+1}`)
    esperarPor(2000) // Aqui como não temos o await, o código executou essa função assíncronamente
    console.log('Isso deve aparecer 2 segundos após o await 11') // Fazendo assim que a impressão não aguardasse os 2 segundos que deveria
    return valor + 3 
}

console.log(executar()) // Ao tentar acessar o return desta maneira o return será "Promise { <pending> }"

executar().then(console.log) // Para acessá-lo for da async function podemos utilizar o .then