const fs = require('fs');

var inputArray = fs.readFileSync('./input.txt').toString().split('\n');

var departure = parseInt(inputArray[0]);
var nums = inputArray[1].split(',').filter(i => i !== 'x').map(i => parseInt(i));

var earliestTime = Number.POSITIVE_INFINITY;
var earliestId = -1;
var departureMinutes = 0;
nums.forEach(i => {
    var minutesOff = departure % i;
    var roundDown = Math.floor(departure / i) * i + i;

    if(roundDown < earliestTime) {
        earliestTime = roundDown;
        earliestId = i;
        departureMinutes = i - minutesOff;
    }
})

console.log(earliestId * departureMinutes);