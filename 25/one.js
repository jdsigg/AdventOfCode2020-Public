const fs = require('fs');

var [publicKey1, publicKey2] = fs.readFileSync('./input.txt').toString().split('\r\n').map(Number);

var cardLoopSize = 1;
var value = 1;
while(true) {
    value = value * 7 % 20201227;
    if(value === publicKey1)
        break;
    cardLoopSize++;
}

var encryptionKey = 1
for(var i = 0; i < cardLoopSize; i++) {
    encryptionKey = encryptionKey * publicKey2 % 20201227;
}

console.log(encryptionKey)