var input = [1, 6, 7, 2, 4, 8, 3, 5, 9];
for(var i = 10; i <= 1000000; i++) {
    input.push(i);
}

var dict = {};
for(var i = 0; i < input.length - 1; i++)
    dict[input[i]] = input[i+1];
dict[input[input.length-1]] = input[0];

var currentCup = input[0];
for(var i = 0; i < 10000000; i++) {
    var cupsToMove = [
        dict[currentCup], 
        dict[dict[currentCup]], 
        dict[dict[dict[currentCup]]]
    ];
    var destCup = currentCup;
    
    while(destCup === currentCup || cupsToMove.includes(destCup)) {
        destCup--;
        if(destCup === 0) destCup = input.length;
    }
    dict[currentCup] =  dict[cupsToMove[2]];
    dict[cupsToMove[2]] =  dict[destCup];
    dict[destCup] =  cupsToMove[0];
    currentCup = dict[currentCup]
}

console.log(
    dict['1'] 
    * 
    dict[dict['1']]
)