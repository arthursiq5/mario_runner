const board = document.querySelector('.game-board')
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const restartBtn = document.getElementById('restart')
var jumping = false
var fimDeJogo = false

const restart = () => {
    fimDeJogo = false
    pipe.style.left = 'initial'
    pipe.style.right = '-80px'
    mario.style.bottom = '0'
    mario.src = './images/mario.gif'
    board.classList.remove('game-over')
    jumping = false
}

const jump = () => {
    if (jumping && !fimDeJogo) return
    mario.classList.add('jump')
    jumping = true
    setTimeout(() => {
        mario.classList.remove('jump')
        jumping = false
    }, 500)
}

const loop = setInterval(() => {
    if (fimDeJogo) return;
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition >= 0 && marioPosition < 80) {
        board.classList.add('game-over')

        pipe.style.left = `${pipePosition}px`

        mario.style.bottom = `${marioPosition}px`
        mario.src = './images/game-over.png'

        fimDeJogo = true
    }
}, 10)

document.addEventListener('keydown', jump)
restartBtn.addEventListener('click', restart)
restart()