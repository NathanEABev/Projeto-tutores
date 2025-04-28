//informações da direção

const abPSala = document.getElementById("atPopSala")
const PSala = document.getElementById("popSala")
const overlay1 = document.getElementById("overlay1")
const fechaSala = document.getElementById("fechaPop")
abPSala.addEventListener("click", function() {
    PSala.style.display = "flex"
    overlay1.style.display = "block"

    fechaSala.addEventListener("click", function() {
        PSala.style.display = "none"
    overlay1.style.display = "none"
    })
})