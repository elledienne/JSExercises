function smallestDiv(){
    var number = 0;
    var found = false;
    while(!found){
        number += 20;
        for(var i = 20; i>0; i--){
            if(number % i == 0){
                found = true;
            } else {
                found = false;
                break;
            }
        }
    }
    return number;
}