function once(callback){
	var isCalled = false;
	var result;
	return function(){
		if(!isCalled){
			console.log("Eseguo la callback");
			isCalled = true;
			result = callback();
			console.log("Fine!");
			return result;
		} else {
			console.log("Leggo result");
			return result;
		}
	};
}


var myOnce = once(function(){
	return range(1, 50000000).reduce(function(total, next){
		return total+next;
	});
});

function range(start, stop){
	var arr = [];
	for(start; start <= stop; start++){
		arr.push(start);
	}
	return arr;
}

console.log(myOnce());
console.log(myOnce());
console.log(myOnce());


// Yes, the range function is VERY heavy and VERY useless
// I've done this crazy thing just to show clearly that on the first execution the function requires some amount of time (to create the array)
// but then it's superfast because simply needs to read and return a value :)
// Run it and see!