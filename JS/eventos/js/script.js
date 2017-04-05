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

    // Tratamento de eventos não obstrusivo
    document.querySelector("button")
      .addEventListener("click", digaOi);

   // Mostra a posição xy do mouse se shift estiver
   // pressionado
   /* document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );*/

  }
);




