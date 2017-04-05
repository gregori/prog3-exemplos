// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // tratamento de evento não obstrusivo
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Chamar servidor para obter o nome
        $ajaxUtils
          .sendGetRequest("data/nomes.json", 
            function (res) {
              var mensagem = 
                res.nome + " " + res.sobrenome;
              if (!res.veTV) {
                mensagem += " não";
              }
              
              mensagem += " vê TV";

              mensagem += " e usa ";
              mensagem += res.numeroDeMonitores + 1;
              mensagem += " monitores para programar.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + mensagem + "</h2>";
            });
      });
  }
);





