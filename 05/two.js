const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

const convertRow = row => {
    var replaceB = row.replace(/B/g, '1');
    var firstSevenBinary = replaceB.replace(/F/g, '0');
    return parseInt(firstSevenBinary, 2);
}

const convertCol = col => {
    var replaceR = col.replace(/R/g, '1');
    var lastThreeBinary = replaceR.replace(/L/g, '0');
    return parseInt(lastThreeBinary, 2);
}

var ids = [];
file.on('line', (line) => {
    var rowNumber = convertRow(line.substring(0, 7));
    var colNumber = convertCol(line.substring(7));
    ids.push(rowNumber * 8 + colNumber);
});

file.on('close', () => {
    ids.sort((a, b) => a - b);
    var i = 0;
    while(ids[i]+1 == ids[i+1])
        i++;
    
    console.log('My ID: ', ids[i] + 1);
});

