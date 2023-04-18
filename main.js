const fortuneCookie = document.querySelector("#cookie1")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("button")

const fortunePhrases = [
  "A vida trará coisas boas se tiver paciência.",

  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",

  "Não compense na ira o que lhe falta na razão.",

  "Defeitos e virtudes são apenas dois lados da mesma moeda.",

  "A maior de todas as torres começa no solo.",

  "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",

  "A inspiração vem dos outros. A motivação vem de dentro de nós.",

  "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.",

  "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",

  "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais… Na vida tudo se supera.",

  "Acredite em milagres, mas não dependa deles.",

  "Você sempre será a sua melhor companhia!",

  "Realize o óbvio, pense no improvável e conquiste o impossível.",
]

let item = 0

fortuneCookie.addEventListener('click', openCookie)
btnReset.addEventListener('click', cookieReset)
document.addEventListener('keypress', handleEnter)

function openCookie() {
  screenToggle()
  document.querySelector(".fortune p").innerText = fortunePhrases[item]

  console.log(item)
}

function cookieReset(e) {
  // e.preventDefault()
  screenToggle()
  item = Math.round(Math.random() * (fortunePhrases.length - 1))
}

function screenToggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnter(event) {
 if(event.key == 'Enter' && screen1.classList.contains("hide")) {
    cookieReset()
 }
}
