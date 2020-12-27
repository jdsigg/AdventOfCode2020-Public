const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n').map(line => line.split(''));

var points = {};
for(var i = 0; i < inputArray.length; i++) {
    for(var j = 0; j < inputArray[i].length; j++) {
        points[`${i},${j},0`] = inputArray[i][j];
    }
}

var xMax = inputArray[0].length - 1;
var xMin = 0;
var yMax = inputArray[0].length - 1;
var yMin = 0;
var zMax = 0;
var zMin = 0;

var pointsNew;
var total;

for(var i = 0; i < 6; i++) {
    xMax++;    yMax++;    zMax++;
    xMin--;    yMin--;    zMin--;
    pointsNew = {};
    total = 0;

    for(var x = xMin; x <= xMax; x++) {
        for(var y = yMin; y <= yMax; y++) {
            for(var z = zMin; z <= zMax; z++) {
                var occupiedAround = 0;
                for(var pX = x - 1; pX <= x + 1; pX++)
                    for(var pY = y - 1; pY <= y + 1; pY++)
                        for(var pZ = z - 1; pZ <= z + 1; pZ++)
                            if(!(x === pX && y === pY && z === pZ) && points[`${pX},${pY},${pZ}`] === '#')
                                occupiedAround++;
                
                if(points[`${x},${y},${z}`] === '#') {
                    if(occupiedAround === 2 || occupiedAround === 3) {
                        pointsNew[`${x},${y},${z}`] = '#';
                        total++;
                    } else {
                        pointsNew[`${x},${y},${z}`] = '.';
                    }
                } else {
                    if(occupiedAround === 3) {
                        pointsNew[`${x},${y},${z}`] = '#';
                        total++;
                    } else {
                        pointsNew[`${x},${y},${z}`] = '.';
                    }
                }
            }
        }
    }

    points = pointsNew;
}

console.log(total);