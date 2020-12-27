const fs = require('fs');

var inputArray = fs.readFileSync('./input.txt').toString().split('\n');

var map = new Map();
var mask = '';
inputArray.forEach(i => {
    var items = i.split(' = ');
    if(items[0] === 'mask') {
        mask = items[1];
    } else {
        //mem[n], x
        var memLoc = parseInt(items[0].substring(4).slice(0, -1));
        var value = parseInt(items[1]).toString(2);
        var missingNums = 36 - value.length;
        for(var i = 0; i < missingNums; i++)
            value = `0${value}`;

        var newValue = [];
        for(var i = 0; i < 36; i++) {
            var valueChar = value.charAt(i);
            var maskChar = mask.charAt(i);

            if(maskChar === 'X')
                newValue.push(valueChar);
            else
                newValue.push(maskChar);
        }
        map.set(memLoc, parseInt(newValue.join(''), 2));
    }
});

var sum = 0;
[...map.keys()].forEach(key => sum += map.get(key));
console.log(sum);