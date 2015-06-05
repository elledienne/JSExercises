// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
// For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

function DashInsert(str){
	function isOdd(number){
		number = +number;
		return (number % 2 !== 0 && number !== 0) ? true : false;
	}

	return str.split('').reduce(function(newStr, nextLetter, index, arr){
		newStr.push(nextLetter);
		if(isOdd(nextLetter) && arr[index+1] !== undefined && isOdd(arr[index+1])){
			newStr.push('-');
		}
		return newStr
	}, []).join('');
}