Logic

- Input parsing is similar to that of the first problem
- However, this time, we need to keep track of all bags a bag can contain AND the number of bags for each bag
- When we recurse, we need ask "for a given key, value pair, return the number of bags required plus said number * the number of bags below it"
- In the end, we are not iterating over every key, but merely honing this recursion in on the shiny gold bag

- The algorithm I use here is a single instance traversal of a tree starting at the key 'shiny gold'
- Assuming there are N nodes below and including 'shiny gold' and we touch each node once, the runtime is O(N)
