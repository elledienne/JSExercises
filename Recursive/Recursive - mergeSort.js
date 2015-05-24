// The above function is the helper merge function
function merge(left, right, array){
  	if (left.length == 0 && right.length == 0) {
    	return array;
  	} else if (left.length == 0) {
    	return array.concat(right);
  	} else if (right.length == 0) {
    	return array.concat(left);
  	} else if (left[0] < right[0]) {
    	array.push(left.shift());
  	} else if (left[0] > right[0]) {
    	array.push(right.shift());
  	} else {
  		array.push(left.shift());
   		right.shift();
  	}
  	return merge(left, right, array);
}

// This is the main function, just to say ;)
function mergeSort(array){
  	if (array.length > 1) {
    	return merge(mergeSort(array.slice(0, Math.ceil(array.length/2))),
            	mergeSort(array.slice(Math.ceil(array.length/2))), []);
  	} else {
    	return array;
  	}
}
