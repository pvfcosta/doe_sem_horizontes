/*--------Input do botão----------*/
var openSearch = document.querySelector('.text-button-contain');
function searchSection() {
  openSearch.innerHTML = '<input type="text" id="campo_busca" placeholder="Buscar locais">';
}
function searchSectionLeave() {
  openSearch.innerHTML = '<p class="text-button-contain">Pesquisar pontos de doação</p>';
}
/*--------Input do botão----------*/