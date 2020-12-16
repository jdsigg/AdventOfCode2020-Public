const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var seats = [];
file.on('line', line => {
    var row = line.split('');
    seats.push(row);
});

countAdjacent = (i, j, val) => {
    var total = 0;

    if(i > 0 && j > 0 && seats[i-1][j-1] === val) total++;
    
    if(i > 0 && seats[i-1][j] === val) total++;
    
    if(i > 0 && j < seats[i].length - 1 && seats[i - 1][j + 1] === val) total++;
    
    if(j > 0 && seats[i][j - 1] === val) total++;
    
    if(j < seats[i].length - 1 && seats[i][j+1] === val) total++;
    
    if(j > 0 && i < seats.length - 1 && seats[i + 1][j - 1] === val) total++;
    
    if(i < seats.length - 1 && seats[i + 1][j] === val) total++;
    
    if(i < seats.length - 1 && j < seats[i].length - 1 && seats[i + 1][j + 1] === val) total++;
    
    return total;
}

file.on('close', () => {
    while(true) {
        var nextSeats = JSON.parse(JSON.stringify(seats));
        var noChange = true;
        var occupiedSeats = 0;
        for(var i = 0; i < seats.length; i++) {
            for(var j = 0; j < seats[i].length; j++) {
                var countFilled = countAdjacent(i, j, '#');
                if(seats[i][j] === 'L' && countFilled === 0) {
                    nextSeats[i][j] = '#';
                    noChange = false;
                }
                if(seats[i][j] === '#' && countFilled >= 4) {
                    nextSeats[i][j] = 'L';
                    noChange = false;
                }
                if(nextSeats[i][j] === '#')
                    occupiedSeats++;
            }
        }
        if(noChange) {
            console.log('Occupied: ', occupiedSeats);
            break;
        }
        seats = JSON.parse(JSON.stringify(nextSeats));
    }
});