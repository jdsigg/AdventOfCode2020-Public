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
    var bagData = {};
    if(includedBags !== ' no other bags.') {
        //x shade color bags
        var includedBagsData = includedBags.split(' ');
        includedBagsData.shift();
        for(var i = 0; i < includedBagsData.length; i += 4) {
            var bagType = `${includedBagsData[i+1]} ${includedBagsData[i+2]}`;
            var bagNum = parseInt(includedBagsData[i]);
            bagData[bagType] = bagNum; 
        }
    }
    map.set(bagKey, bagData);
});

recurse = key => {
    var obj = map.get(key);
    var total = 0;
    Object.keys(obj).forEach(objKey => {
        var num = obj[objKey];
        total += (num + num*recurse(objKey));
    })
    return total;
}

file.on('close', () => {
    console.log('Total: ', recurse('shiny gold'));
})