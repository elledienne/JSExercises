// Return an array with the integers in range (a, b)

function range(a, b){
  if(b - a == 2){
    return [a+1];
  } else {
    var array = range(a, b-1);
    array.push(b-1);
    return array;
  }
}