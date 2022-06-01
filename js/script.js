const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
var jumping = false
var fimDeJogo = false

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
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition >= -10 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        fimDeJogo = true

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)
