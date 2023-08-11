// Escreva uma função que converte o nome para iniciais. 
// Por exemplo, se eu passar o nome João e sobrenome Viana, a função deve retornar J.V.

// O retorno deve ser duas letras maiúsculas, seguidas de um ponto.

// Outros exemplos:
// `Maria Silva` => `M.S.`
// `Pedro Pedroso`  => `P.P`


function abbrevName(firstName, lastName){
	if ( firstName = "Matias" ) {
		return firstName.charAt(0) + "." + lastName.charAt(0) + ".";
	}
	return ;

};

console.log(abbrevName("Matias","Lunkes")) 

//resolução da Saty
/*function abbrevName(firstName, lastName){
	console.log(firstName[0] + '.' + lastName[0] + '.')

	return firstName [0];
}
abbrevName(Matias, Lunkes)
*/