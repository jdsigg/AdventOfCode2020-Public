const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n').map(line => line.split(' ').join(''));

var runningTotal = 0;
inputArray.forEach(equation => {
    var stack = [];
    var i = equation.length - 1;
    while(i >= 0) {
        var character = equation.charAt(i--);
        if(character === '(') {
            var total = parseInt(stack[stack.length - 1]);
            stack.pop();
            while(stack[stack.length - 1] !== ')') {
                var op = stack.pop();
                var num = parseInt(stack.pop());
                if(op === '+')
                    total += num;
                else
                    total *= num;
            }
            stack.pop();
            stack.push(total.toString());
            while(stack[stack.length - 2] === '+') {
                var num = parseInt(stack.pop());
                stack.pop();
                num += parseInt(stack.pop());
                stack.push(num.toString())
            }
        } else if(stack[stack.length - 1] === '+' && character !== ')') {
            var total = parseInt(character);
            stack.pop();
            var nextNum = parseInt(stack.pop());
            total += nextNum;                
            stack.push(total.toString());
        }
         else {
            stack.push(character);
        }
    }

    if(stack.length > 3) {
        i = stack.length - 1;
        while(i >= 0) {
            var potentialNum = stack[i];
            var potentialOp = stack[i - 1];
            if(potentialOp === '+') {
                var definiteNum = parseInt(stack[i - 2]);
                var sum = parseInt(potentialNum) + definiteNum;
                stack.splice(i - 2, 3, sum.toString());
            }
            i -= 2;
        }
    }

    var total = parseInt(stack.pop());
    while(stack.length > 0) {
        var char = stack.pop();
        var num = parseInt(stack.pop());
        if(char === '+')
            total += num;
        else
            total *= num;
    }    
    runningTotal += total;
})

console.log(runningTotal);

