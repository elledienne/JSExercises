function nFibonacci(nth){
	if(nth === 1){
		return [0, 1];
	} else {
		var fib = nFibonacci(nth-1);
		fib.push(fib[fib.length-2] + fib[fib.length-1]);
		return fib;
	}
}