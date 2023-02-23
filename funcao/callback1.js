const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((item,indice,array) => console.log(item,indice,array)) // o forEach fornece como parâmetro para a função indicada: 1: Item, 2: Indice, 3: Array

/*  forEach é uma função presente em qualquer array do JS e recebe uma função como parâmetro
    o forEach percorre por todos elementos de um array assim como um laço for, porém, a cada elemento que ele passa
    a função passada para ele como parâmetro é invocada (por isso o nome callback, pois ele chama a mesma função de volta quando o evento especificado ocorre)  */
