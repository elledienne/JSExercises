// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return 
// the largest word in the string. If there are two or more words that are the same length, 
// return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) { 
	var punctuation = ['?', "'", '"', '!', '.', ',', '-', '_', ';', '\\', '/', '&', ':']
	return sen.split('').filter(function(l){
		return punctuation.indexOf(l) < 0 ? true : false;
	}).join('').split(' ').reduce(function(longest, next){
		return longest.length >= next.length ? longest : next;
	}, '');        
}

console.log(LongestWord('I love dogs'))