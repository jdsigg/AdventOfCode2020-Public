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

countFirstSeenSeats = (i, j, val) => {
    var total = 0;
    var holdI = i;
    var holdJ = j;


    while(holdI > 0 && holdJ > 0) {
        if(seats[holdI - 1][holdJ - 1] !== '.') {
            if(seats[holdI - 1][holdJ - 1] === val)
                total++;
            break;
        }
        holdI--;
        holdJ--;
    }

    holdI = i;
    holdJ = j;

    while(holdI > 0) {
        if(seats[holdI-1][holdJ] !== '.') {
            if(seats[holdI-1][holdJ] === val) total++;
            break;
        }
        holdI--;
    }

    holdI = i;
    holdJ = j;

    while(holdI > 0 && holdJ < seats[holdI].length - 1) {
        if(seats[holdI - 1][holdJ + 1] !== '.') {
            if(seats[holdI - 1][holdJ + 1] === val) total++;
            break;
        }
        holdI--;
        holdJ++;
    }

    holdI = i;
    holdJ = j;

    while(holdJ > 0) {
        if(seats[holdI][holdJ - 1] !== '.') {
            if(seats[holdI][holdJ - 1] === val) total++;
            break;
        }
        holdJ--;
    }

    holdI = i;
    holdJ = j;

    while(holdJ < seats[holdI].length - 1) {
        if(seats[holdI][holdJ+1] !== '.') {
            if(seats[holdI][holdJ+1] === val) total++;
            break;
        }
        holdJ++;
    }

    holdI = i;
    holdJ = j;

    while(holdJ > 0 && holdI < seats.length - 1) {
        if(seats[holdI + 1][holdJ - 1] !== '.') {
            if(seats[holdI + 1][holdJ - 1] === val) total++;
            break;
        }
        holdJ--;
        holdI++;
    }

    holdI = i;
    holdJ = j;

    while(holdI < seats.length - 1) {
        if(seats[holdI + 1][holdJ] !== '.'){
            if(seats[holdI + 1][holdJ] === val) total++;
            break;
        }
        holdI++;
    }

    holdI = i;
    holdJ = j;

    while(holdI < seats.length - 1 && holdJ < seats[holdI].length - 1) {
        if(seats[holdI + 1][holdJ + 1] !== '.') {
            if(seats[holdI + 1][holdJ + 1] === val) total++;
            break;
        }
        holdI++;
        holdJ++;
    }

    return total;
}

file.on('close', () => {
    while(true) {
        var nextSeats = JSON.parse(JSON.stringify(seats));
        var noChange = true;
        var occupiedSeats = 0;
        for(var i = 0; i < seats.length; i++) {
            for(var j = 0; j < seats[i].length; j++) {
                var countFilled = countFirstSeenSeats(i, j, '#');
                if(seats[i][j] === 'L' && countFilled === 0) {
                    nextSeats[i][j] = '#';
                    noChange = false;
                }
                if(seats[i][j] === '#' && countFilled >= 5) {
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