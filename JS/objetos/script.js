var obj = {
	nome: 'Teste',
	idade: 25
};

for (var atrib in obj) {
	console.log(atrib + ": " + obj[atrib]);
}