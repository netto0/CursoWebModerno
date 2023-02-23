const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último item do array
console.log(pilotos)

pilotos.push('Verstappen') // Insere após o último item do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro item do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Insere no primeiro índice do array
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar:
pilotos.splice(2,0,'Bottas', 'Massa') // (índice inicial, quantidade a ser excluída, itens a inserir)
console.log(pilotos)

// Remover:
pilotos.splice(3,1) // Remove 1 item a partir do índice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array a partir do índice indicado até o fim do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Novo array a partir do índice 1 até o índice 4 (sem incluir o índice 4)
console.log(algunsPilotos2)
