const fs = require('fs');
var tilesToIndex = {};
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n\r\n').map( (i, index) => {
    var lines = i.split('\r\n');
    var tile = parseInt(lines.shift().split(' ')[1].substring(0, 4));

    lines = lines.map(i => i.split(''));

    var obj = {
        tile,
        lines
    };

    tilesToIndex[tile] = index;
    return obj;
})

getStringsFromArray = arr => {
    var top = arr[0].join('');
    var bottom = [...arr[arr.length - 1]].reverse().join('');
    var left = [];
    var right = [];

    arr.forEach(subArr => {
        left.push(subArr[0]);
        right.push(subArr[subArr.length - 1]);
    })

    left = left.reverse().join('');
    right = right.join('')

    return [top, bottom, left, right];
}


flipSquareAccrossVerticalAxis = (arr) => {
    arr.forEach(subArr => subArr.reverse());
}

rotateSquare90Degrees = (arr) => {
    return arr.map((val, index) => arr.map(row => row[index]).reverse());
}

compareTwoStrings = (str1, str2) => {
    if(str1 == str2)
        return 'not reversed'
    else if(str1 == [...str2].reverse().join(''))
        return 'reversed'

    return false;
}

var firstCorner;
var firstCornerConnections;
var firstCornerArray;
for(var i = 0; i < inputArray.length; i++) {
    var baseTile = inputArray[i];
    var [baseTop, baseBottom, baseLeft, baseRight] = getStringsFromArray(baseTile.lines);

    var top = 0;
    var right = 0;
    var left = 0;
    var bottom = 0;
    
    for(var j = 0; j < inputArray.length; j++) {
        if(i !== j) {
            var compareTile = inputArray[j];
            var [compareTop, compareBottom, compareLeft, compareRight] = getStringsFromArray(compareTile.lines);

            var topTop    = compareTwoStrings(baseTop, compareTop);
            var topRight  = compareTwoStrings(baseTop, compareRight);
            var topBottom = compareTwoStrings(baseTop, compareBottom);
            var topLeft   = compareTwoStrings(baseTop, compareLeft);

            var bottomTop    = compareTwoStrings(baseBottom, compareTop);
            var bottomRight  = compareTwoStrings(baseBottom, compareRight);
            var bottomBottom = compareTwoStrings(baseBottom, compareBottom);
            var bottomLeft   = compareTwoStrings(baseBottom, compareLeft);

            var leftTop    = compareTwoStrings(baseLeft, compareTop);
            var leftRight  = compareTwoStrings(baseLeft, compareRight);
            var leftBottom = compareTwoStrings(baseLeft, compareBottom);
            var leftLeft   = compareTwoStrings(baseLeft, compareLeft);

            var rightTop    = compareTwoStrings(baseRight, compareTop);
            var rightRight  = compareTwoStrings(baseRight, compareRight);
            var rightBottom = compareTwoStrings(baseRight, compareBottom);
            var rightLeft   = compareTwoStrings(baseRight, compareLeft);
            
            if(topTop || topRight || topBottom || topLeft) {
                top = compareTile.tile;
            }
            else if(bottomTop || bottomRight || bottomBottom || bottomLeft) {
                bottom = compareTile.tile;
            }
            else if(leftTop || leftRight || leftBottom || leftLeft) {
                left = compareTile.tile;
            } 
            else if(rightTop || rightRight || rightBottom || rightLeft) {
                right = compareTile.tile;
            }            
        }
    }

    var cornerCheck = [top, left, right, bottom].filter(x => x === 0).length;
    if(cornerCheck === 2) {
        firstCornerArray = baseTile.lines;
        firstCorner = baseTile.tile;
        firstCornerConnections = { top, bottom, left, right }
        break;
    }
}

var image = [];
var numRows = Math.sqrt(Object.keys(tilesToIndex).length);
for(var i = 0; i < numRows; i++) {
    image.push(new Array(numRows).fill(0));
}

var row, col;
if(firstCornerConnections.top === 0 && firstCornerConnections.right === 0) {
    row = 0;
    col = numRows - 1;
}
else if(firstCornerConnections.top === 0 && firstCornerConnections.left === 0) {
    row = 0;
    col = 0;
}
else if(firstCornerConnections.bottom === 0 && firstCornerConnections.right === 0) {
    row = numRows - 1;
    col = numRows - 1;
}
else if(firstCornerConnections.bottom === 0 && firstCornerConnections.left === 0) {
    row = numRows - 1;
    col = 0;
}

image[row][col] = JSON.parse(JSON.stringify(firstCornerArray));
var placedSet = new Set([firstCorner]);

recurseAndBuildImage = (r, c) => {
    var allNeighbors = [];
    var [baseTop, baseBottom, baseLeft, baseRight] = getStringsFromArray(image[r][c]);
    for(var i = 0; i < inputArray.length; i++) {
        var compareTile = inputArray[i];
        if(!placedSet.has(compareTile.tile)) {
            var duplicate = JSON.parse(JSON.stringify(compareTile.lines));
            var [compareTop, compareBottom, compareLeft, compareRight] = getStringsFromArray(duplicate);

            var topTop    = compareTwoStrings(baseTop, compareTop);
            var topRight  = compareTwoStrings(baseTop, compareRight);
            var topBottom = compareTwoStrings(baseTop, compareBottom);
            var topLeft   = compareTwoStrings(baseTop, compareLeft);

            var bottomTop    = compareTwoStrings(baseBottom, compareTop);
            var bottomRight  = compareTwoStrings(baseBottom, compareRight);
            var bottomBottom = compareTwoStrings(baseBottom, compareBottom);
            var bottomLeft   = compareTwoStrings(baseBottom, compareLeft);

            var leftTop    = compareTwoStrings(baseLeft, compareTop);
            var leftRight  = compareTwoStrings(baseLeft, compareRight);
            var leftBottom = compareTwoStrings(baseLeft, compareBottom);
            var leftLeft   = compareTwoStrings(baseLeft, compareLeft);

            var rightTop    = compareTwoStrings(baseRight, compareTop);
            var rightRight  = compareTwoStrings(baseRight, compareRight);
            var rightBottom = compareTwoStrings(baseRight, compareBottom);
            var rightLeft   = compareTwoStrings(baseRight, compareLeft);
            
            var obj = {};

             if(topTop) {
                if(topTop === 'reversed') {
                    duplicate = rotateSquare90Degrees(rotateSquare90Degrees(duplicate));
                } else {
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(rotateSquare90Degrees(duplicate));
                }
                obj = {
                    row: r - 1,
                    col: c,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(rightTop) {
                if(rightTop === 'not reversed') {        
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(rotateSquare90Degrees(rotateSquare90Degrees(duplicate)));
                }
                else {
                    duplicate = rotateSquare90Degrees(rotateSquare90Degrees(rotateSquare90Degrees(duplicate)));
                }
                obj = {
                    row: r,
                    col: c + 1,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(bottomTop) {
                if(bottomTop === 'not reversed') {
                    flipSquareAccrossVerticalAxis(duplicate);
                }
                obj = {
                    row: r + 1,
                    col: c,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(leftTop) {
                if(leftTop === 'not reversed') {
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r,
                    col: c - 1,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(topBottom) {
                if(topBottom === 'not reversed') {
                    flipSquareAccrossVerticalAxis(duplicate);
                }
                obj = {
                    row: r - 1,
                    col: c,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(rightBottom) {
                if(rightBottom === 'not reversed') {
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r,
                    col: c + 1,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(bottomBottom) {
                if(bottomBottom === 'not reversed') {
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r + 1,
                    col: c,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(leftBottom) {
                if(leftBottom === 'not reversed') {
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r,
                    col: c - 1,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(topLeft) {
                if(topLeft === 'not reversed') {
                    duplicate = rotateSquare90Degrees(duplicate);
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r - 1,
                    col: c,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(rightLeft) {
                if(rightLeft === 'not reversed') {
                    duplicate = rotateSquare90Degrees(duplicate);
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r,
                    col: c + 1,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(bottomLeft) {
                if(bottomLeft === 'not reversed') {
                    duplicate = rotateSquare90Degrees(duplicate);
                    flipSquareAccrossVerticalAxis(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r + 1,
                    col: c,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(leftLeft) {
                if(leftLeft === 'not reversed') {
                    duplicate = rotateSquare90Degrees(duplicate);
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r,
                    col: c-1,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(topRight) {
                if(topRight === 'not reversed') {
                    duplicate = rotateSquare90Degrees(duplicate);
                    flipSquareAccrossVerticalAxis(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r - 1,
                    col: c,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(rightRight) {
                if(rightRight === 'not reversed') {
                    duplicate = rotateSquare90Degrees(duplicate);
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r,
                    col: c+1,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(bottomRight) {
                if(bottomRight === 'not reversed') {
                    duplicate = rotateSquare90Degrees(duplicate);
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                } else {
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r + 1,
                    col: c,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
            else if(leftRight) {
                if(leftRight === 'not reversed') {
                    duplicate = rotateSquare90Degrees(duplicate);
                    flipSquareAccrossVerticalAxis(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                    duplicate = rotateSquare90Degrees(duplicate);
                }
                obj = {
                    row: r,
                    col: c - 1,
                    duplicate,
                    tile: compareTile.tile
                };
                allNeighbors.push(obj);
            }
        }
    }
    allNeighbors.forEach(neighbor => {
        if(!placedSet.has(neighbor.tile)) {
            placedSet.add(neighbor.tile);
            image[neighbor.row][neighbor.col] = neighbor.duplicate;
            recurseAndBuildImage(neighbor.row, neighbor.col);
        }
    })
}

recurseAndBuildImage(row, col);

removeEdgesFromArray = arr => {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        var subArr = arr[i];
        if(i !== 0 && i !== arr.length - 1) {
            var slice = subArr.slice(1, subArr.length-1);
            newArr.push(slice);
        }
    }
    return newArr;
}

for(var i = 0; i < image.length; i++)
    for(var j = 0; j < image.length; j++)
        image[i][j] = removeEdgesFromArray(image[i][j]);

var finalImage = [];
for(var i = 0; i < numRows * 8; i++)
    finalImage.push(new Array(0));

for(var i = 0; i < image.length; i++) {
    var lines = image[i];
    for(var j = 0; j < lines.length; j++) {
        var currentArray = lines[j];
        for(var k = 0; k < currentArray.length; k++)
            finalImage[8*i + k].push(...currentArray[k]);
    }
}

checkImageForSerpent = arr => {
    var total = 0;
    var temp = JSON.parse(JSON.stringify(arr));

    for(var i = 0; i < arr.length - 3; i++) {
        for(var j = 0; j < arr[i].length - 19; j++) {
            if(
                arr[i][j+18] === '#' &&
                arr[i + 1][j] === '#' &&
                arr[i + 1][j + 5] === '#' &&
                arr[i + 1][j + 6] === '#' &&
                arr[i + 1][j + 11] === '#' &&
                arr[i + 1][j + 12] === '#' &&
                arr[i + 1][j + 17] === '#' &&
                arr[i + 1][j + 18] === '#' &&
                arr[i + 1][j + 19] === '#' &&
                arr[i + 2][j + 1] === '#' &&
                arr[i + 2][j + 4] === '#' &&
                arr[i + 2][j + 7] === '#' &&
                arr[i + 2][j + 10] === '#' &&
                arr[i + 2][j + 13] === '#' &&
                arr[i + 2][j + 16] === '#'
            ) {
                total++;
                temp[i][j+18] = '0'
                temp[i + 1][j] = '0' 
                temp[i + 1][j + 5] = '0' 
                temp[i + 1][j + 6] = '0' 
                temp[i + 1][j + 11] = '0'
                temp[i + 1][j + 12] = '0'
                temp[i + 1][j + 17] = '0'
                temp[i + 1][j + 18] = '0'
                temp[i + 1][j + 19] = '0'
                temp[i + 2][j + 1] = '0' 
                temp[i + 2][j + 4] = '0' 
                temp[i + 2][j + 7] = '0' 
                temp[i + 2][j + 10] = '0'
                temp[i + 2][j + 13] = '0'
                temp[i + 2][j + 16] = '0'
            }
        }
    }

    if(total > 0) {
        var pounds = 0;
        
        for(var i = 0; i < temp.length; i++) {
            for(var j = 0; j < temp[i].length; j++)
                if(temp[i][j] === '#')
                    pounds++;
        }
        console.log(pounds);
    }

}

var flippedImage = JSON.parse(JSON.stringify(finalImage));
flipSquareAccrossVerticalAxis(flippedImage);
[
    flippedImage,
    rotateSquare90Degrees(flippedImage),
    rotateSquare90Degrees(rotateSquare90Degrees(flippedImage)),
    rotateSquare90Degrees(rotateSquare90Degrees(rotateSquare90Degrees(flippedImage))),
    finalImage,
    rotateSquare90Degrees(finalImage),
    rotateSquare90Degrees(rotateSquare90Degrees(finalImage)),
    rotateSquare90Degrees(rotateSquare90Degrees(rotateSquare90Degrees(finalImage))),
].forEach(array => {
    checkImageForSerpent(array);
})
