var message = prompt("Insira uma palavra ou uma frase sem espaços");
var options = prompt("Para Cifrar digite 1, para Decifrar digite 2");
if(options == 1) {
	cipher(message, 33);
} else {
	decipher(message, 33);
}

function cipher(word, n) {
	var stringVoid = '';
	for(var i = 0; i < word.length; i++) {
		var number = word.charCodeAt(i);
		var upper = (number - 65 + n) % 26 + 65;
		var lower = (number - 97 + n) % 26 + 97;
		if(number >= 65 && number <= 90) {
			stringVoid += String.fromCharCode(upper);
		} else if(number >= 97 && number <= 122) {
			stringVoid += String.fromCharCode(lower);
		} else {
			alert("A frase deve ter apenas letras, não utilizar espaços e/ou números");
		}
	}
	document.write(stringVoid);
}

function decipher(word, n) {
	var stringVoid = '';
	for(var j = 0; j < word.length; j++) {
		var number = word.charCodeAt(j);
		var upper = (((number + 65 - n) % 26) + 65);
		var lower = (((number + 85 - n) % 26) + 97);
		if(number >= 65 && number <= 90) {
			stringVoid += String.fromCharCode(upper);
		} else if(number >= 97 && number <= 122) {
			stringVoid += String.fromCharCode(lower);
		} else {
			alert("A frase deve ter apenas letras, não utilizar espaços e/ou números");
		}
	}
	document.write(stringVoid);
}
