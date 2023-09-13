//DOM

const lampada = document.querySelector('#lampadapagada')
const btl = document.querySelector('#btLigar')
const btd = document.querySelector('#btDesligar')

//evento

btl.addEventListener('click',ligar)
btd.addEventListener('click',desligar)

//funções
function ligar(params) {
    lampada.src="imagens/acesa.gif"
}

function desligar(params) {
    lampada.src="imagens/apagada.gif"
}
