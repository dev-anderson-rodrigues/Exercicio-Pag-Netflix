document.querySelector("#Entrar").addEventListener("click", function (e) {
  e.preventDefault();
  const button = document.getElementById("Entrar");
  const carregamento = document.querySelector('.carregamento');
  const modal = document.querySelector("dialog");
  const buttonClose = document.querySelector("dialog button");

  carregamento.style.display = "block";

  setTimeout(function() {
    carregamento.style.display = 'none';
    console.log("Primeira função executada");
    segundaFuncao();
  }, 3000);

  function segundaFuncao() {
    modal.style.display = "block";
    console.log("Segunda função executada");
    
  };

  button.onclick = function () {
    carregamento.showModal;
  };

  buttonClose.onclick = function () {
    modal.style.display = "none";
    // modal.close();
  };

  buttonClose.onclick = function () {
    modal.style.display = "none";
  
  };

});