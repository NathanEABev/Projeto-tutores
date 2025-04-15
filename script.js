
//informações da direção

document.addEventListener("DOMContentLoaded", function () { 
    const checkboxes = document.querySelectorAll(".checkSerie"); 
    const saveButton = document.getElementById("serAlt");
    
    // Remove o atributo "checked" para evitar que sobrescreva o localStorage 
    
    checkboxes.forEach((checkbox) => { checkbox.removeAttribute("checked");

    // Garante que apenas o localStorage controle o estado 

    const savedState = localStorage.getItem(checkbox.id); 
    
    if (savedState !== null) { checkbox.checked = savedState === "true"; } });

    // Salva as alterações ao clicar no botão 

    saveButton.addEventListener("click", function () { 
        checkboxes.forEach((checkbox) => { localStorage.setItem(checkbox.id, checkbox.checked); }); alert("Alterações salvas!"); 
    }); 
});

//var cobre2 = document.getElementById("overlay1")
//var popSala = document.getElementById("popSala")
//
//var abrePop = document.getElementById("atPopSala")
//abrePop.addEventListener("click", function () {
//    cobre2.style.display = "block"
//    popSala.style.display = "flex"
//})







//select do Turno

const seleTurno = document.getElementById("sTurno")
var turnoAti = "seleTur"

seleTurno.addEventListener("change", function() {
    turnoAti = seleTurno.value
});

//select da serie

const seleSerie = document.getElementById("sTurma")
var serieAti = "seleSer"

seleSerie.addEventListener("change", function() {
    serieAti = seleSerie.value
});

//select do aluno

const seleAluno = document.getElementById("sAluno")
var alunoAti = "seleAlu"

seleAluno.addEventListener("change", function() {
    alunoAti = seleAluno.value
});

//select da primeira opção

const SelePrimeira = document.getElementById("primeira")
var priAti = "selePri"

SelePrimeira.addEventListener("change", function() {
    priAti = SelePrimeira.value
});

//select da segunda opção

const SeleSegunda = document.getElementById("segunda")
var segAti = "seleSeg"

SeleSegunda.addEventListener("change", function() {
    segAti = SeleSegunda.value
});

//select da terceira opção

const SeleTerceira = document.getElementById("terceira")
var terAti = "seleTer"

SeleTerceira.addEventListener("change", function() {
    terAti = SeleTerceira.value
});

//opções com base no turno

const opSerie = {
    tur1: ["A6", "B6", "C6", "A7", "B7", "C7", "A8", "B8", "C8", "A9", "B9", "C9"],
    tur2: ["A1", "B1", "C1", "A2", "B2", "C2", "A3", "B3", "C3"]
}

//opçõees com base na serie

const opAlunos = {
    A6: ["1", "2", "3"],
    B6: ["1", "2", "3", "4"],
    C6: ["1", "2", "3", "4", "5"],
    A7: ["1", "2", "3", "4", "5", "6"],
    B7: ["1", "2", "3", "4", "5", "6", "7"],
    C7: ["1", "2", "3", "4", "5", "6", "7", "8"],
    A8: ["1", "2", "3", "4", "5", "6", "7"],
    B8: ["1", "2", "3", "4", "5", "6"],
    C8: ["1", "2", "3", "4", "5"],
    A9: ["1", "2", "3", "4"],
    B9: ["1", "2", "3"],
    C9: ["1", "2", "3", "4"],
    A1: ["1", "2", "3", "4", "5"],
    B1: ["1", "2", "3", "4", "5", "6"],
    C1: ["1", "2", "3", "4", "5", "6", "7"],
    A2: ["1", "2", "3", "4", "5", "6", "7", "8"],
    B2: ["1", "2", "3", "4", "5", "6", "7"],
    C2: ["1", "2", "3", "4", "5", "6"],
    A3: ["1", "2", "3", "4", "5"],
    B3: ["1", "2", "3", "4"],
    C3: ["1", "2", "3"]
}

//padrão dos selects

seleSerie.disabled = true
seleAluno.disabled = true
const addAlu = document.getElementById('addAl')
addAlu.disabled = true
addAlu.addEventListener("click", addAlunos)

//habilitar select da serie

seleTurno.addEventListener("change", function() {
    if(turnoAti != "seleTur") {
        seleSerie.innerHTML = '<option value="seleSer" selected>Selecione a série</option>'
        seleSerie.disabled = false

        opSerie[turnoAti].forEach(item => {
            const numero = item.slice(1)
            const letra = item[0]

            const option = document.createElement("option")
            option.value = item
            option.textContent = `${numero}º ano ${letra}`
            seleSerie.appendChild(option)
        })
    } else {
        seleSerie.disabled = true
        seleAluno.disabled = true
        addAlu.disabled = true

        seleSerie.innerHTML = '<option value="seleSer" selected>Selecione a série</option>'
        seleAluno.innerHTML = '<option value="seleAlu" selected>Selecione seu nome</option>'
    }
})

//habilitar selects dos alunos

seleSerie.addEventListener("change", function() {
    if(serieAti != "seleSer") {
        seleAluno.innerHTML = '<option value="seleAlu" selected>Selecione seu nome</option>'
        seleAluno.disabled = false
        addAlu.disabled = false

        opAlunos[serieAti].forEach(item => {
            const option = document.createElement("option")
            option.value = item
            option.textContent = item
            seleAluno.appendChild(option)
        })
    } else {
        seleAluno.disabled = true
        addAlu.disabled = true

        seleAluno.innerHTML = '<option value="seleAlu" selected>Selecione seu nome</option>'
    }
})

//adicionar aluno

const cobre = document.getElementById("overlay")
const bAdd = document.getElementById("add")

function addAlunos() {
    cobre.style.display = "block"
    bAdd.style.display = "flex"

    const fecha = document.getElementById("fecha")
    fecha.addEventListener("click", function() {
        cobre.style.display = "none"
        bAdd.style.display = "none"
        document.getElementById("addNome").value = "";
    })

    const confirma = document.getElementById("confirma")
    confirma.addEventListener("click", function() {
        const novoAluno = document.getElementById("addNome").value.trim()
        if(!novoAluno) return
        
        cobre.style.display = "none"
        bAdd.style.display = "none"

        if(serieAti && serieAti !== "seleSer") {
            if (!opAlunos[serieAti].includes(novoAluno)) {
                opAlunos[serieAti].push(novoAluno)
            }

            seleAluno.innerHTML = '<option value="seleAlu" selected>Selecione seu nome</option>'
            opAlunos[serieAti].forEach(item => {
                const option = document.createElement("option");
                option.value = item;
                option.textContent = item;
                seleAluno.appendChild(option);
            })

            document.getElementById("addNome").value = "";
        }
    })
}

//captar erros e envio

const enviar = document.getElementById("vai")
const erroEnvio = document.getElementById("pErroEnvia")

//analise do envio

enviar.addEventListener("click", function() {
    if(turnoAti === "seleTur" || serieAti === "seleSer" || alunoAti === "seleAlu" || priAti === "selePri" || segAti === "seleSeg" || terAti === "seleTer") { 
        erroEnvio.innerText = "Preencha todos as campos a cima"
    } else if (priAti == segAti || priAti == terAti || segAti == terAti) {
        erroEnvio.innerText = 'Uma ou mais opções iguais'
    } else {
        erroEnvio.innerText = ""
        
        document.getElementById("dados").innerHTML = `<strong>Turno:</strong> ${seleTurno.querySelector(`option[value="${turnoAti}"]`).textContent}<br><strong>Série:</strong> ${seleSerie.querySelector(`option[value="${serieAti}"]`).textContent}<br><strong>Aluno:</strong> ${seleAluno.querySelector(`option[value="${alunoAti}"]`).textContent}<br><strong>Primeira opção:</strong> ${SelePrimeira.querySelector(`option[value="${priAti}"]`).textContent}<br><strong>Segunda opção:</strong> ${SeleSegunda.querySelector(`option[value="${segAti}"]`).textContent}<br><strong>Terceira opção:</strong> ${SeleTerceira.querySelector(`option[value="${terAti}"]`).textContent}`

        document.getElementById("popConfirma").style.display = "flex"
        cobre.style.display = "block"

        document.getElementById("fechaC").addEventListener("click", function() {
            document.getElementById("popConfirma").style.display = "none"
            cobre.style.display = "none"
        })
   }
});

//enviar confirmação

document.getElementById("enviar").addEventListener("click", function () {
    const dados =
        "nome=" + encodeURIComponent(alunoAti) +
        "&turno=" + encodeURIComponent(turnoAti) +
        "&serie=" + encodeURIComponent(serieAti) +
        "&escolha1=" + encodeURIComponent(priAti) +
        "&escolha2=" + encodeURIComponent(segAti) +
        "&escolha3=" + encodeURIComponent(terAti);
    
    console.log(dados)

    fetch("salva.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: dados
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
});
