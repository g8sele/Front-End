//DOM
const animes = document.querySelector('#animes')
const onepiece = document.querySelector('#onepiece')
const bleach = document.querySelector('#bleach')
const alice = document.querySelector('#alice') 
const death = document.querySelector('#death') 
const voltar = document.querySelector('#voltar') 

//evento
onepiece.addEventListener('click',mudar)
bleach.addEventListener('click',mudarUm)
alice.addEventListener('click',mudarDois)
death.addEventListener('click',mudarTres)
voltar.addEventListener('click',inicio)

//funções
function mudar(params) {
    animes.src="images/one_piece_liveaction.jpg"
}

function mudarUm(params) {
    animes.src="images/Bleach_(filme_de_2018)_poster.png"
}

function mudarDois(params) {
    animes.src="images/alice_in_bordeland.jpg"
}

function mudarTres(params) {
    animes.src="images/live_action_death.jpg"
}

function inicio(params) {
    animes.src="images/QUAL O MELHOR ANIME LIVE ACTION .png"
}