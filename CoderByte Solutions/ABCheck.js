// have the function ABCheck(str) take the str parameter being passed and return the string true if the 
// characters a and b are separated by exactly 3 places anywhere in the string at least once 
// (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). 
// Otherwise return the string false. 

function ABCheck(str){
	return str.split('').reduce(function(result, value, index, array){
		if(result === false && (value === 'a' || value === 'b')){
			if( (value === 'a' && array[index+4] === 'b') || 
			    (value === 'b' && array[index+4] === 'a') ){
				return true
			} else {
				return false;
			}
		}
		return result;
	}, false);
}

console.log(ABCheck('bzzza'));
