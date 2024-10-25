import { addLife } from './life.js';

function booster(event ,boost) {
    event.stopPropagation()

    if (boost === true) {
        console.log("adcionando vida")
        addLife()
    }

    if (boost === false) {
        const pontosText = document.getElementById("pontos")
        const pontos = Number(pontosText.innerHTML) + 20
        pontosText.innerHTML = pontos

        console.log("adcionando diamantes")
    }
}