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
    
    
    this.setX(xAtual)
    
    this.sortearAltura = () => {
        const tamanhoSuperior = Math.random() * (alturaDoJogo - gapBarreiras)
        this.barreiraSuperior.setTamanho(tamanhoSuperior) // Assim
        this.barreiraInferior.setTamanho(alturaDoJogo-tamanhoSuperior-gapBarreiras)
    }

    this.sortearAltura()
    this.elemento.appendChild(this.barreiraSuperior.elemento)
    this.elemento.appendChild(this.barreiraInferior.elemento)
}

function ConjuntoBarreiras(altura, largura, gapBarreiras, xInicial, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, gapBarreiras, largura + xInicial),
        new ParDeBarreiras(altura, gapBarreiras, largura + xInicial + 400),
        new ParDeBarreiras(altura, gapBarreiras, largura + xInicial + 800),
        new ParDeBarreiras(altura, gapBarreiras, largura + xInicial + 1200),
    ]

    let passo = 3
    const meioDaTela = largura/2
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX()-passo)
            if (par.elemento.offsetLeft <= -160) {
                par.setX(1440)
                par.sortearAltura()
            } else if (par.getX() + passo >= (meioDaTela-180) && par.getX() < (meioDaTela-180)) {
                notificarPonto()
            }
            }
        )

    }

}

function progresso() {
    this.elemento = criarElemento('span','progresso')
    this.intervalo = 20
    let inicio = 0
    this.elemento.innerHTML = inicio
    this.notificarPonto = () => {
        ++this.elemento.innerHTML
    }

}

function passaro(alturaDoJogo) {
    let voando = false
    this.elemento = criarElemento('img','passaro')
    this.elemento.src = 'imgs/passaro.png'
    
    let alturaInicial = (alturaDoJogo/2)-(this.elemento.height/2) 
    this.elemento.style.bottom = `${alturaInicial}px`
    
    
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = (y) => this.elemento.style.bottom = `${y}px`
    
    window.onkeydown = e => {
        voando = true
        // console.log(1)
    }
    window.onkeyup = e => {
        voando = false
        // console.log(0)
    }
    
    this.animar = () => {
        const alturaMaxima = alturaDoJogo-this.elemento.clientHeight*4-2
        const alturaMinima = 0
        let novoY = this.getY() + (voando ? 5   : -5)
        // console.log(`Atual: ${novoY} | Máxima: ${alturaMaxima }`)
        if (novoY >= alturaMaxima) {
            novoY = alturaMaxima
        } else if (novoY <= alturaMinima) {
            novoY = alturaMinima
        }
        this.setY(novoY)
    }
    // this.getY = () => this.elemento.style.bottom
}

function sobrepostos(elementoA, elementoB) {
    let a = elementoA.getBoundingClientRect()
    let b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    
    return horizontal && vertical
}

function colidiram(passaro, grupoBarreiras) {
    let colidiu = false
    grupoBarreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.barreiraSuperior.elemento
            const inferior = parDeBarreiras.barreiraInferior.elemento
            colidiu = sobrepostos(passaro.elemento, superior) 
                || sobrepostos(passaro.elemento, inferior)
            } else {
            //    console.log("bateu")
        }
    }
    )
    return colidiu
}

// Área de Teste

function FlappyBird() {
    const telaDoJogo = document.querySelector('[wm-flappy]')
    const placar = new progresso()
    const altura = 700
    const largura = 1000
    const gap = 300
    const entreBarreiras = 400
    const notificar = placar.notificarPonto
    const conjunto = new ConjuntoBarreiras(altura,largura,gap,entreBarreiras,notificar)
    const passaro1 = new passaro(altura)
    
    conjunto.pares.forEach(par => telaDoJogo.appendChild(par.elemento))
    telaDoJogo.appendChild(placar.elemento)
    telaDoJogo.appendChild(passaro1.elemento)
    
    this.start= () => {
        const temporizador = setInterval(() => animar(),placar.intervalo)
        function animar() {
            conjunto.animar()
            passaro1.animar()
            if(colidiram(passaro1,conjunto)){
                clearInterval(temporizador)
            }
        }

    }
}

jogo = new FlappyBird()
jogo.start()







