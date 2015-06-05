write a function that takes two parameters, one, 'arr', is an array
and the second, 'x',  is the number. The function returns
the first 'x' indices of the array
firstIndex([1,2,3,4], 3) => [1,2,3]

function firstNths(arr, number){
  return arr.splice(0, number);
}

write a function that returns the last elements of an 
array using the previous function (note: you cannot 
  use slice here!)

function lastNths(arr, number){
  if(arr.length == number){
    return arr.reverse;
  } else {
    arr.shift();
    console.log(arr);
    lastNths(arr, number);
  }
}
lastIndex([1,2,3,4], 3) => [4,3,2]

write a function that will merge the first object into
the second object. If the property already exists, on the second
object, do not overwrite it.

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

function mergeObj(toMerge, receiver){
  each(toMerge, function(value, key){
    receiver[key] = (receiver[key] === undefined) ? value : receiver[key];
  });
}
rewrite the previous function using _.each

write a function that takes a nested array and returns
a one dimentional array.
function flattenArray(arr){
  var result = [];
  each(arr, function flatten(value, index, collection){
    if(Array.isArray(value)){
      each(value, flatten);
    } else {
      result.push(value);
    }
  });
  return result;
}

function flattenByReduce(arr){
  return arr.reduce(function(flattened, nextVal){
    return flattened.concat(Array.isArray(nextVal) ? flattenByReduce(nextVal) : nextVal);
  }, []);
}

use _.map to change the 'name' property to your name and the 
'isAwesome' property to true of these objects in this array of 
objects - 
var mixedCollection = [
  {loves: 'iceCream', name: 'Billy', isAwesome: false},
  {loves: 'sandwiches', name: 'Albrey', isAwesome: false},
  {loves: 'pizza', name: 'Spencer', isAwesome: false},
  {loves: 'strawberries', name: 'Fred', isAwesome: false}
];

function personalize(arr){
  return arr.map(function(value, index){
    value.name = 'lor';
    value.isAwesome = true;
    return value;
  });
}

write a function that takes a random number(1-10) of randomly
generated num inputs (1-10). With those inputs, you add 
them all together and return the result.
function generateRandoms(howMany){
  function random(array){
    var rnd = Math.floor(Math.random() * howMany+1);
    if(array.indexOf(rnd) < 0){
      return rnd;
    } else {
      return random(array);
    }
  }

  var randomArr = new Array(howMany);
  each(randomArr, function(val, i, arr){
    arr[i] = random(arr);
  });
  return randomArr;
}

function sumRandom(){
  var arr = Array.prototype.slice.call(arguments);
  return arr.reduce(function(sum, next){
    return sum+next;
  });
}

function randomAdder(howMany){
  return sumRandom.apply(null, generateRandoms(howMany));
}
randomAdder(1,4,7,2) => 14

generate the random numbers by using this function:
var generateNum = function(){
  return Math.floor(Math.random() * 11);
}

step 1: create an array of catNames:

var catNames = ['snow', 'honey', 'blacky', 'bitch'];

//step 2: use _.map to loop through the catnames and apply it
//to the CatMaker function. This will return an array of cat objects

var catObjs = catNames.map(function(value){
  return CatMaker(value);
});

function CatMaker(name) {
    var owner = "me";
    return {
        speak: function () {
            console.log("Meow my name is " + name +" and my owner is" + owner);
        },
        changeOwner: function(newOwner){
          owner = newOwner;
        }
    };
}

//step 3: use _.each to loop through all the cat objects 
//and call the speak method.

_.each(catObjs, function(obj){
  obj.speak();
});

re-write the makeStopWatch exercise from class yesterday
without looking (it will be difficult but it will not help you
  if you do not try for at least 20min to do it on your own. 
    Instead ask for help rather than peek.) 
Remember, you need to have a function called
stop watch that you can access outside of the parent function so
that you can check the number of seconds that have elapsed. 

now implement it using the module pattern (return an object with
a method called stopwatch that returns the elapsed time). Now, 
add another priveleged method that resets the timer and
another one that pauses the timer and one that restarts the 
timer after being paused.

function CreateStopWatch(){
  var timeElapsed,
      timeStartPause,
      timePaused = 0, 
      inPause = false,
      logID;
  
  function calcTime(newest, oldest){
    return Math.round((newest - oldest) / 1000);
  }

  return {
    start: function(){
      timeElapsed = new Date();
    },
    checkElapsedTime: function(){
      //var time = (new Date() - timeElapsed) / 1000;
      var time = calcTime(new Date(), timeElapsed);
      if(inPause){
        console.log('The stopwatch is paused, use restart()!');
      } else {
        return time - timePaused;
      }
    },
    reset: function(){
      timePaused = 0;
      this.start();
    },
    pause: function(){
      if(!inPause){
        inPause = true;
        timeStartPause = new Date();
      }
    },
    restart: function(){
      if(inPause){
        inPause = false;
        //timePaused += (new Date() - timeStartPause) / 1000;
        timePaused += calcTime(new Date(), timeStartPause);
      }
    },
    logEverySecond: function(){
      var self = this;
      logID = setInterval(function(){
        //console.log(this);
        console.log(self.checkElapsedTime());
      }, 1000);
    },
    stopLog: function(){
      clearInterval(logID);
    }

  };
}




