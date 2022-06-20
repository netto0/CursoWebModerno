// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.

const areaDoTriangulo = (base, altura) => ((base*altura) / 2).toFixed(2)
console.log(areaDoTriangulo(9.25, 13.1))