let menuMobile = document.querySelector('.cabecalho__menu')
let botaoMenu = document.querySelector('.cabecalho__botao')

let aberto = false 

botaoMenu.onclick = function abrirOuFecharMenu() {
  if (aberto === true) {
    aberto = false
    menuMobile.classList.remove('aberto')
    botaoMenu.innerHTML = `<img src="img/menu_white_24dp.svg " alt="Menu aberto">`
  } else if (aberto === false) {
    aberto = true
    menuMobile.classList.add('aberto')
    botaoMenu.innerHTML = `<img src="img/close_white_24dp.svg"" alt="Menu fechado">`
  }
}

function atualizarResultado() {
  const menu1 = document.getElementById('menu1').value;
  const menu2 = document.getElementById('menu2').value;
  const menu3 = document.getElementById('menu3').value;

  const resultado = document.getElementById('itemSelecionado');
  resultado.textContent = `Selecionado: ${menu1}, ${menu2}, ${menu3}`;
}

document.getElementById("botaoEnviar").addEventListener("click", function() {
  alert("Seu formulario foi enviado com sucesso!!");
});