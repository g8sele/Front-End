//dom
const respostanome = document.querySelector('#respostanome')
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const button = document.querySelector('#button')
const resultado = document.querySelector('#resultado')

//evento
button.addEventListener('click', ()=>{
    n1 = Number(nota1.value)
    n2 = Number(nota2.value)
    n3 = Number(nota3.value)

    soma = n1+n2+n3
    media = soma/3

    resultado.textContent = `${nome.value} a sua média final é ${media.toFixed(1)}`
})