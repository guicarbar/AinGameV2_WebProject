// variavel do peixe
const icon = document.getElementById('icon')

function mouseMove(event) {
    console.log ("icon movendo")

    // largura e altura do peixe
    const iconWidth = icon.offsetWidth
    const iconHeight = icon.offsetHeight

    // largura e altura do navegador
    const maxX = window.innerWidth - iconWidth
    const maxY = window.innerHeight - iconHeight

    // posições do mous
    let x = event.clientX;
    let y = event.clientY

    // limite para eixo x
    if (x > maxX) {
        x = maxX
    }

    // limite para eixo y
    if (y > maxY) {
        y = maxY
    }

    // mover o peixe de posição
    icon.style.left = x - 32 + 'px'
    icon.style.top = y - 32 + 'px'
}

// event listener
document.addEventListener('mousemove', mouseMove)