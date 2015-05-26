function range(start, stop){
	var n = [];
	for(start; start <= stop; start++){
		n.push(start);
	}
	return n;
}
function fuckMath(limit){
	var numbers = range(1, limit);
	return Math.pow(numbers.reduce(function(sum, next){
		return sum+next;
	}), 2) - numbers.reduce(function(sum, next){
		return sum + Math.pow(next, 2);
	}, 0);
}
