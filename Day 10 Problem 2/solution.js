const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var inputArr = [];
file.on('line', line => {
    inputArr.push(parseInt(line));
});

// At a given index, return the number of ways we can climb the ladder ahead of it
var dp = new Map();
numberOfCombinations = index => {
    if(index === inputArr.length - 1)
        return 1;

    if(dp.has(index)) return dp.get(index);
    var total = 0;
    for(var i = index + 1; i < inputArr.length; i++) {
        if(inputArr[index] + 3 >= inputArr[i])
            total += numberOfCombinations(i);
    }

    dp.set(index, total);
    return total;
}

file.on('close', () => {
    inputArr.sort((a, b) => a - b);
    inputArr = [0, ...inputArr, inputArr[inputArr.length-1] + 3];
    console.log('Combinations: ', numberOfCombinations(0));
});
