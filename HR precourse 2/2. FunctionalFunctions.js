//function exercises with callbacks
===============================================
//Callbacks in JavaScript are functions that are passed as arguments to other functions.
//There's a function called setTimeout(), it takes two arguments
//the first is the function to be performed
//the second is the amount of milliseconds that will elapse
// before the function is called back and run
setTimeout(callback, 5000);
//will run the callback function after 5 seconds
//You can also write setTimeout with anonymous functions
setTimeout(function(){}, 5000);

//lets have fun with callbacks, initialize an array
//called allData
==============================================
var allData = [];
//Write a function called logIt accepts an argument named userData
//if the input is a string, console.log the input
//if the input is an object, console.log the key value pairs
//like so 'key:value'
function each(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i<collection.length; i++){
			callback(collection[i], i, collection);
		}
	} else {
		for(var key in collection){
			callback(collection[key], key, collection);
		}
	}
}

function logIt(userData){
	if(typeof userData === 'string'){
		console.log(userData);
	} else if(typeof userData === 'object'){
		each(userData, function(value, key){
			console.log(key+": "+value);
		});
	}
}
//now write a function called getInput that takes two args
//options and the callback
//have this function push options into the allData array
//and then run the callback function with options as its only
//argument
function getInput(arg, callback){
	allData.push(arg);
	callback(arg);
}

// When we call the getInput function, we pass logIt as a parameter.
// So logStuff will be the function that will called back
// (or executed) inside the getInput function

// getInput ({name:"Will", speciality:"Busting a move"}, logIt);
//  name: Will
// speciality: Busting a move

// getInput('cool', logIt);
// cool


==============================================
//Let's do some math stuff
//We've written these functions before so it 
//should be a piece of cake right?
//write a function named range that takes two numbers
//and returns an array of the numbers populated with
//the range from the first to the second
function range(start, stop){
	for(start, arr = []; start <= stop; start++){
		arr.push(start);
	}
	return arr;
}

function range(start, stop){
	var range = [start];
	range.forEach(function cb(number, index, arr){
		var n = number+arr.length;
		if(n <= stop){
			arr.push(n);
			arr.forEach(cb);
		}
	});
	return range;
}

//now create a function called sum that takes an
// array and returns the sum of that array
function sum(arr){
	return arr.reduce(function(sum, next){
		return sum+next;
	});
}
//now chain together sum() and range() so that
//you have a function that calculates the sum of all
// numbers in the range
sum(range(2, 22));

//So now that we've seen we can chain methods and 
//put use functions as arguments, let's play with
//some arguments
===============================================




//function exercises with scope
//What will the value of x be after running f1();
//What about f2();
================================================
var x = 'outside';
var f1 = function() {
var x = 'inside f1';
};
var f2 = function() {
x = 'inside f2';
};

var name = 'Will';


write a function that takes a series 
of arguments and returns an arr
function toArray(){
	return Array.prototype.slice.call(arguments, 0);
}
toArray(1,2,3,4,5,6) => [1,2,3,4,5,6]

=================================================
write a function that return the type of
the given argument
function toType(arg){
	return (Array.isArray(arg)) ? 'array' : typeof arg;
}
type({}) => 'object'
type([]) => 'array'
=================================================
***HARD CHALLENGES BELOW***
=================================================
write a function called applied that mimics the
functionality of apply (without the context part)
function applied(func, argsArray){
	argsArray.forEach(function(value, index){
		func = func.bind(null, value);
	})
	return func();
}

applied(func, [arr]) => func(arr1,arr2,arr3)
=================================================
write a function called partial that mimics this 
behavior //TODO: more details

var fullName = function ( firstName, lastName ) {
  return firstName + ' ' + lastName;
};

function partial(func, arg){
	return func.bind(null, arg);
}
var billName = partial( fullName, 'Bill' );

billName( 'Smith' ); // "Bill Smith"
billName( 'Clinton' ); // "Bill Clinton"

=================================================
write a function that adds the properties of a second
object to the first one
var obj1 = {'first': 1, 'second': 2},
obj2 = {'another': 'one', 'surprise': 'combined'}

function extend(main, secondary){
	return _.reduce(secondary, function(obj, nextVal, nextIndex){
		obj[nextIndex] = nextVal;
		return obj;
	}, main);
}
extend(obj1, obj2) => {'first': 1, 'second': 2, 'another': 'one', 'surprise': 'combined'}
=================================================
write a function that takes a function and only
allows that function to be called once. 
function once(func){
	var isCalled = false;
	return function(){
		if(!isCalled){
			func.apply(null, Array.prototype.slice.call(arguments));
			isCalled = true;
		}
	}
}
=================================================
(EXTRA CREDIT)
write a function that mimics throttle
Returns a new function that can only be invoked 
once within milliseconds. 
Any calls that occur before the allotted 
time has passed are disregarded. 
The handler will be invoked at the end of the delay.

function throttle(func, interval){
	var toExecute = true,
		queue = false;
	var result;
	return function doThrottle(){
		var args = Array.prototype.slice.call(arguments);
		
		if(toExecute){
			toExecute = false;
			queue = false;
			result = func.apply(null, args);
			startTimer(interval);
		} else {
			queue = true;
		}

		function startTimer(interval){
			setTimeout(function(){
				toExecute = true;
				if(queue){
					//console.log(queue);
					result = func.apply(null, args);
				}
			}, interval);
		}

		return result;

	}
}
=================================================
(EXTRA CREDIT)
compose(fn1, fn2, ..., fnN)
Compose multiple functions to create a new function. 
For example, wu.compose(f, g, h)(x) is equivalent 
to f(g(h(x))).

>>> function square(x) { return x * x; }
>>> function add2(x) { return x + 2; }
>>> wu.compose(square, add2)(5);
49
>>> wu.compose(add2, square)(5);
27

function compose(){
	var funcToCompose = Array.prototype.slice.call(arguments);

	return function(){
		var args = Array.prototype.slice.call(arguments);
		var result;
		return funcToCompose.reduceRight(function(result, nextFunc, index){
			return (result === undefined) ? nextFunc.apply(null, args) : nextFunc(result);
		}, undefined)
	}
}

