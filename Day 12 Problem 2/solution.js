const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var shipTravel = {
    'N': 0,
    'E': 0,
    'S': 0,
    'W': 0,
}

var waypoint = {
    'N': 1,
    'E': 10,
    'S': 0,
    'W': 0,
}

var directions = ['N', 'E', 'S' , 'W'];

file.on('line', line => {
    var instruction = line.charAt(0);
    var value = parseInt(line.substring(1));
    switch(instruction){
        case 'N':
        case 'E':
        case 'S':
        case 'W':
            waypoint[instruction] += value;
            break;
        case 'L':
            var obj = {};
            directions.forEach((character, index) => {
                var direction = index * 90;
                var newDirection = directions[(direction + (360 - value)) / 90 % 4];
                obj[newDirection] = waypoint[character];
            });
            waypoint = obj;
            break;
        case 'R':
            var obj = {};
            directions.forEach((character, index) => {
                var direction = index * 90;
                var newDirection = directions[(direction + value) / 90 % 4];
                obj[newDirection] = waypoint[character];
            });
            waypoint = obj;
            break;
        case 'F':
            Object.keys(waypoint).forEach(key => shipTravel[key] += value * waypoint[key]);
            break;
    }
});

file.on('close', () => {
    var eastWest = Math.abs(shipTravel['E'] - shipTravel['W']);
    var northSouth = Math.abs(shipTravel['N'] - shipTravel['S']);
    console.log('Manhattan Distance: ', northSouth + eastWest);
});