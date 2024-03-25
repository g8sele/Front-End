//DOM

const real = document.querySelector('#real')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//EVENTOS

calcular.addEventListener('click', ()=>{
    valor = real.value
    dolar =  valor/4.97
    resultado.textContent = `O valor em US$ ${dolar.toFixed(2)}`
})