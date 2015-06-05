// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second 
// greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output 
// should be 12 98. The array will not be empty and will contain at least 2 numbers. 
// It can get tricky if there's just two numbers! 

function SecondGreatLow(arr){
	var sortedFiltered = arr.sort(function(a, b){ return a-b; }).reduce(function(newArr, nextVal){
		if(newArr.indexOf(nextVal) === -1){
			newArr.push(nextVal);
		}
		return newArr;
	}, []);
	return (sortedFiltered.length === 1) ? arr[0]+' '+arr[0] : sortedFiltered[1]+' '+sortedFiltered[sortedFiltered.length-2];
}