console.log(soma(2,3)) /* Function declaration pode ser chamada antes mesmo dela ser definida no cód,
                          pois o interpretador carrega primeiro todas as funcoes declaradas desta forma
                          antes de executar o cód */  

// function declaration
function soma(x, y) {
    return x + y
}

// function expression 
const sub = function (x, y) {
    return x - y
}

console.log(sub(7,4))

// named function expression (A menos utilizada das 3, porém útil para debug)
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(6,5))

// Já a "function expression" e "named function" expression só podem ser chamadas após ser declarada no código 