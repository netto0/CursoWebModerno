const moduloA = require('./moduloA') // seria equivalente ao "import" no python // "." Significa que está no mesmo caminho que o arq atual
const moduloB = require('./moduloB.js')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)