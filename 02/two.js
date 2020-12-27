const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var validPasswords = 0;
file.on('line', (line) => {
    var [nums, characterColon, password] = line.split(' ');
    var [firstIndex, secondIndex] = nums.split('-');
    var character = characterColon.charAt(0);

    var firstValidity = password.charAt(firstIndex - 1) === character;
    var secondValidity = password.charAt(secondIndex - 1) === character;

    if((firstValidity && !secondValidity) || (!firstValidity && secondValidity))
        validPasswords++;
});

file.on('close', () => console.log('Valid Passwords: ', validPasswords));