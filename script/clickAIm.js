function target(event) {
    // verificando a existência do click
    console.log("mouse marcando")

    // pegando a div total
    const area = document.getElementById("container")

    // criar a div
    const aimTarget = document.createElement("div")

    // adicionando a classe de estilo para o target aim
    aimTarget.classList.add("click_mark")

    // append no game
    area.appendChild(aimTarget)

    // largura e altura do aim
    const aimTargetWidth = aimTarget.offsetWidth
    const aimTargetHeight = aimTarget.offsetHeight

    // largura e altura do navegador
    const maxTX = window.innerWidth - aimTargetWidth /2
    const maxTY = window.innerHeight - aimTargetHeight /2   

    // pegando a posição do mouse
    let x = event.clientX
    let y = event.clientY

    // limite para eixo x
    if (x > maxTX) {
        x = maxTX
    }

    if (x < aimTargetWidth /2) {
        x = aimTargetWidth / 2
    }

    // limite para eixo y
    if (y > maxTY) {
        y = maxTY
    }

    if (y < aimTargetHeight) {
        y = aimTargetHeight /2
    }

    // mover o target de posição
    aimTarget.style.left = x - aimTargetWidth / 2 + 'px'
    aimTarget.style.top = y - aimTargetHeight / 2 + 'px'

    setTimeout(() => {
        aimTarget.remove()
    }, 500)
}

// event listener
document.addEventListener('click', target);
