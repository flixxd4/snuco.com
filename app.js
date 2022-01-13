const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")


//Velo
const velo__catecory = document.querySelector("#velo__catecory")
const velo__catecories = document.querySelector(".velo__catecory")
const velo__ice = document.querySelector("#velo__ice")
const velo__tropical = document.querySelector("#velo__tropical")
const velo__catecories1 = () => {
  velo__catecory.classList.toggle("is-active")
  velo__ice.classList.toggle("is-active")
  velo__tropical.classList.toggle("is-active")
}
velo__catecory.addEventListener("click", velo__catecories1);

const velo__ice__heart = document.querySelector("#Velo__ice")
function velo_ice() {
  velo__ice__heart.classList.toggle("fas")
}
velo__ice__heart.addEventListener("click", velo_ice)


const velo__tropical__heart = document.querySelector("#Velo__tropical")
function velo_tropical() {
  velo__tropical__heart.classList.toggle("fas")
}
velo__tropical__heart.addEventListener("click", velo_tropical)

//seven
const seven__catecory = document.querySelector("#seven__catecory")
const seven__catecories = document.querySelector(".seven__catecory")
const seven__cherry = document.querySelector("#seven__cherry")
const seven__vannila = document.querySelector("#seven__vannila")
const seven__catecories1 = () => {
  seven__catecory.classList.toggle("is-active")
  seven__cherry.classList.toggle("is-active")
  seven__vannila.classList.toggle("is-active")
}
seven__catecory.addEventListener("click", seven__catecories1);

const seven__cherry__heart = document.querySelector("#seven__cherry__heart")
function seven_cherry() {
  seven__cherry__heart.classList.toggle("fas")
}
seven__cherry__heart.addEventListener("click", seven_cherry)


const seven__vannila__heart = document.querySelector("#seven__vannila__heart")
function seven_vannila() {
  seven__vannila__heart.classList.toggle("fas")
}
seven__vannila__heart.addEventListener("click", seven_vannila)


const mobileMenu = () => {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
}
menu.addEventListener("click", mobileMenu);