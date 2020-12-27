const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n');
var allergenMap = new Map();

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
});

var allergens = [];
for(const[key, value] of allergenMap) {
    var obj = {
        key,
        set: new Set(value)
    };
    allergens.push(obj)
}


var numAllergens = allergens.length;
while(true) {
    var singletons = allergens.filter(i => i.set.size === 1);
    if(singletons.length === numAllergens) break;

    singletons.forEach(s => {
        var ingredient = [...s.set][0];
        allergens.forEach(a => {
            if(a.key !== s.key)
                if(a.set.has(ingredient))
                    a.set.delete(ingredient)
        })
    });
}

allergens.sort((a, b) => a.key.localeCompare(b.key))
console.log(allergens.map(a => [...a.set][0]).join(','));