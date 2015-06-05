// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels 
// the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

function VowelCount(str){
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	return str.split('').filter(function(value, index, array){
		return (vowels.indexOf(value.toLowerCase()) !== -1) ? true : false;
	}).length;
}

console.log(VowelCount('All cows eat grass'));