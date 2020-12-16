var sequenceEnd = 30000000;
var input = [18,11,9,0,5,1];
var spoken = new Map();

for(var i = 0; i < input.length; i++) {
    spoken.set(input[i], [i+1, -1]);
}

var lastSpoken = input[input.length-1];

for(var i = input.length + 1; i <= sequenceEnd; i++) {
    var spokenArr = spoken.get(lastSpoken);
    if(spokenArr[1] === -1) {
        lastSpoken = 0;
    } else {
        lastSpoken = spokenArr[1] - spokenArr[0];
    }

    var justSpoke = spoken.get(lastSpoken);
    if(justSpoke === undefined)
        spoken.set(lastSpoken, [i, -1]);
    else if(justSpoke[1] === -1)
        spoken.set(lastSpoken, [justSpoke[0], i]);
    else
        spoken.set(lastSpoken, [justSpoke[1], i]);
}
console.log(lastSpoken);