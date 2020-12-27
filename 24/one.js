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

console.log(set.size);