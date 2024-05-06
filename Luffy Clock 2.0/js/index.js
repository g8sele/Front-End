//relogio
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

//cronometro
//DOM
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

//FUNÇÃO
function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.innerHTML = formatTime(minutes);
      secondsEl.innerHTML = formatTime(seconds);
      millisecondsEl.innerHTML = formatMilliseconds(milliseconds);
    }
  }, 10);
  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "inline-block";
}

function resumeTimer() {
  isPaused = false;
  resumeBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isPaused = false;
  minutesEl.innerHTML = "00";
  secondsEl.innerHTML = "00";
  millisecondsEl.innerHTML = "000";
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `0${time}`.padStart(3, "0") : time;
}