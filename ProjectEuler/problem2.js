function fibonacci(limit){
	var fib = [0, 1];
	while(fib[fib.length-1] < limit){
		fib.push(fib[fib.length-2]+fib[fib.length-1]);
	}
	return fib;
}

function sumEvenFib(){
	return fibonacci(4000000).filter(function(number){
		return number % 2 == 0;
	}).reduce(function(sum, next){ return sum+next; }, 0);
}