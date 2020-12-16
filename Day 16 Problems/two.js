const fs = require('fs');

var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n\r\n');

var ranges = inputArray[0].split('\r\n');
var myTicket = inputArray[1].split('\r\n')[1].split(',').map(Number);
var nearbyTickets = inputArray[2].split('\r\n');
nearbyTickets.shift();

var validMap = new Map();
for(var i = 0; i < ranges.length; i++) {
    var splitFields = ranges[i].split(': ');
    var category = splitFields[0];
    var splitRanges = splitFields[1].split(' or ');
    const [range1Start, range1End] = splitRanges[0].split('-').map(Number);
    const [range2Start, range2End] = splitRanges[1].split('-').map(Number);

    operate = (x) => {
        if(validMap.has(x)) {
            var possibleCategories = validMap.get(x);
            if(!possibleCategories.has(category))
                possibleCategories.add(category);
        } else {
            validMap.set(x, new Set([category]));
        }
    }
    
    for(var x = range1Start; x <= range1End; x++)
        operate(x);

    for(var x = range2Start; x <= range2End; x++)
        operate(x);
}

var validTickets = [];
for(var i = 0; i < nearbyTickets.length; i++) {
    var ticketValues = nearbyTickets[i].split(',').map(Number);
    var valid = true;
    for(var j = 0; j < ticketValues.length; j++) {
        if(!validMap.has(ticketValues[j]))
            valid = false;
    }

    if(valid) validTickets.push(ticketValues);
}

var indexSets = [];
for(var i = 0; i < validTickets[0].length; i++) { //go over every index
    var categories = new Set();
    for(var j = 0; j < validTickets.length; j++) { //of every ticket
        var num = validTickets[j][i];
        var set = validMap.get(num);

        if(categories.size === 0)
            categories = new Set(set);
        else
            categories.forEach(item => {
                if(!set.has(item))
                    categories.delete(item);
            });
    }
    var obj = {
        index: i,
        set: categories
    };
    indexSets.push(obj);
}

indexSets.sort((a, b) => a.set.size - b.set.size);
for(var i = 0; i < indexSets.length; i++) {
    var currentSet = indexSets[i].set;
    for(var j = i + 1; j < indexSets.length; j++) {
        var removalSet = indexSets[j].set;
        currentSet.forEach(item => removalSet.delete(item));
    }
}

var product = 1;
indexSets.forEach(obj => {
    if([...obj.set][0].startsWith('departure'))
        product *= myTicket[obj.index];
})

console.log(product);