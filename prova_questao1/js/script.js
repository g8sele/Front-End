//dom
const capa = document.querySelector ('#capa')
const Crepusculo = document.querySelector ('#Crepusculo')
const Deadpool = document.querySelector ('#Deadpool')
const Exhuma = document.querySelector ('#Exhuma')
const HarryPotter = document.querySelector ('#HarryPotter')
const Zona = document.querySelector ('#Zona')
const VOLTAR = document.querySelector ('#VOLTAR')

//evento
Crepusculo.addEventListener('click', filme1)
Deadpool.addEventListener('click', filme2)
Exhuma.addEventListener('click', filme3)
HarryPotter.addEventListener('click', filme4)
Zona.addEventListener('click', filme5)
VOLTAR.addEventListener('click', voltar)


//funcao
function filme1 (params) {
    capa.src="images/crepusculo.jpg"
    document.querySelector('#texto').textContent = 'The Twilight Saga é uma série de cinco filmes, dos gêneros fantasia e romance, lançados entre 2008 e 2012, pela Summit Entertainment, baseados nos quatro romances da série Twilight, da autora norte-americana Stephenie Meyer. Os filmes estrelam Kristen Stewart, Robert Pattinson e Taylor Lautner.'
}

function filme2 (params) {
    capa.src="images/deadpool_ver10.jpg"
    document.querySelector('#texto').textContent = 'Wade Wilson é um ex-agente especial que passou a trabalhar como mercenário. Seu mundo é destruído quando um cientista maligno o tortura e o desfigura completamente. O experimento brutal transforma Wade em Deadpool, que ganha poderes especiais de cura e uma força aprimorada.'
}

function filme3 (params) {
    capa.src="images/exhuma.jpg"
    document.querySelector('#texto').textContent = 'Exhuma é um filme sul-coreano de terror sobrenatural de 2024 escrito e dirigido por Jang Jae-hyun e estrelado por Choi Min-sik , Kim Go-eun , Yoo Hae-jin e Lee Do-hyun . O filme inclui mistério e elementos ocultos, e segue o processo de escavação de uma sepultura sinistra, que desencadeia consequências terríveis enterradas embaixo dela.'
}

function filme4 (params) {
    capa.src="images/harry potter.jpg"
    document.querySelector('#texto').textContent = 'Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.'
}

function filme5 (params) {
    capa.src="images/zona de risco.jpg"
    document.querySelector('#texto').textContent = 'Uma equipe da Força Delta é emboscada em território inimigo. Sem querer abandoná-los, a única esperança de um oficial é um piloto de drone da Força Aérea que pode ser seus olhos durante uma batalha brutal de 48 horas.'
}

function voltar (params) {
    capa.src="images/QUAL O MELHOR ANIME LIVE ACTION .png"
    document.querySelector('#texto').textContent = 'Veja os filmes que separamos para você!'
    
}

