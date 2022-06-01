const mario = document.querySelector('.mario')
var jumping = false

const jump = () => {
    if (jumping == true) return
    mario.classList.add('jump')
    jumping = true
    setTimeout(() => {
        mario.classList.remove('jump')
        jumping = false
    }, 500)
}

document.addEventListener('keydown', jump)
