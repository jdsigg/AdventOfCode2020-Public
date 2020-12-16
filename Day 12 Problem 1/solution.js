const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var totals = {
    'N': 0,
    'E': 0,
    'S': 0,
    'W': 0,
}

var directions = ['N', 'E', 'S' , 'W'];
var facing = 1;

file.on('line', line => {
    var instruction = line.charAt(0);
    var value = parseInt(line.substring(1));
    switch(instruction){
        case 'N':
        case 'E':
        case 'S':
        case 'W':
            totals[instruction] += value;
            break;
        case 'L':
            facing = (facing * 90 + (360 - value)) / 90 % 4;
            break;
        case 'R':
            facing = (facing * 90 + value) / 90 % 4;
            break;
        case 'F':
            totals[directions[facing]] += value;
            break;
    }
});

file.on('close', () => {
    var eastWest = Math.abs(totals['E'] - totals['W']);
    var northSouth = Math.abs(totals['N'] - totals['S']);
    console.log('Manhattan Distance: ', northSouth + eastWest);
});