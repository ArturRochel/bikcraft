// HEADER INTERATIVO
const links = document.querySelectorAll(".header-menu a");

function marcador(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(marcador);

//ORCAMENTOS
const parametros = new URLSearchParams(location.search);

function tipo(item) {
  const elemento = document.getElementById(item);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(tipo);

// HAMBURGUER
const hamburguer = document.querySelector(".hamburguer");

function abrir() {
  const headerMenu = document.querySelector(".header-menu");
  const header = document.querySelector(".header");
  header.classList.toggle("ativo");
  headerMenu.classList.toggle("ativo");

  document.onclick = function (event) {
    if (
      !headerMenu.contains(event.target) &&
      !hamburguer.contains(event.target)
    ) {
      headerMenu.classList.remove("ativo");
      header.classList.remove("ativo");
    }
  };
}

hamburguer.addEventListener("click", abrir);

// PERGUNTAS FREQUENTES -SEGUROS
const perguntas = document.querySelectorAll(".perguntas button");

function responder(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.querySelector("#" + controls);

  resposta.classList.toggle("ativa");
  const ativo = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativo);
}

function clickPerguntas(pergunta) {
  pergunta.addEventListener("click", responder);
}

perguntas.forEach(clickPerguntas);

// GALERIA NIMBUS
const imagens = document.querySelectorAll(".nimbus-imagens img");
const galeria = document.querySelector(".nimbus-imagens");

function mudar(event) {
  const imagem = event.currentTarget;
  const media = matchMedia("(min-width: 900px)").matches;
  if (media) {
    galeria.prepend(imagem);
  }
}

function clickImg(imagem) {
  imagem.addEventListener("click", mudar);
}

imagens.forEach(clickImg);

// ANIMAÇÃO

if (window.SimpleAnime) {
  new SimpleAnime();
}
