const respostaElement = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#pergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


// clique em Fazer pergunta
function fazerPergunta() {

  if(inputPergunta == "") {
      alert("Digite uma pergunta!!")
      return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

// gerar um número aleatório
const totalRespostas = respostas.lenght

const numeroAleatorio = math.floor(math.random() * totalRespostas)

respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

respostaElement.style.opacity = 1;

// sumir a resposta depos de 3 segundos
  setTimeout(function() {
   respostaElement.style.opacity = 0;
   buttonPerguntar.removeAttribute("disabled")
  }, 300)

}

 