const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n');

var set = new Set();
inputArray.forEach(line => {
    var arr = line.split('');
    var x = 0;
    var y = 0;
    for(var i = 0; i < arr.length; i++) {
        var charOne = arr[i];
        var charTwo = arr[i+1] === undefined ? '' : arr[i+1];
        var str = charOne + charTwo;

        if(str === 'se') {
            x++;
            y--;
            i++;
        } else if(str === 'sw') {
            x--;
            y--;
            i++
        } else if(str === 'ne') {
            x++;
            y++;
            i++;
        } else if(str === 'nw') {
            x--;
            y++;
            i++;
        } else if(charOne === 'e') {
            x += 2;
        } else if(charOne === 'w') {
            x -= 2;
        }
    }
    var nextPoint = `${x},${y}`;
    if(set.has(nextPoint))
        set.delete(nextPoint)
    else
        set.add(nextPoint)
})

findSurroundingBlackTiles = (x, y) => {
    var total = 0;
    if(arr[x + 2][y] === 'x') total++;

    if(arr[x - 2][y] === 'x') total++;

    if(arr[x + 1][y + 1] === 'x') total++;

    if(arr[x + 1][y - 1] === 'x') total++;

    if(arr[x - 1][y + 1] === 'x') total++;

    if(arr[x - 1][y - 1] === 'x') total++;

    return total;
}

var arr = [];
for(var i = 0; i < 801; i++)
    arr.push(new Array(801).fill('0'))

set.forEach(point => {
    var [x, y] = point.split(',').map(Number);
    arr[x + 400][y + 400] = 'x'
});

for(x = 0; x < 100; x++) {

    var newArr = JSON.parse(JSON.stringify(arr));
    var totalBlackTiles = 0;
    for(var i = 2; i < arr.length - 2; i++) {
        for(var j = 2; j < arr.length - 2; j++) {
            var curr = arr[i][j];
            var match = findSurroundingBlackTiles(i, j);

            if(curr === '0' && match === 2) { newArr[i][j] = 'x'; totalBlackTiles++;}
            else if(curr === 'x' && (match === 0 || match > 2)) newArr[i][j] = '0';
            else {
                if(curr === 'x') totalBlackTiles++;
                
                newArr[i][j] = curr;
            }
        }
    }
    arr = newArr;
}

console.log(totalBlackTiles);