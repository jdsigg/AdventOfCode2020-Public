const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var inputArr = [];
file.on('line', line => {
    inputArr.push(parseInt(line));
});

findPair = (i, j, next) => {
    var value = inputArr[next];
    for(var x = i; x <= j; x++) {
        for(var y = i; y <= j; y++) {   
            if(inputArr[x] + inputArr[y] === value)
                return true;
        }
    }
    return false;
} 

file.on('close', () => {
    var i = 0;
    var j = 24;
    var next = 25;
    while(true) {
        var found = findPair(i++, j++, next++);
        if(!found) {
            console.log('Num: ', inputArr[next-1]);
            process.exit(0);
        }
    }
});
