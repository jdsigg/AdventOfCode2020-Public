const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

//For each i, move right that many times when slope is incremented (only increment last one every other)
var slopes =    [1, 3, 5, 7, 1];
var nextSlope = [1, 3, 5, 7, 1];
var hits =      [0, 0, 0, 0, 0];
var firstLine = true;
var last = nextSlope.length - 1;
var checkLast = false;

file.on('line', (line) => {
    if(firstLine) firstLine = false;
    else {
        nextSlope.forEach((value, index) => {
            var character = line.charAt(value);
            if(index !== last || checkLast) {
                if(character === '#')
                    hits[index]++;

                nextSlope[index] = (nextSlope[index] + slopes[index]) % line.length;
                if(index === last && checkLast) checkLast = !checkLast;
            } else {
                checkLast = !checkLast;
            }
        })
    }
});

file.on('close', () => console.log('Product: ', hits.reduce((accumulator, currentValue) => accumulator * currentValue)));