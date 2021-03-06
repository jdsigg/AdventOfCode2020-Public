const fs = require('fs');
var inputArray = fs.readFileSync('./input.txt').toString().split('\r\n\r\n');

var rulesArray = inputArray[0].split('\r\n').map(line => line.split(': '));
var rules = {};
rulesArray.forEach(rule => rules[rule[0]] = rule[1]);

var regularExpressions = {};

populateRegEx = key => {
    var rule = rules[key];
    var ans = '';

    if(key in regularExpressions) return regularExpressions[key];

    if(rule.includes('|')) {
        var parts = rule.split(' | ');
        var part1 = parts[0].split(' ');
        var part2 = parts[1].split(' ');
        
        var re1 = "("
        var re1s = [];
        part1.forEach(part => re1s.push(populateRegEx(part)));
        re1 += re1s.join(")(")
        re1 += ")"

        var re2 = "("
        var re2s = [];
        part2.forEach(part => re2s.push(populateRegEx(part)));
        re2 += re2s.join(")(")
        re2 += ")"

        ans = `(${re1})|(${re2})`;

    } else if (rule.includes('"')) {
        ans = rule.charAt(1);
    } else {
        var parts = rule.split(' ');
        ans = "(";
        var ansRes = [];
        parts.forEach(part => ansRes.push(populateRegEx(part)));
        ans += ansRes.join(")(");
        ans += ")"
    }
    
    regularExpressions[key] = ans;

    return ans;
}

var re0 = new RegExp('^' + populateRegEx('0') + '$');

var total = 0;
inputArray[1].split('\r\n').forEach(line => {
    var match = line.match(re0);
    if(match && line === match[0])
        total++;
})

console.log(total);