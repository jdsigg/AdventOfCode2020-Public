const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var instructionSet = [];
file.on('line', line => {
    instructionSet.push(line);
});

var currentLine = 0;
var linesRead = new Set();
var accumulator = 0;

file.on('close', () => {
    while(!linesRead.has(currentLine)) {
        var instruction = instructionSet[currentLine].split(' ');
        var type = instruction[0];
        var value = parseInt(instruction[1]);

        linesRead.add(currentLine);
        if(type === 'acc') {
            currentLine++;
            accumulator += value;
        } else if(type === 'jmp') {
            currentLine += value;
        } else if(type === 'nop') {
            currentLine++;
        }
    }
    console.log('Accumulator: ', accumulator);
});
