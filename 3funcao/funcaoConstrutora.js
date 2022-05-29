function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo Privado
    let velocidadeAtual = 0 // Não pode ser acessado pelo usuário final

    // Método público
    this.acelerar = function () { // Pode ser utilizado pelo usuário final
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }

    }

    // Método Público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // Instanciando sem passar os parâmetros, o objeto receberá os parâmetros padrões (no caso 200 e 5)
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(500,50) // Instanciando objeto utilizando parâmetros personalizados
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// As funções construtoras em JS funcionam de forma similar as classes em python 