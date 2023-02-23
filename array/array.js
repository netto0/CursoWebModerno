console.log(typeof Array, typeof new Array, typeof []) // Function, Object, Object

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Criando array com operador new
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Quando referenciamos um indice que não existe no array ele só retorna undefined e não um erro

aprovados[3] = 'Paulo' // Inserindo/Alterando um elemento de um array pelo índice
aprovados.push('Abia') // Inserindo um novo elemento acrescentando um novo índice ao array
console.log(aprovados.length) // Método length mostra a quantidade de elementos do array

aprovados[9] = 'Rafael' // Quando inserimos um item algumas casas após a última, as casas entre a última e a nova são contadas como undefined mas entram na contagem do length 
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // Essas casas são undefined
console.log(aprovados)

aprovados.sort()
console.log(aprovados) // O método sort organiza os itens do array em ordem alfabética ou numérica, porém ele altera o array original, o que pode não ser interessante em alguns casos

delete aprovados[1] // O método delete vai apenas excluir o item do índice referenciado, sem alterar a ordem original do array, apenas o trocando por undefined
console.log(aprovados[1]) 
console.log(aprovados[2]) // Desta forma o índice 2 por exemplo continuará sendo o mesmo que era antes da alteração

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1) // O método splice recebe primeiramente o índice inicial da alteração, como 2º parâmetro recebe a quantidade de índices a ser excluídos, como 3º os itens a serem inseridos
console.log(aprovados)

