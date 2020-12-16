const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var inputArr = [];
file.on('line', line => {
    inputArr.push(parseInt(line));
});

file.on('close', () => {
    inputArr.sort((a, b) => a - b);
    var differenceOfOne = 1;
    var differenceOfThree = 1;
    for(var i = 0; i < inputArr.length - 1; i++) {
        var current = inputArr[i];
        var next = inputArr[i+1];
        if(current + 1 === next) differenceOfOne++;
        else if(current + 3 === next) differenceOfThree++
    }
    console.log('Product: ', differenceOfOne*differenceOfThree);
});
