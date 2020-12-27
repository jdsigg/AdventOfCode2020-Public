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
        var memLoc = parseInt(items[0].substring(4).slice(0, -1)).toString(2);
        var value = parseInt(items[1]);
        var missingNums = 36 - memLoc.length;
        for(var i = 0; i < missingNums; i++)
            memLoc = `0${memLoc}`;

        var allLocs = [[]];
        for(var i = 0; i < 36; i++) {
            var memChar = memLoc.charAt(i);
            var maskChar = mask.charAt(i);

            if(maskChar === '0')
                allLocs.forEach(loc => loc.push(memChar));
            else if(maskChar === '1')
                allLocs.forEach(loc => loc.push(maskChar));
            else {
                var locsToPush = [];
                allLocs.forEach(loc => {
                    var next = JSON.parse(JSON.stringify(loc));
                    loc.push('0');
                    next.push('1');
                    locsToPush.push(next);
                });
                locsToPush.forEach(loc => allLocs.push(loc));
            }
        }
        allLocs.forEach(loc => {
            map.set(parseInt(loc.join(''), 2), value);
        })
        

    }
});

var sum = 0;
[...map.keys()].forEach(key => sum += map.get(key));
console.log(sum);