//dom = objetos para utilizar

const entrada_cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = '68a3fbd9620a4e683f3ea2028d5482ba'

//evento
botao.addEventListener('click', buscacidade)

//funcao
async function buscacidade() {
    cidade = entrada_cidade.value
    //alert(cidade)
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())

    console.log()
}