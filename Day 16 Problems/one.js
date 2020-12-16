const fs = require('fs');

var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n\r\n');

var ranges = inputArray[0].split('\r\n');
var nearbyTickets = inputArray[2].split('\r\n');
nearbyTickets.shift();

var validSet = new Set();
var errorRate = 0;
for(var i = 0; i < ranges.length; i++) {
    var splitRanges = ranges[i].split(': ')[1].split(' or ');
    const [range1Start, range1End] = splitRanges[0].split('-').map(Number);
    const [range2Start, range2End] = splitRanges[1].split('-').map(Number);
    
    for(var x = range1Start; x <= range1End; x++)
        validSet.add(x);

    for(var x = range2Start; x <= range2End; x++)
        validSet.add(x);
}

nearbyTickets.forEach(ticket => {
    var ticketValues = ticket.split(',').map(Number);
    ticketValues.forEach(val => {
        if(!validSet.has(val)) {
            errorRate += val;
        }
    })
})

console.log(errorRate);