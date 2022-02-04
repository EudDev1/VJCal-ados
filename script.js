let button = document.getElementById("my-id-button");
let form = document.getElementById("my-form")
let input = document.getElementsByTagName("input")
let select = document.getElementById("select-information")


let arrayInformation = [];

let time = 2000,
  currencyImageIndex = 0,
  imagens = document.querySelectorAll("#img-announcement img");
max = imagens.length;

function nextImage() {
  imagens[currencyImageIndex].classList.remove("selected");

  currencyImageIndex++;

  if (currencyImageIndex >= max) currencyImageIndex = 0;

  imagens[currencyImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

function register() {

  
}


function addByEnter() {
  if (teclas.key === "Enter") {
    register()
  }
}

window.addEventListener("load", start);
button.addEventListener("click", register);
document.addEventListener("keypress",addByEnter)
