// Enquanto comparamos strings de números de 1 a 9 eles reagem como o esperado
console.log('1'>'2')
console.log('1'>'1')
console.log('2'>'1')
console.log('4'>'2')
// Mas se tentamos comparar strings de números maiores que 9 a comparação irá validar apenas o primeiro numero da cadeia (no caso do 10 ela só leria o 1 por exemplo)
console.log('2'>'12')
console.log('5'>'42')
console.log('3'>'29')
console.log('12'>'17') // Quando os 2 primeiros digitos da comparação são iguais aí sim ela compara o segundo

// Não é uma boa ideia comparar números em forma de string!
