// Have the function NumberAddition(str) take the str parameter, search for all the numbers in the string, 
// add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. 
// You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. 
// So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 

function NumberAddition(str){
	function isNumber(number){
		return (!isNaN(parseInt(number))) ? true : false;
	}
	return str.split('').reduce(function(numbers, nextNumber, index, arr){
		if(isNumber(nextNumber)){
			numbers.push(nextNumber);
			if(!isNumber(arr[index+1])){
				numbers.push('-');
			}
		}
		return numbers
	}, []).join('').split('-').reduce(function(sum, next){
		return (isNumber(next)) ? sum+parseInt(next) : sum;
	}, 0);
}