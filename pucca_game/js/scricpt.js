const pucca =  document.querySelector('.pucca')

const jump = () => {
    pucca.classList.add('jump');

    setTimeout(() => {
        pucca.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    console.log('loop')
    const garu = garu.offsetLeft;
    const pucca = window.getComputedStyle(pucca).bottom.replace('px','');

    console.log(pucca);

    if (garu <= 120 && garu > 0 && pucca < 80) { 
        
        garu.style.animation = 'none';
        garu.style.left = `${garu}px`;

        pucca.style.animation = 'none';
        pucca.style.left = `${pucca}px`;

        pucca.src = 'img/morreu.gif'
        pucca.style.width = '150px'
        pucca.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
