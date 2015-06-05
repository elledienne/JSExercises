// Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
// For the test cases, the parameter num will be any number from 1 to 1000. 

function SimpleAdding(num) { 
	function each(collection, callback){
		if(Array.isArray(collection)){
			for(var i = 0; i < collection.length; i++){
				callback(collection[i], i, collection);
			}
		} else {
			for(var key in collection){
				callback(collection[key], key, collection);
			}
		}
		return collection;
	}

	return each([1], function cb(value, index, array){
		if(array.length < num){
			array.push(array.length+1);
			each(array, cb);
		}
	}).reduce(function(sum, next){
		return sum+next;
	});
         
}

console.log(SimpleAdding(10));

function SimpleAdding2(num){
	function add(next){
		if(next === num){
			return num;
		} else {
			return next + add(next+1);
		}
	}
	return add(1);
}

console.log(SimpleAdding2(10));