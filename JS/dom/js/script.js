// Event handling - carrega o código depois que 
// a página estiver pronta
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function digaOi (event) {
      this.textContent = "Dito!";
      var nome =
       document.getElementById("nome").value;
       var mensagem = "<h2>Oi " + nome + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = mensagem;

      if (nome === "aluno") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " e estou Adorando!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", digaOi);

  }
);



// document.querySelector("button")
//   .onclick = sayHello;




