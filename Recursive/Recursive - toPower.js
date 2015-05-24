function toPower(number, exp){
	if(exp == 0){
		return 1;
	} 
	/* else if(exp == 1){
	** 	  return number;
	** }
	** Initially those lines were uncommented, than i found that they are useless :)
	** Keeping them here just to remember myself to not overcomplicate things 
	*/
	else {
		return number * toPower(number, exp-1);
	}
}