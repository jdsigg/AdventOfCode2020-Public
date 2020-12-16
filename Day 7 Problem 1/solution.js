const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var map = new Map();
file.on('line', (line) => {
    var lineSplit = line.split('contain');
    var bagInfo = lineSplit[0].split(' ');
    var bagKey = `${bagInfo[0]} ${bagInfo[1]}`;

    var includedBags = lineSplit[1];
    var bagSet = new Set();
    if(includedBags !== ' no other bags.') {
        //x shade color bags
        var includedBagsData = includedBags.split(' ');
        includedBagsData.shift();
        for(var i = 0; i < includedBagsData.length; i += 4) {
            bagSet.add(`${includedBagsData[i+1]} ${includedBagsData[i+2]}`);
        }
    }
    map.set(bagKey, bagSet);
});

recurse = (key) => {
    var set = map.get(key);
    if(key.length === 0) return false;
    if(set.has('shiny gold')) return true;

    var foundBelow = false;

    for(var value of set) {
        if(recurse(value)) {
            foundBelow = true;
            break;
        }
    }

    return foundBelow;
}

findThroughRecursion = () => {
    var total = 0;
    var allKeys = [...map.keys()];
    allKeys.forEach(key => {
        if(recurse(key)) {
            total++;
        }
    });

    return total;
}

file.on('close', () => {
    console.log('Total: ', findThroughRecursion());
})