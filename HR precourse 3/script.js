// 1. Write a function, AnimalTestUser, that has one string parameter, username. It returns an object with a username property.

function AnimalTestUser(username){
	return {
		username: username
	};
}

// 2. In your AnimalTestUser function, create a check that sees how many arguments are passed.
//    If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments. 
//    Note: the arguments keyword is not a true array. Remember, it is an array-like object

function AnimalTestUser(username){
	var animalObj = {
		username: username
	};
	if(arguments.length > 1){
		animalObj.otherArgs = Array.prototype.slice.call(arguments, 1)
	}
	return animalObj;
}

// 3. Write a constructor function, AnimalCreator that returns a single animal object. 
//    The constructor function has 4 parameters: username, species, tagline, and noises. 
//    The animal object should have at least 5 properties: username, species, noises, tagline, and friends. 
//    The values should all be strings except noises and friends, which are arrays.

function AnimalCreator(username, species, tagline, noises){
	this.username = username;
	this.species = species;
	this.tagline = tagline;
	this.noises = noises;
	this.friends = []
}

// 4. Write a function, addFriend that takes an animal object (like the one returned from the AnimalCreator function) 
//	  and adds another animal object as a friend.

function addFriend(receiver, toAdd){
	receiver.friends.push(toAdd);
}

// 5. Change your addFriend function to only add the username of the friend, not the whole object.

function addFriend(receiver, toAdd){
	receiver.friends.push(toAdd.username);
}

// 6. Create a myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!

var myFarm = []

myFarm.push(new AnimalCreator('Maanonu', 'cat', 'bella zio', ['meow', 'prr']));
var dog = new AnimalCreator('Touche', 'dog', 'dio t\'imbocche', ['woff', 'bau']);
myFarm.unshift(dog);
myFarm[2] = new AnimalCreator('Pikachu', 'pokemon', 'te cope', ['pika-pika','PIIII-KAAAAAA-CHUUUU']);
addFriend(myFarm[0], myFarm[2]);
addFriend(myFarm[0], myFarm[1]);
addFriend(myFarm[1], myFarm[2]);
addFriend(myFarm[1], myFarm[0]);
addFriend(myFarm[2], myFarm[0]);
addFriend(myFarm[2], myFarm[1]);
// 7. Create a function, addMatchesArray, that takes a farm (array of animal objects) and adds a new property to each 
//    animal object called matches that is an empty array. Hint: you will need a loop.

function addMatchesArray(farm){
	farm.forEach(function(animal){
		animal.matches = [];
	});
}

// 8. Create a function, giveMatches, that takes a farm collection (aka an array of animal objects) that already has a matches property. 
//    It selects a name from the friends array and adds it to the matches array. 
//    You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.

function giveMatches(farm){
	function random(n){
		return Math.floor(Math.random() * n);
	}

	farm.forEach(function(animal){
		animal.matches.push( animal.friends[ random(animal.friends.length) ]);
	});
}

// 8.1 [MY ADD ;) ] Create a function, removeUndefined, that takes a farm collection and removes all the undefined values found
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

function removeUndefined(farm){
	farm.forEach(function(animal){
		each(animal, function cb(value, index, obj){
			if(Array.isArray(value)){
				obj[index] = value.filter(function(v){
					return v !== undefined;
				});
			}
		});
	});
}




