const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var inputArr = [];
file.on('line', line => {
    inputArr.push(parseInt(line));
});

const solution = 248131121;

file.on('close', () => {
    var values = [];
    var sum = 0;
    var i = 0;
    while(sum !== solution) {
        var next = inputArr[i++];
        values.push(next);
        sum += next;
        while(sum > solution) {
            sum -= values[0];
            values.shift();
        }
    }

    var sorted = values.sort((a, b) => a-b);
    console.log('Sum: ', (sorted[0] + sorted[sorted.length-1]));
});
