function binarySearch(array, number){
	array.sort(function(a,b){ return a-b; }); // this line sort the array in ascending order, 
											  // can be removed to simplify the function, but then the array must be sorted
											  // before being passed to the function or it will cause an error
	function fasterBS(array, toFind){
		var half = Math.floor(array.length / 2);
		if(toFind === array[half]){
			return half;
        } else if(array.length == 1){
          return undefined;
        }else if(toFind > array[half]){
			return (half + fasterBS(array.slice(half, array.length), toFind)) || undefined;
		} else {
			return fasterBS(array.slice(0, half), toFind);
		}
	}
	return fasterBS(array, number);

	/*
	function doSearch(arrayItm, index){
		if(index == array.length){
			return -1;
		} else if(arrayItm == number){
			return index;
		} else {
			return doSearch(array.shift(), index+1);
		}
	}
	return doSearch(array.shift(), 0);
	**
	** This was my first attempt, than i rewrote my code (i admit that, looking to someone else code).
	** By the way it's working great, but with big arrays might be slow
	*/
}
