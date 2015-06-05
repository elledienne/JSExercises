//Use this file to implement Part One of your project
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

function find(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i<collection.length; i++){
			if(callback(collection[i], i, collection)){
				return collection[i];
			}
		}
	} else {
		for(var key in collection){
			if(callback(collection[key], key, collection)){
				return collection[key];
			}
		}
	}
	return false;
}

function map(collection, callback){
	var arr = [];
	each(collection, function(element, index, collection){
		arr.push(callback(element, index, collection));
	});
	return arr;
}

function filter(collection, callback){
	var newArr = [];
	each(collection, function(value, key, collection){
		if(callback(value, key, collection)) newArr.push;
	});
	return newArr;
}

function where(collection, properties){
	var arr = [];
	each(collection, function(item, key, collection){
		for(key in properties){
			if(!item[key] || item[key] !== properties[key]) return;
		}
		arr.push(item);
	});
	return arr;
}

var objectToPrintKey = { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] };
var arrayToStringify = ['quack', 'honk', 'sneeze', 'growl'];

// 'objKeyPrinter' loops through the properties of any object and returns a string of all the keys. 
var mappedKeys = map(objectToPrintKey, function(value, key){
	return key;
}).reduce(function(string, word){
	return string + " " + word;
});

console.log(mappedKeys);

console.log("");
console.log("----------------------------");
console.log("");

// `objValuePrinter` loops through all the properties in a given object and returns a string of all the values that are strings.
var mappedStringValue = map(objectToPrintKey, function(value){
	return value;
}).filter(function(value){
	return typeof value === 'string';
}).reduce(function(string, nextWord){
	return string + " " + nextWord;
});

console.log(mappedStringValue);
console.log("");
console.log("----------------------------");
console.log("");
// `arrValuePrinter` takes a given array and returns the values as a string 
var stringedArray1 = arrayToStringify.reduce(function(string, nextWord){
	return string + " " + nextWord;
});

var stringedArray2 = arrayToStringify.join(" ");
console.log('Version1 (functional): '+stringedArray1);
console.log('Version2 (smartest :D): '+stringedArray2);

console.log("");
console.log("----------------------------");
console.log("");

// `dataTypeChecker` takes either an array or an object and returns either `'array'` or `'object'` as appropriate.
function dataTypeChecker(collection){
	if(typeof collection === 'object'){
		if(Array.isArray(collection)){
			return 'array';
		}
		return 'object';
	}
}

console.log(dataTypeChecker([]));
console.log(dataTypeChecker({}));

console.log("");
console.log("----------------------------");
console.log("");

//`capitalizeVals` takes an object, capitalizes the first letter of each string value in the object, and returns the object. Ignore any non-string values like arrays, numbers or objects.
// Bonus point: i made it working also on nested string propertys ^^
function capitalizeVals(object){
	each(object, function(value, key, obj){
		if(typeof value === 'string'){
			obj[key] = value.charAt(0).toUpperCase()+value.substr(1);
		} else if(typeof value === 'object' && !Array.isArray(value)){
			capitalizeVals(value);
		}
	});
	return object;
}

console.log(capitalizeVals(
	{
		0: 'zero',
		1: 'blashjdvsb',
		2: [1,2,3,4],
		3: {
			11: 'jdhvb',
			22: 'boh',
			33: [4,5,6]
		}
	}
));

console.log("");
console.log("----------------------------");
console.log("");

// `strCapitalizer` takes a string, capitalizes the first letter of each word, and returns the string.
function strCapitalizer(string){
	return string.split(" ").map(function(word){
		return word.charAt(0).toUpperCase()+word.substr(1);
	}).join(' ');
}

console.log(strCapitalizer('my name is bristol'));

console.log("");
console.log("----------------------------");
console.log("");

// `unique` takes an array, removes any duplicate values and returns the array.
function unique(array){
	for(var i = 0; i<array.length; i++){
		for(var j = i+1; j<array.length; j++){
			if(array[i] === array[j]){
				array.splice(j, 1);
			}
		}
	}
	return array;
}

function uniqueFunctional(array){
	var newArr = [];
	array.forEach(function(element){
		if(newArr.indexOf(element) === -1) newArr.push(element);
	});
	return newArr;
}

function sortingMethod(a, b){
     var a = a.toString();
     var b = b.toString();

     if (a < b){
        return -1;
     } else if (a > b) {
        return  1;
     } else{
        return 0;
     }
}

function uniqueReduce(array){
	//array.sort(sortingMethod);
	return array.reduce(function(uniqueVal, nextElement){
		if (uniqueVal.indexOf(nextElement) === -1) uniqueVal.push(nextElement);
		return uniqueVal;
	}, []);
}

// Another way, found on the web that uses filter.
// N.B. THIS FUNCTION SORT THE ARRAY, SO IT'S NOT PRESERVING ELEMENTS ORDER
// function uniqueFilter(array){
//    array.sort();
//    return array.filter(function(value, index, arr){
//         if(index < 1) 
//            return true;
//        else
//            return value != arr[index-1];
//    });
//}

console.log('Loop way: '+unique([1,2,3,2,4,4,3,5]));
console.log('Functional forEach way: '+uniqueFunctional([1,2,3,2,4,4,3,5]));
console.log('Functional reduce way: '+uniqueReduce([1,2,3,2,4,4,3,5]));

console.log("");
console.log("----------------------------");
console.log("");

// `extend` takes two objects and copies the properties of the first object on to the second. It does not return anything.
function extend(objectFrom, objectTo){
	each(objectFrom, function(value, key, obj){
		if(objectTo[key] === undefined){
			objectTo[key] = null;
		}
	});
	console.log(objectFrom, objectTo);
}

extend({1: 'a', 2: 'b', sum: function(){ return this[1]+this[2]}}, {});


console.log("");
console.log("----------------------------");
console.log("--- ANIMAL PROFILE PAGE ----");
console.log("----------------------------");
console.log("");
// Write a function named `welcomeMessage` that takes an animal object
// and returns a string that says "Welcome, \<species>!".
// use your `strCapitalizer` function inside `welcomeMessage` to ensure correct capitalization.

function welcomeMessage(animalObj){
	return 'Welcome, '+strCapitalizer(animalObj.species);
}

var myAnimal = { 
	species: 'duck',
	tagline: 'Afflac',
	noises: ['quack', 'honk', 'sneeze', 'growl']
};
var myLukyAnimal = { 
	species: 'dog',
	tagline: 'I love pooping',
	noises: ['bark', 'BAUUUUUU', 'ZzzZZzZZZzzz', 'WoFF WOFFF'] ,
	relationships: {
		friend: ['duck', 'mouse'],
		match: []
	}
};
var catAnimal = { 
	species: 'cat',
	tagline: 'blabla',
	noises: ['meow'] ,
	relationships: {
		friend: ['duck'],
		match: ['dog']
	}
};
var mouseAnimal = { 
	species: 'mouse',
	tagline: 'can\'t move your computer pointer, dick!',
	noises: ['squit'] ,
	relationships: {
		friend: ['cat'],
		match: ['duck', 'dog']
	}
};
var birdAnimal = { 
	species: 'bird',
	tagline: 'are you sure that you want to park your cabrio car under my ass?',
	noises: ['cip caip'] ,
	relationships: {
		friend: ['cat', 'mouse'],
		match: []
	}
};

var animals = [myAnimal, myLukyAnimal, catAnimal, mouseAnimal, birdAnimal];

console.log(welcomeMessage(myAnimal));

console.log("");
console.log("----------------------------");
console.log("");
// function named `profileData` that takes an animal object like the duck example in the previous exercise. 
// It returns a string that includes both the species and tagline with their corresponding values

function profileData(animalObj){
	var array = [];
	each(animalObj, function(value, key){
		if(typeof value === 'string'){
			array.push(strCapitalizer(key)+": "+strCapitalizer(value));
		} else if(Array.isArray(value)){
			array.push(strCapitalizer(key)+": "+value.map(function(arrayValue){
				return strCapitalizer(arrayValue);
			}).join(", "));
		}
	})
	return array.join(", ");
}

console.log(profileData(myAnimal));

console.log("");
console.log("----------------------------");
console.log("");
// relationshipLogger` that takes an animal object and returns the relationship object if it contains one. 
// Otherwise, have your function log `"You have no relationships :("

function relationshipLogger(animalObj){
	if('relationships' in animalObj){
		return animalObj.relationships;
	} else {
		return 'You have no relationships :(';
	}
}

console.log('No relationship: '+relationshipLogger(myAnimal));
console.log('With relationship: '+relationshipLogger(myLukyAnimal));

console.log("");
console.log("----------------------------");
console.log("");
// Write a function that takes two parameters, the species name and an animal object. 
// The function returns the relationship between the species and animal. 

function relationshipChecker(species, animal){
	var relationship = [];
	if('relationships' in animal){
		each(animal.relationships, function(relationshipArrays, key){
			//console.log(relationshipArrays);
			if(relationshipArrays.indexOf(species) !== -1){
				relationship.push(strCapitalizer(species)+" is a "+key+" of "+strCapitalizer(animal.species));
			}
		});
	}
	return (relationship.length > 0) ? relationship.join(' ') : strCapitalizer(species)+" and "+strCapitalizer(animal.species)+" have no relation yet";
}

console.log(relationshipChecker('dog', catAnimal));
console.log(relationshipChecker('duck', catAnimal));
console.log(relationshipChecker('bird', myLukyAnimal));
console.log(relationshipChecker('mouse', catAnimal));
console.log(relationshipChecker('mouse', birdAnimal));

console.log("");
console.log("----------------------------");
console.log("");
// `addFriend` is a function that allows your animal object to add a friend. 
// It takes a species (this could be just the name or the entire object depending on how you want to architect your app) 
// and an animal object and adds that species on to the animal object
function addRelationshipsObj(animal){
	animal.relationships = {
		friend: [],
		match: []
	};
}
function addFriend(animalToAdd, animalReceiver){
	if(!('relationships' in animalReceiver)){
		/*animalReceiver.relationships = {
			friend: [],
			match: []
		};*/
		addRelationshipsObj(animalReceiver);
	}
	animalReceiver.relationships.friend.push(animalToAdd.species);
}

addFriend(mouseAnimal, myAnimal);
console.log(myAnimal.relationships);

console.log("");
console.log("----------------------------");
console.log("");
// `addMatch` same as addFriend but for matches
function addMatch(animalToAdd, animalReceiver){
	if(!('relationships' in animalReceiver)){
		/*animalReceiver.relationships = {
			friend: [],
			match: []
		};*/
		addRelationshipsObj(animalReceiver);
	}
	animalReceiver.relationships.match.push(animalToAdd.species);
}

addMatch(catAnimal, myLukyAnimal);
console.log(myLukyAnimal.relationships);

console.log("");
console.log("----------------------------");
console.log("");
// `nonFriends` is a function that shows which animals in your collection are not in your friendlist.
function nonFriends(user){
	console.log('ADD NEW FRIENDS!')
	animals.filter(function(animal){
		return user.relationships.friend.indexOf(animal.species) < 0 && animal.species !== user.species;
	}).forEach(function(nonFriend, i){
		console.log('');
		console.log(i+1+'.\tName: '+capitalizeVals(nonFriend.species));
		console.log('\tTagline: '+capitalizeVals(nonFriend.tagline));
		console.log('\tNoises: ');
		nonFriend.noises.forEach(function(noise){
			console.log('\t\t- '+capitalizeVals(noise));
		});
		var commonFriends = 0, commonFriendsNames = [];
		nonFriend.relationships.friend.forEach(function(friend){
			if(user.relationships.friend.indexOf(friend) > 0){
				commonFriends++;
				commonFriendsNames.push(friend);
			}
		})
		console.log('\tYou have '+commonFriends+' friend/s in common:');
		commonFriendsNames.forEach(function(name){
			console.log('\t\t- '+name);
		});
		//console.log('');
	})
};

nonFriends(myLukyAnimal)

console.log("");
console.log("----------------------------");
console.log("");
// `search` takes a seach query and returns an array of animal objects that contain an exact match 
// anywhere in the body of the object. 


function search(query){
	function mathcAString(string, query){
		if(string.match(query) !== null){
			return true;
		}
		return false;
	}
	function extractStrings(value){
		//console.log(value);
		if(typeof value === 'string'){
			return mathcAString(value, query);
		} else {
			return find(value, extractStrings);
		}
	}
	return animals.filter(function(animal){
		var result = find(animal, extractStrings);
		return (result !== false) ? true : false;
	});
}


console.log(search('caip'));

console.log("");
console.log("----------------------------");
console.log("");
// Write a function that ensures that no friends in your friendslist are repeated.
function removeDoubledFriends(array){
	return uniqueReduce(array);
}

console.log(removeDoubledFriends(['dog', 'cat', 'dogs', 'duck', 'cat']))

console.log("");
console.log("----------------------------");
console.log("");
// Create a function that takes your animal object, the key you wish to change and the new value.
// if the the property doesn't yet exist, add it! 
function changeProfileData(user, keyToChange, newValue){
	function findKey(value, key, collection){
		if(key === keyToChange){
			collection[key] = newValue;
			return true;
		} else if(typeof value === 'object'){
			return find(user[key], findKey);
		}
	}
	if(find(user, findKey) === false){
		user[keyToChange] = newValue;
	}
}

changeProfileData(myLukyAnimal, 'friend', []);

console.log("");
console.log("----------------------------");
console.log("");
// Write a function that creates a new animal object and adds it to the animals collection. 
// You might want to pass in the species values, friends, etc as arguments into your function.

function newAnimal(obj){
	var animal = {}
	each(obj, function(value, key){
		animal[key] = value;
	});
	animals.push(animal);
}

newAnimal({
	species: 'tiger',
	tagline: 'brutto becco',
	noises: ['roar']
});

console.log("");
console.log("----------------------------");
console.log("");
// `cleanseData` is a function that takes the animals collection and a series of key names. 
// It will remove any properties on the animal objects that are not given as arguments
function cleanseData(){
	function checkProperties(value, key, collection){
		if(propsToDelete.indexOf(key) !== -1){
			delete collection[key]
		} else if(typeof value === 'object'){
			return find(value, checkProperties);
		}
	}

	var propsToDelete = Array.prototype.slice.call(arguments);
	
	animals.forEach(function(animal){
		find(animal, checkProperties);
	});
	return animals;
}


console.log(cleanseData('friend', 'match'));



