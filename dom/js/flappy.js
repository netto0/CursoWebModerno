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

function parDeBarreiras(alturaDoJogo, gapBarreiras, xAtual) {
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
// Área de Teste

const elemento1 = new parDeBarreiras(700,300,100)
console.log(elemento1.getX())
const telaDoJogo = document.querySelector('[wm-flappy]')
telaDoJogo.appendChild(elemento1.elemento)
