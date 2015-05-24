function arraySum(array){
	if(array.length == 0){
		return 0;
	} else {
		return array.shift() + arraySum(array);
	}
}