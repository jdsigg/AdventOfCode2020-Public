const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n\r\n')

var [p1, p2] = inputArray;
p1 = p1.split('\r\n')
p2 = p2.split('\r\n')

p1.shift();
p2.shift();

p1 = p1.map(Number);
p2 = p2.map(Number);

getRoundString = (arr1, arr2) => {
    return "p1:"+arr1.join(',') + " p2:" + arr2.join(',');
}

// Returns true / false if player 1 wins or not, respectively
recursiveCombat = (deck1, deck2) => {
    var subGameRounds = new Set();
    while(true) {
        var roundString = getRoundString(deck1, deck2);

        if(subGameRounds.has(roundString)) return true;
        else subGameRounds.add(roundString);

        var p1TopCard = deck1.shift();
        var p2TopCard = deck2.shift();

        var p1Wins;

        if(p1TopCard <= deck1.length && p2TopCard <= deck2.length) {
            var copyP1 = deck1.slice(0, p1TopCard);
            var copyP2 = deck2.slice(0, p2TopCard);
            p1Wins = recursiveCombat(copyP1, copyP2);
        } else {
            p1Wins = p1TopCard > p2TopCard;
        }

        if(p1Wins) {
            deck1.push(p1TopCard);
            deck1.push(p2TopCard);
        } else {
            deck2.push(p2TopCard);
            deck2.push(p1TopCard);
        }

        if(deck1.length === 0)
            return false;
    
        if(deck2.length === 0)
            return true;
    }
}

/*
    Not checking for duplicate rounds.

    My (correct) assumption was that the input was designed
    to have me run the simulation until player 1 or player 2
    emptied their deck, not until I found a round that 
    player 1 and player 2 already played.

*/
var winner;
while(true) {
    var p1TopCard = p1.shift();
    var p2TopCard = p2.shift();

    var p1Wins;
    if(p1TopCard <= p1.length && p2TopCard <= p2.length) {
        var copyP1 = p1.slice(0, p1TopCard);
        var copyP2 = p2.slice(0, p2TopCard);
        p1Wins = recursiveCombat(copyP1, copyP2);
    } else {
        p1Wins = p1TopCard > p2TopCard;
    }

    if(p1Wins) {
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