let dobro = function (a) {
    return 2 * a 
}

dobro = (a) => {
    return 2 * a // Retorno explícito // a função arrow SEMPRE É UMA FUNÇÃO ANÔNIMA ( para chamá-la dps é preciso que seja armazenada em uma variável ou const )
}

dobro = a => 2 * a // Retorno implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá1'
}

console.log(ola())

ola = () => 'Olá2' // Função sem parametro
ola = _ => 'Olá3' // Tem Parametro "_" porém não precisa ser passado pelo usuario ja que o JS não impede

console.log(ola())
