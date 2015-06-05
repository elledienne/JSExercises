// Using the JavaScript language, have the function FirstReverse(str) 
// take the str parameter being passed and return the string in reversed order. 

function FirstReverse(str) { 
  return str.split('').reverse('').join('');         
}

console.log(FirstReverse('ciao mamma !!'));

function FirstReverse2(str){
	return str.split('').map(function(letter, i, a){
		return a[a.length-(1+i)];
	}).join('')
}

console.log(FirstReverse2('ciao mamma !!'));

