var Toaster = function(){
	var numberOfToasts = 0;
	var isOn = false;
	return {
		makeToast: function(){
			if(isOn){
				numberOfToasts++;
				console.log("Hope you are hungry :)");
			} else {
				console.log("I can't make a toast if i'm off :(");
			}
		},
		howManyToasts: function(){
			console.log("Since first time i've made for you "+numberOfToasts+" toast/s");
		},
		turnOn: function(){
			if(isOn){
				console.log("Already ON!");
			} else {
				isOn = true;
				console.log("I'm ready to toast!");
			}
		},
		turnOff: function(){
			if(isOn){
				isOn = false;
				console.log("See you next lunch :D");
			} else {
				console.log("already off");
			}
		}
	};
}

var myToaster = Toaster();
myToaster.makeToast();
myToaster.turnOn();
myToaster.makeToast();
myToaster.makeToast();
myToaster.howManyToasts();
myToaster.makeToast();
myToaster.howManyToasts();
myToaster.turnOff();
myToaster.makeToast();