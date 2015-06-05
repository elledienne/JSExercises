// Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest 
// number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it 
// has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. 
// Words will be separated by spaces. 




function LetterCountI(str){
	var words = str.split(' ');
	var result = words.reduce(function(greatest, next){
		var nextCount = countRepeated(next);
		if(nextCount > greatest.count || greatest.count === undefined){
			greatest.count = nextCount;
			greatest.word = next;
		}
		return greatest;
	},{});

	return (result.count === 1) ? -1 : result.word;
	
	function countRepeated(word){
		return reduce(word.split('').reduce(function(obj, letter){
			if(obj[letter] === undefined){
				obj[letter] = 1;
			} else {
				obj[letter]++;
			}
			return obj;
		}, {}), function(result, next, index){
			return next > result ? next : result;
		}, 0);
	}

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