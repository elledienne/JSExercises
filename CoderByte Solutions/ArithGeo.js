// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the 
// sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. 
// If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each 
// of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant 
// or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
// Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

function ArithGeo(arr){
	function isArithmetic(arr){
		var isArithmetic = true,
			constant;
		arr.reduceRight(function(current, next, i, array){
			if(isArithmetic === true){
				if(current === array[array.length-1]){
					constant = current-next;
				} else if(current-next !== constant){
					isArithmetic = false;
				}
			}
			return next;
		});
		return isArithmetic;
	}

	function isGeometric(arr){
		var isGeometric = true,
			constant;
		arr.reduce(function(current, next, i){
			if(isGeometric === true){
				if(i == 1){
					constant = next / current;
				} else if(next / current !== constant){
					isGeometric = false;
				}
			}
			return next;
		});
		return isGeometric;

	}

	if(isArithmetic(arr)){
		return 'Arithmetic';
	} else if(isGeometric(arr)){
		return 'Geometric'
	} else {
		return -1;
	}
}

console.log(ArithGeo([1,5,9]))