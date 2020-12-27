const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var answerMap = new Map();
var numPeople = 0;
var total = 0;
file.on('line', (line) => {
    if(line.length === 0) {
        const keys = [...answerMap.keys()];
        keys.forEach(key => {
            if(answerMap.get(key) === numPeople)
                total++;
        });
        answerMap = new Map();
        numPeople = 0;
    } else {
        numPeople++;
        for(var i = 0; i < line.length; i++) {
            var char = line.charAt(i);
            if(answerMap.has(char)) answerMap.set(char, answerMap.get(char) + 1);
            else answerMap.set(char, 1);
        }
    }
})

file.on('close', () => {
    const keys = [...answerMap.keys()];
        keys.forEach(key => {
            if(answerMap.get(key) === numPeople)
                total++;
        });
    console.log('Sum: ', total)
});