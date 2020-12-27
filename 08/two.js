const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var instructionSet = [];
file.on('line', line => {
    instructionSet.push(line);
});

var lastReplacedInstruction = 0;
var accumulator;

file.on('close', () => {
    while(true) {
        var currentInstructionSet = [...instructionSet];
        for(var i = lastReplacedInstruction; i < currentInstructionSet.length; i++) {
            var instruction = currentInstructionSet[i].split(' ');
            var type = instruction[0];
            var value = instruction[1];
            if(type === 'nop') {
                lastReplacedInstruction = i+1;
                var newInstruction = `jmp ${value}`;
                currentInstructionSet[i] = newInstruction;
                break;
            } else if(type === 'jmp') {
                lastReplacedInstruction = i+1;
                var newInstruction = `nop ${value}`;
                currentInstructionSet[i] = newInstruction;
                break;
            }
        }

        var currentLine = 0;
        var linesRead = new Set();
        accumulator = 0;

        while(!linesRead.has(currentLine)) {
            if(currentLine === currentInstructionSet.length) {
                console.log('Accumulator: ', accumulator);
                process.exit(0);
            }
            var instruction = currentInstructionSet[currentLine].split(' ');
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
    }
});