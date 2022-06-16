Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i],i,this)
    }
    return acumulador    
}

soma = (a,b) => a+b
array = [1,2,3,4,5,6]
console.log(array.reduce2(soma))

// Array.prototype.reduce2 = function(callback, valorInicial) {
//     // const indiceInicial = valorInicial ? 0 : 1
//     const indiceInicial = 0
//     let acumulador = valorInicial || this[0]
//     for (let i = indiceInicial; i < this.length; i++) {
//         acumulador = callback(acumulador, this[i], i, this)
//     }
//     return acumulador
// }

// const soma = (total, valor) => total+valor
// const nums = [1,2,3,4,5,6]
// console.log(nums.reduce2(soma))