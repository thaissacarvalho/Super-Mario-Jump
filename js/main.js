const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameOver = document.querySelector('.hidden.over')
const btn = document.getElementById('button')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'images/game-over.png'
        mario.style.width = '10.88vh'
        mario.style.marginLeft = '50px'

        gameOver.classList.add('over')
        gameOver.classList.remove('hidden')

        btn.classList.add('over')
        btn.classList.remove('hidden')

        btn.addEventListener('click', function () {
            location.reload()
        })

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)