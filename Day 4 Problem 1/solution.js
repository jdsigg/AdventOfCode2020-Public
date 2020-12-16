const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

const validSet = new Set(['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']);

var totalValid = 0;
var checkedSet = new Set();
file.on('line', (line) => {
    if(line.length === 0) {
        if(checkedSet.size === 7)
            totalValid++;
        
        checkedSet = new Set();
    } else {
        var pairs = line.split(' ');
        pairs.forEach(pair => {
            var key = pair.split(':')[0];
            if(validSet.has(key) && !checkedSet.has(key))
                checkedSet.add(key);
        });
    }
});

file.on('close', () => {
    if(checkedSet.size === 7)
        totalValid++;
    console.log('Valid Passports: ', totalValid);
});