const fourDigitsRe = /([0-9]){4}/;
const byrValidator = byr => {
    if(!(new RegExp(fourDigitsRe).test(byr))) return false;

    var parsedByr = parseInt(byr, 10);
    return (parsedByr >= 1920 && parsedByr <= 2002);
}

const iyrValidator = iyr => {
    if(!(new RegExp(fourDigitsRe).test(iyr))) return false;

    var parsedIyr = parseInt(iyr, 10);
    return (parsedIyr >= 2010 && parsedIyr <= 2020);
}

const eyrValidator = eyr => {
    if(!(new RegExp(fourDigitsRe).test(eyr))) return false;

    var parsedEyr = parseInt(eyr, 10);
    return (parsedEyr >= 2020 && parsedEyr <= 2030);
}

const heightRe = /\d+(cm|in)/;
const hgtValidator = hgt => {
    if(!(new RegExp(heightRe).test(hgt))) return false;

    var lastTwoCharacters = hgt.substring(hgt.length-2);
    var height = parseInt(hgt.substring(0, hgt.length-2), 10);
    if(isNaN(height)) return false;

    if(lastTwoCharacters === 'cm') return (height >= 150 && height <= 193);
    else if(lastTwoCharacters === 'in') return (height >= 59 && height <= 76);

    return false;
}

const hclRe = /#([0-9a-f]){6}/;
const hclValidator = hcl => {
    if(hcl.length !== 7) return false;
    return RegExp(hclRe).test(hcl);
}

const eclSet = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);
const eclValidator = ecl => {
    return eclSet.has(ecl);
}

const pidRe = /\d{9}/;
const pidValidator = pid => {
    if(pid.length !== 9) return false;
    return RegExp(pidRe).test(pid);
}

const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var validMap = new Map();
validMap.set('byr', byrValidator);
validMap.set('iyr', iyrValidator);
validMap.set('eyr', eyrValidator);
validMap.set('hgt', hgtValidator);
validMap.set('hcl', hclValidator);
validMap.set('ecl', eclValidator);
validMap.set('pid', pidValidator);

var totalValid = 0;
var checkedSet = new Set();
file.on('line', (line) => {
    if(line.length === 0) {
        if(checkedSet.size === 7) {
            totalValid++;
        }
        
        checkedSet = new Set();
    } else {
        var pairs = line.split(' ');
        pairs.forEach(pair => {
            var [key, value] = pair.split(':');
            if(validMap.has(key) && !checkedSet.has(key)) {
                var validator = validMap.get(key);
                if(validator(value))
                    checkedSet.add(key);
            }
        });
    }
});

file.on('close', () => {
    if(checkedSet.size === 7)
        totalValid++;
        
    console.log('Valid Passports: ', totalValid);
});
