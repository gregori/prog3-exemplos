// Arrays
// Podemos declarar utilizando a keyworod "new"
var array = new Array(); 

// Arrays têm o primeiro índice em 0
// e podem conter conteúdos mistos
array[0] = "Rodrigo"; // string
array[1] = 2; // inteiro
array[2] = function(nome) { // função
	console.log("Olá " + nome);
};
array[3] = {curso: "Programação III"}; // object literal

console.log(array);	
// Acessível individualmente (como se esperaria)
console.log(array[1]);
// Chamar a função pelo índice do array
array[2]("Rodrigo");
// Passar o argumento pelo índice do array
array[2](array[0]);
console.log(array[3].curso);

// Atalho para criação de arrays
var nomes = ["Rodrigo", "Eduardo", "Marcelo"];
console.log(nomes);

// loop como em java 
// .length retorna o tamanho do array
for (var i = 0; i < nomes.length; i++) {
	console.log("Olá " + nomes[i]);
}

// Inconveniente - valores undefined:
nomes[100] = "Zé";
for (var i = 0; i < nomes.length; i++) {
	console.log("Olá " + nomes[i]);
}
