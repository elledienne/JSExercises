// Have the function CountingMinutesI(str) take the str parameter being passed which will be two times 
// (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes 
// between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the 
// output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str){
	var dates = str.split('-');

	function convertTo24(dates){
		return dates.map(function(value){
			var suffix = value.slice(-2);
			var colonIndex = value.search(':');
			if(suffix === 'pm'){
				return parseInt(value.slice(0, colonIndex))+12+value.slice(colonIndex, -2);
			}
			return value.slice(0,-2);
		});
	}

	function count(time1, time2){
		time1 = time1.split(':');
		time2 = time2.split(':');

		hourDiff = Math.abs(time1[0]-time2[0])*60;
		minDiff = time1[1]-time2[1];

		return (parseInt(time1[0]+''+time1[1]) > parseInt(time2[0]+''+time2[1])) ? (24*60)-(hourDiff+minDiff) : hourDiff-minDiff;
	}

	dates = convertTo24(dates);
	return Math.abs(count(dates[0], dates[1]));
} 