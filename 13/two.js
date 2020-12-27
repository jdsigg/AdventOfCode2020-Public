const fs = require('fs');

var inputArray = fs.readFileSync('./input.txt').toString().split('\n')

var nums = inputArray[1].split(',').map((i, index) => {
    var obj = {};
    obj['minutes after'] = index;
    obj['value'] = i === 'x' ? 'x' : parseInt(i);
    return obj;
}).filter(i => i.value !== 'x');

var stepBy = 1;
var currentT = 1;

//satisfy each condition 1 by 1 while preserving conditions already satisfied
nums.forEach(obj => {
    var value = obj.value;
    var offset = obj["minutes after"];

    while ((currentT + offset) % value !== 0) currentT += stepBy;

    stepBy *= value;
})

console.log(currentT);