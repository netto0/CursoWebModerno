function criarElemento(tag, classe) {
    const elemento = document.createElement(tag)
    elemento.className = classe
    return elemento
}

function Barreira(invertida=false) {
    this.elemento = criarElemento('div','barreira')
    const corpo = criarElemento('div','corpo')
    const borda = criarElemento('div','borda')
    this.setTamanho = tamanho => {corpo.style.height = `${tamanho}px`} 

    if (invertida) {
        this.elemento.appendChild(corpo)
        this.elemento.appendChild(borda)
    } else {
        this.elemento.appendChild(borda)
        this.elemento.appendChild(corpo)
    }
}

function ParDeBarreiras(alturaDoJogo, gapBarreiras, xAtual) {
    this.elemento = criarElemento('div','parDeBarreiras')
    this.barreiraSuperior = new Barreira(true)
    this.barreiraInferior = new Barreira(false)

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = xAtual => this.elemento.style.left = `${xAtual}px` 
    
    
    this.setX(xAtual)// fijsdifohsdgfhsghidofghdfio
    
    const tamanhoSuperior = Math.random() * (alturaDoJogo - gapBarreiras)
    this.barreiraSuperior.setTamanho(tamanhoSuperior) // Assim
    this.barreiraInferior.setTamanho(alturaDoJogo-tamanhoSuperior-gapBarreiras)
    
    this.elemento.appendChild(this.barreiraSuperior.elemento)
    this.elemento.appendChild(this.barreiraInferior.elemento)
    // console.log(this.getX())
}

function ConjuntoBarreiras(altura, largura, gapBarreiras, xInicial, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, gapBarreiras, largura + xInicial),
        new ParDeBarreiras(altura, gapBarreiras, largura + xInicial * 2),
        new ParDeBarreiras(altura, gapBarreiras, largura + xInicial * 3),
        new ParDeBarreiras(altura, gapBarreiras, largura + xInicial * 4),
    ]

    let passo = 3

    this.animar = () => {
        this.pares.forEach(par => par.setX(par.getX()-passo))
    }
}

// Área de Teste

const elemento1 = new ConjuntoBarreiras(700,1000,300,400,'funcao')
const telaDoJogo = document.querySelector('[wm-flappy]')

function animar() {
    elemento1.animar()
}
elemento1.pares.forEach(par => telaDoJogo.appendChild(par.elemento))
