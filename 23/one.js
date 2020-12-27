var input = [1, 6, 7, 2, 4, 8, 3, 5, 9];

findIndex = (num) => {
    for(var i = 0; i < input.length; i++)
        if(input[i] === num)
            return i;
}

var currentCupIndex = 0;
for(var i = 0; i < 100; i++) {
    var currentCup = input[currentCupIndex];
    
    var cupsToRemove = [];
    cupsToRemove.push( input[(currentCupIndex + 1) % 9] )
    cupsToRemove.push( input[(currentCupIndex + 2) % 9] )
    cupsToRemove.push( input[(currentCupIndex + 3) % 9] )
    var cupsAsSet = new Set(cupsToRemove);
    
    var destinationCup = currentCup === 1 ? 9 : currentCup - 1;
    while(cupsAsSet.has(destinationCup)) {
        destinationCup--;
        if(destinationCup === 0)
            destinationCup = 9;
    }

    cupsToRemove.forEach(cup => input.splice(findIndex(cup), 1));

    var insertionIndex = findIndex(destinationCup);
    input.splice(insertionIndex + 1, 0, ...cupsToRemove);
    currentCupIndex = (findIndex(currentCup) + 1) % 9;
}

var index = (findIndex(1) + 1) % 9;
var str = '';
for(i = 0; i < 8; i++) {
    str += input[index];
    index = (index + 1) % 9;
}

console.log(str);