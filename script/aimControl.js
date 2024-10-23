// variavel do div 
const aim = document.getElementById('aim')

function mouseMove(event) {
    console.log ("mouse se movendo")

    // largura e altura do aim
    const aimWidth = aim.offsetWidth
    const aimHeight = aim.offsetHeight


    // largura e altura do navegador
    const maxX = window.innerWidth - aimWidth /2
    const maxY = window.innerHeight - aimHeight /2


    // posições do mous
    let x = event.clientX
    let y = event.clientY


    // limites para eixo x
    if (x > maxX) {
        x = maxX
    }

    if (x < aimWidth / 2) {
        x = aimWidth / 2
    }


    // limites para eixo y
    if (y > maxY) {
        y = maxY
    }

    if (y < aimHeight / 2) {
        y = aimHeight / 2
    }


    // mover o peixe de posição
    aim.style.left = x - aimWidth / 2 + 'px'
    aim.style.top = y - aimHeight / 2 + 'px'
}


// event listener
document.addEventListener('mousemove', mouseMove)