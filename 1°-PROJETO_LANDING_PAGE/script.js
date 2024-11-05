const setaEsquerda = document.querySelector("#setaEsquerda")
const setaDireita = document.querySelector("#setaDireita")
const leonardo = document.querySelector("#leonardo")
const samantha = document.querySelector("#samantha")
const bruna = document.querySelector("#bruna")

function rolarParaDireita() {
  leonardo.style = "display:none"
  bruna.style = "display:flex"
  setaDireita.style = "display:none"
  setaEsquerda.style = "display:flex"
}

function rolarParaEsquerda() {
  leonardo.style = "display:flex"
  bruna.style = "display:none"
  setaDireita.style = "display:flex"
  setaEsquerda.style = "display:none"
}
