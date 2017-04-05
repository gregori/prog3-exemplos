var $ajaxUtils = (function () {

// retornar os metodos expostos
return {
    sendGetRequest: sendGetRequest
};


// Returns an HTTP request object
function getRequestObject() {
  if (window.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (window.ActiveXObject) {
    // Para versões bem antigas do IE (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    window.alert("Ajax não e suportado!");
    return(null); 
  }
}


// Faz uma requisição Ajax GET para 'requestUrl'
function sendGetRequest(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, responseHandler, isJsonResponse); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // só serve para POST
  };


// Só chama a função 'responseHandler'
// se a resposta estiver pronta
// e não for um erro
function handleResponse(request,
                        responseHandler, isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    // padrao é isJsonResponse = true
    if (isJsonResponse == undefined) {
      isJsonResponse = true;
    }
    // se receber um JSON, faz o parse
    if (isJsonResponse) {
      responseHandler(JSON.parse(request.responseText));
    }
    else { // senao entrega o texto como vem
      responseHandler(request.responseText);
    }
  }
}


})();

