// Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 
// 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
// The array will not be empty, will only contain positive integers, and will not contain more than one mode. 


function MeanMode(arr){
	function findMean(arr){
		return arr.reduce(function(sum, next){
			return sum+next;
		}) / arr.length;
	}

	function findMode(arr){
		return reduce(arr.reduce(function(obj, next){
			if(obj[next] === undefined){
				obj[next] = 1;
			} else {
				obj[next]++;
			}
			return obj;
		}, {}), function(mode, next, index){
			return next > mode ? index : mode;
		}, 0);
	}
	
	return (findMean(arr) == findMode(arr)) ? 1 : 0;

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
	}

	function reduce(collection, callback, initialValue){
		each(collection, function(value, index){
			initialValue = callback(initialValue, value, index);
		});
		return initialValue;
	}
}