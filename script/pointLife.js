function mainClick(event) {
    if (event.target === event.currentTarget) {
        console.log("foi clicado na div principal")
    }
}

function addPoint(event, point) {
    event.stopPropagation()

    console.log("clicado no alvo")

    const pontosText = document.getElementById("pontos")

    const pontos = Number(pontosText.innerHTML) + point

    pontosText.innerHTML = pontos
}