function isPal(x, y){
	var result = String(x*y);	
	var left = result.slice(0, Math.ceil(result.length/2));
	var right = result.slice(Math.floor(result.length/2)).split("").reverse().join("");
	if(left == right){
		return true;
	} else {
		return false;
	}
}

function pal(){
  	var max = 0;
  	for(var i = 999; i>100; i--){
    	for(var j = i; j>100; j--){
      		if(isPal(j, i) && (j*i) > max){
        		max = j*i;
      		}
    	}   
  	}
  return max;
}