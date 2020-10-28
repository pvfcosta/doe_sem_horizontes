/*--------Input do botão----------*/
var openSearch = document.querySelector('.text-button-contain');
function searchSection() {
  openSearch.innerHTML = '<input type="text" id="campo_busca" placeholder="Buscar locais">';
}
function searchSectionLeave() {
  openSearch.innerHTML = '<p class="text-button-contain">Pesquisar pontos de doação</p>';
}
/*--------Input do botão----------*/

/*--------Animação da página----------*/
const elementos = document.querySelectorAll('[data-anima]')
const animacaoClass= 'animacao';
function animaScroll() {
  const topoPaginaNaJanela= window.pageYOffset+((window.innerHeight*3)/4);
  elementos.forEach(function(elemento){
    if (topoPaginaNaJanela > elemento.offsetTop) {
      elemento.classList.add(animacaoClass);
    } else {
      elemento.classList.remove(animacaoClass);
    }
  });
}
if (elementos.length) {
  window.addEventListener('scroll',function() {
    animaScroll();
  })
}
/*--------Animação da página----------*/