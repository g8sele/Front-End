//DOM

const lampada = document.querySelector('#lampadapagada')
const btl = document.querySelector('#btLigar')
const btd = document.querySelector('#btDesligar')
const quebrar = document.querySelector('#lampadapagada') 

//evento
btl.addEventListener('click',ligar)
btd.addEventListener('click',desligar)
quebrar.addEventListener('click',quebrada)


//funções
function ligar(params) {
    lampada.src="image/acesa.gif"
}

function desligar(params) {
    lampada.src="image/apagada.gif"
}

function quebrada(params) {
    lampada.src="image/quebrada.png"
}
