function isEven(n){
  	n = (n < 0) ? Math.abs(n) : n;
	if(n === 0){
		return true;
	} else if(n === 1){
		return false;
	} else {
		return isEven(n-2);
	}
}