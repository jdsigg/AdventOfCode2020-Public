const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n\r\n')

var [p1, p2] = inputArray;
p1 = p1.split('\r\n')
p2 = p2.split('\r\n')

p1.shift();
p2.shift();

p1 = p1.map(Number)
p2 = p2.map(Number)

var winner;
while(true) {


    var p1TopCard = p1.shift();
    var p2TopCard = p2.shift();


    if(p2TopCard < p1TopCard) {
        p1.push(p1TopCard);
        p1.push(p2TopCard);
    } else {
        p2.push(p2TopCard);
        p2.push(p1TopCard);
    }

    if(p1.length === 0) {
        winner = p2;
        break;
    }

    if(p2.length === 0) {
        winner = p1;
        break;
    }
}

var sum = 0;
var deckLength = winner.length;
for(var i = 0; i < winner.length; i++) {
    sum += winner[i] * (deckLength--)
}

console.log(sum);
