function shuffle(array){
	var taken = [];
	function random(){
		var rnd = Math.floor(Math.random() * array.length);
		if(taken.indexOf(rnd) < 0){
			taken.push(rnd);
			return rnd;
		} else {
			return random();
		}
	}
	return array.map(function(value, index, array){
		return array[random()];
	});
}