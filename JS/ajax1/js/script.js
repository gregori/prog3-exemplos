// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // tratamento de evento não obstrusivo
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Chamar servidor para obter o nome
        $ajaxUtils
          .sendGetRequest("data/nomes.txt", 
            function (response) {
              var nome = response.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Olá " + nome + "!</h2>";
            });

        
      });
  }
);





