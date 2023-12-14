// HEADER INTERATIVO
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ORCAMENTOS
const parametros = new URLSearchParams(location.search);

function itens(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
}

parametros.forEach(itens);
