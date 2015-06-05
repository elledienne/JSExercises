// Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive 
// integer and return its additive persistence which is the number of times you must add the digits in num until you r
// each a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 
// and you stop at 9. 

function AdditivePersistence(num){
	var result = 0;

	function findPersistence(num){
		if(num.toString().length === 1){
			return result;
		} else {
			result++;
			return findPersistence( num.toString().split('').reduce(function(sum, next){
				return sum + parseInt(next);
			}, 0) );
		}
	}

	return findPersistence(num);
}