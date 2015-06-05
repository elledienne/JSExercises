// Have the function Palindrome(str) take the str parameter being passed and return the string true if the 
// parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. 
// For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

function Palindrome(str) { 
	return str.split('')
		.filter(function(value){
			return value !== ' ' ? true : false;
		})
		.reduce(function(result, value, index, array){
		if(result === true){
			if(value === array[array.length-(1+index)]){
				return true;
			} else {
				return false;
			}
		}
		return result;
	}, true);      
}

console.log(Palindrome('race car'))
