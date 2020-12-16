const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var set = new Set();
const desiredSum = 2020;
file.on('line', (line) => {
    var lineNum = parseInt(line);
    var lookUp = desiredSum - lineNum;
    if(set.has(lookUp)) {
        console.log('Number: ', lineNum * lookUp);
        process.exit(0);
    } else
        set.add(lineNum);
});