// The once is pretty simple: returns a function that can be called only one time (it's a closure).
// What's cool about this, for me, it's that uses the APPLY method to pass arguments to the callback
// in this way the once() function can work with any function, reguardless of the numbers of parameters that it thakes!

function once(callback){
	var executed = false;
  	return function(){
      if(!executed){
        executed = true;
        console.log("executing");
        return callback.apply(null, arguments);
      }
      return;
    };
}

var chargeCreditCard = function(num, price){
	console.log("Paying..." + num + " "+ price);
	return;
  };

var processPaymentOnce = once(chargeCreditCard);
processPaymentOnce(123456789012, 200);