const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var index = 3;
var treesHit = 0;
var firstLine = true;
file.on('line', (line) => {
    if(firstLine) firstLine = false;
    else {
        if(line.charAt(index) === '#')
            treesHit++;

        index = (index + 3) % (line.length);
    }
});

file.on('close', () => console.log('Trees Hit: ', treesHit));