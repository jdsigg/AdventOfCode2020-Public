const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n');
var allergenMap = new Map();
var ingredientOccurrences = new Map();

inputArray.forEach(line => {
    var [items, allergens] = line.split(' (contains ');
    items = items.split(' ')
    allergens = allergens.substring(0, allergens.length - 1).split(', ');

    allergens.forEach(a => {
        if(!allergenMap.has(a)) allergenMap.set(a, [...items]);
        else {
            var possibleIngredients = allergenMap.get(a);
            var nextIngredients = [];
            possibleIngredients.forEach(p => {
                items.forEach(i => {
                    if(i === p)
                        nextIngredients.push(p);
                })
            })

            allergenMap.set(a, [...nextIngredients]);
        }
    });

    items.forEach(item => {
        if(!ingredientOccurrences.has(item)) ingredientOccurrences.set(item, 0);
        var occ = ingredientOccurrences.get(item) + 1;
        ingredientOccurrences.set(item, occ);
    })
});

var total = 0;
for(const[key, value] of ingredientOccurrences) {
    var found = false;
    for(const [key2, value2] of allergenMap) {
        value2.forEach(i => {
            if(key == i)
                found = true
        })
    }
    if(!found)
        total += value
}

console.log(total);