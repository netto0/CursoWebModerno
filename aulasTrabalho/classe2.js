class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // O Super serve para trazer do protótipo da classe os seus atributos, como se fosse invocado o constructor da classe Protótipo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}


const avo = new Avo('Pereira')
console.log(avo.profissao)

const pai = new Pai()
console.log(pai.profissao)

const filho = new Filho
console.log(filho.profissao)
