const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var answerSet = new Set();
var total = 0;
file.on('line', (line) => {
    if(line.length === 0) {
        total += answerSet.size;
        answerSet = new Set();
    } else {
        for(var i = 0; i < line.length; i++) 
            answerSet.add(line.charAt(i));
    }
})

file.on('close', () => {
    total += answerSet.size;
    console.log('Sum: ', total)
});