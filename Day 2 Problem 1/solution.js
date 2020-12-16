const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('./input.txt')
});

var validPasswords = 0;
file.on('line', (line) => {
    var [nums, characterColon, password] = line.split(' ');
    var [min, max] = nums.split('-');
    var character = characterColon.charAt(0);

    var matches = 0;
    var strLen = password.length;
    for(var i = 0; i < strLen; i++)
        if(password.charAt(i) === character)
            matches++;
    
    if(min <= matches && max >= matches)
        validPasswords++;
});

file.on('close', () => console.log('Valid Passwords: ', validPasswords));