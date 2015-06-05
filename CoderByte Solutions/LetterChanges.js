// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and 
// modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet 
// (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and 
// finally return this modified string.

function LetterChanges(str){
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	return str.split('').map(function(letter){
		var charCode = letter.charCodeAt(0);
		if(charCode >= 97 && charCode < 122){
			charCode++;
		} else if(charCode === 122){
			charCode = 97
		}
		letter = String.fromCharCode(charCode);
		if(vowels.indexOf(letter) >= 0){
			letter = letter.toUpperCase();
		}
		return letter;
	}).join('');
}


console.log(LetterChanges('fun times!'))
