// Variável do peixe
const icon = document.getElementById('icon')

let iconX = 0
let iconY = 0
let targetX = 0
let targetY = 0
let animationFrame

function animateMove() {
    const delayFactor = 0.1
    
    iconX += (targetX - iconX) * delayFactor
    iconY += (targetY - iconY) * delayFactor

    icon.style.left = iconX + 'px'
    icon.style.top = iconY + 'px'

    animationFrame = requestAnimationFrame(animateMove)
}

function mouseMove(event) {
    const iconWidth = icon.offsetWidth;
    const iconHeight = icon.offsetHeight

    const maxX = window.innerWidth - iconWidth / 2
    const maxY = window.innerHeight - iconHeight / 2

    let x = event.clientX
    let y = event.clientY

    if (x > maxX) {
        x = maxX
    }

    if (y > maxY) {
        y = maxY
    }

    targetX = x - iconWidth / 2
    targetY = y - iconHeight / 2
}

animateMove()

document.addEventListener('mousemove', mouseMove)
