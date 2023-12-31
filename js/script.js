let menuMobile = document.querySelector('.cabecalho__menu')
let botaoMenu = document.querySelector('.botao')

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
  resultado.textContent = `${menu1}, ${menu2}, ${menu3}`;
}

document.getElementById('register-form').addEventListener('submit', registerUser);
document.getElementById('login-form').addEventListener('submit', loginUser);

function registerUser(e) {
    e.preventDefault();
    
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    
    // Fazer algo com os dados de registro
    console.log('Registrado:', username, password);
    
    // Limpar os campos
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
}

function loginUser(e) {
    e.preventDefault();
    
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    
    // Fazer algo com os dados de login
    console.log('Logado:', username, password);
    
    // Limpar os campos
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
}



var campo = document.getElementById("campo1");

campo.addEventListener("click", function () {
  if (campo.type === "date") {
    campo.type = "text";
    campo.value = "";
  }
});

campo.addEventListener("blur", function () {
  if (!campo.value) {
    campo.type = "date";
  }
});