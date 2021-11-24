const botaoControlarMenu = document.querySelector('.cabecalho-pagina-botao-controla-menu');
botaoControlarMenu.addEventListener('click', function(){
    let menuNavegacaoCabecalho = document.querySelector('.cabecalho-pagina-barra-navegacao');
    menuNavegacaoCabecalho.classList.toggle('menu-ativo');
});