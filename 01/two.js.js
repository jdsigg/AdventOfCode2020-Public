const fs = require('fs');

var inputArray = fs.readFileSync('./input.txt').toString().split('\n').map(i => parseInt(i));
inputArray.sort((a, b) => a - b);

const desiredSum = 2020;
const length = inputArray.length;
const traversalLength = length - 2;
const lastIndex = length - 1;

for(var i = 0; i < traversalLength; i++) {
    var curr = inputArray[i];
    var left = i + 1;
    var right = lastIndex;
    while(left < right) {
        var pointerLeft = inputArray[left];
        var pointerRight = inputArray[right];
        var sum = curr + pointerLeft + pointerRight;
        if(sum === desiredSum) {
            console.log('Solution: ', curr * pointerLeft * pointerRight);
            process.exit(0);            
        } else if (sum < desiredSum) {
            left++;
        } else if (sum > desiredSum) {
            right--;
        }
    }
}
