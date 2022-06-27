const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // Como instanciaNova retorna uma função é preciso invocá-la para ter acesso ao objeto gerado
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor , contadorB.valor ) // Por serem ligados ao mesmo endereço de memória os 2 contadores foram afetados

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // Como os objetos foram gerados pela função factory eles são independentes entre si
