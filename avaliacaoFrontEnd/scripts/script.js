let tipo
let artigo = document.querySelector("article")


let btn_adicionar = document.querySelector("#adicionar")

btn_adicionar.addEventListener("click", () => {

    tipo = document.querySelector("#tipo").value
    let conteudo = document.querySelector("#mensagem").value
    let textMens = document.createTextNode(conteudo)
    let h3 = document.createElement("h3")
    let btn_excluir = document.createElement("button")

    btn_excluir.style.width = "20px"
    btn_excluir.style.height = "20px"
    btn_excluir.style.background = "#fff"


    h3.style.color = "#fff"
    h3.style.fontWeight = "normal"
    h3.style.fontFamily = "helvetica"

    if(conteudo != ""){
        document.querySelector("#mensagem").value = ""

    let elemento = document.createElement("div")
    elemento.style.width = "300px"
    elemento.style.height = "100px"
    elemento.style.border = "1px solid #7400b8"


    if(tipo == "Urgente"){
        elemento.style.background = "#e63946"
    }

    else if(tipo == "Normal"){
        elemento.style.background = "#52b788"
    }
    else{
        elemento.style.background = "#3a0ca3"
    }

    h3.appendChild(textMens)
    elemento.appendChild(h3)


    artigo.appendChild(elemento)

    elemento.appendChild(btn_excluir)

    btn_excluir.addEventListener("click", () => {
        elemento.remove()
    })

    


    console.log(tipo)
    }

    
})