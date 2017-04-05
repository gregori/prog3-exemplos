// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Chamar servidor para obter o nome
        $ajaxUtils
          .sendGetRequest("data/nome.txt", 
            function (response) {
              var nome = response.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Olá " + nome + "!</h2>";
            });

        
      });
  }
);





