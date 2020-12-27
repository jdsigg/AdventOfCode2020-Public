const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n\r\n').map(i => {
    var lines = i.split('\r\n');
    var tile = parseInt(lines.shift().split(' ')[1].substring(0, 4));

    var top = lines[0];
    var bottom = lines[lines.length - 1];
    var left = [];
    var right = [];

    lines.forEach(line => {
        left.push(line[0]);
        right.push(line[line.length - 1]);
    })


    var obj = {
        tile,
        top,
        left : left.join(''),
        right: right.join(''),
        bottom
    };
    return obj;
})

compareTwoStrings = (str1, str2) => {
    return (
        (str1 == str2)
        ||
        (str1 == [...str2].reverse().join(''))
    )
}

var product = 1;
for(var i = 0; i < inputArray.length; i++) {
    var baseTile = inputArray[i];

    var left = 0;
    var right = 0;
    var top = 0;
    var bottom = 0;
    
    for(var j = 0; j < inputArray.length; j++) {
        if(i !== j) {
            var compareTile = inputArray[j];

            if(
                compareTwoStrings(baseTile.top, compareTile.top) ||
                compareTwoStrings(baseTile.top, compareTile.bottom) ||
                compareTwoStrings(baseTile.top, compareTile.left) ||
                compareTwoStrings(baseTile.top, compareTile.right)
            ) {
                top = 1;
            }

            if(
                compareTwoStrings(baseTile.bottom, compareTile.top) ||
                compareTwoStrings(baseTile.bottom, compareTile.bottom) ||
                compareTwoStrings(baseTile.bottom, compareTile.left) ||
                compareTwoStrings(baseTile.bottom, compareTile.right)
            ) {
                bottom = 1;
            }

            if(
                compareTwoStrings(baseTile.left, compareTile.top) ||
                compareTwoStrings(baseTile.left, compareTile.bottom) ||
                compareTwoStrings(baseTile.left, compareTile.left) ||
                compareTwoStrings(baseTile.left, compareTile.right)
            ) {
                left = 1;
            }

            if(
                compareTwoStrings(baseTile.right, compareTile.top) ||
                compareTwoStrings(baseTile.right, compareTile.bottom) ||
                compareTwoStrings(baseTile.right, compareTile.left) ||
                compareTwoStrings(baseTile.right, compareTile.right)
            ) {
                right = 1;
            }
        }
    }

    if(top + bottom + left + right === 2) {
        product *= baseTile.tile;
    }
}

console.log(product);