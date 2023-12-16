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
  elemento.checked = true;
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
