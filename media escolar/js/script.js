//dom
const respostanome = document.querySelector('#respostanome');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const button = document.querySelector('#button');
const resultado = document.querySelector('#resultado');

//evento
button.addEventListener('click', ()=>{
    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    let n3 = Number(nota3.value);

    let soma = n1 + n2 + n3;
    let media = soma / 3;

    resultado.textContent = `${respostanome.value}, sua média final é ${media.toFixed(1)}`;
});
