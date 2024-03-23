//DOM

const Horas = document.querySelector('#Horas')
const Minutos = document.querySelector('#Minutos')
const Segundos = document.querySelector('#Segundos')
const Dia = document.querySelector('#Dia')
const Mes = document.querySelector('#Mes')
const Ano = document.querySelector('#Ano')

//Evento
setInterval(relogio,1000);

//Função

function relogio() {
    let hoje = new Date();
    let hr = hoje.getHours();
    let min = hoje.getMinutes();
    let seg = hoje.getSeconds();

    let date = hoje.getDate();
    let mes = hoje.getMonth() + 1;
    let ano = hoje.getFullYear();

    if (hr<10) {
        hr="0"+hr
    }
    
    if (min<10) {
        min="0"+min
    }

    if (seg<10) {
        seg="0"+seg
    }

    if (date < 10) {
        date = '0' + date
    }

    if (mes < 10) {
        mes = '0' + mes
    }

    if (ano < 10) {
        ano = '0' + ano
    }

    Horas.textContent = hr
    Minutos.textContent = min
    Segundos.textContent = seg 
    Dia.textContent = date
    Mes.textContent = mes
    Ano.textContent = ano
    
} 
