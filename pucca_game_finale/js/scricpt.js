const pucca = document.querySelector('.pucca');
const garu = document.querySelector('.garu');
const jumpSound = document.getElementById('jumpSound');
const finalJumpCountDisplay = document.getElementById('finalJumpCount');
const gameOverScreen = document.getElementById('gameOverScreen');
const restartButton = document.getElementById('restartButton');

let jumpCount = 0;
let collisionOccurred = false;
let jumping = false;

const jump = () => {
    if (collisionOccurred || jumping) {
        return;
    }

    jumping = true;
    pucca.classList.add('jump');
    jumpSound.currentTime = 0; 
    jumpSound.play();
    
    jumpCount++;

    setTimeout(() => {
        jumping = false;
        pucca.classList.remove('jump');
    }, 500);
}

const showGameOver = () => {
    gameOverScreen.style.display = 'block';
    finalJumpCountDisplay.textContent = jumpCount;
}

restartButton.addEventListener('click', () => {
    location.reload();
});

const loop = setInterval(() => {
    const garuPosicao = garu.offsetLeft;
    const puccaPosicao = parseInt(window.getComputedStyle(pucca).bottom);

    if (garuPosicao <= 150 && garuPosicao > 0 && puccaPosicao <= 80) {
        garu.style.animation = 'none';
        pucca.style.animation = 'none';

        garu.style.left = `${garuPosicao}px`;
        pucca.style.left = `${puccaPosicao}px`;

        pucca.src = 'img/morreu.gif';
        pucca.style.width = '100px';
        pucca.style.marginLeft = '35px';
        pucca.style.bottom = '-30px';

        collisionOccurred = true;

        clearInterval(loop);

        showGameOver();
    }
}, 10);

document.addEventListener('keydown', jump);
