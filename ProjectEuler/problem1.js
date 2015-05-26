/******
*** If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
***
***Find the sum of all the multiples of 3 or 5 below 1000.
******/

function range(start, end){
	var arr = [];
	for(start; start <=end; start++){
		arr.push(start);
	}
	return arr;
}
function multiples(limit){
	var num = range(0, limit);
	return num.filter(function(num){
		return num % 3 == 0 || num % 5 == 0;
	}).reduce(function(sum, next){
		return sum+next
	}, 0);
}