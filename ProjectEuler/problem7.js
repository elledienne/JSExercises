function isPrime(number){
	for(var i = 2; i < number; i++){
		if(number % i == 0){
			return false;
		}
	}
	return true;
}

function getNthPrime(nth){
	var primes = [2];
	for(var i = 3; primes.length <= nth; i+=2){
		if(isPrime(i)){
			primes.push(i);
		}
	}
	return primes[nth-1];
}
