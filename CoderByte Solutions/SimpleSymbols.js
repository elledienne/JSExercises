// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable
// sequence by either returning the string true or false. The str parameter will be composed of + and = symbols 
// with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded 
// by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter

function SimpleSymbols(str) {
	return str.split('').reduce(function(result, value, index, array){
		if(result !== false && value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 122){
			if(array[index-1] !== undefined && array[index-1] === '+' && array[index+1] !== undefined && array[index+1] === '+'){
				return true;
			} else {
				return false;
			}
		}
		return result;
	}, true);
         
}


console.log(SimpleSymbols('++d+===+c++==a'))
