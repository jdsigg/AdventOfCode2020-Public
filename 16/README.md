Part 1 Logic

- For this part, all we need to know is if a given number falls within a given range (don't need our ticket)
- Go through all ranges and place every valid range number in a `Set()`
- Iterate over all the tickets
- If a ticket has a number that is not in the set, add that number to the `error rate`

Part 2 Logic
- For this part, we are harnessing the fact that each ticket index belongs to ONE group and ONLY ONE group
- With this in mind, perform a similar operation to part 1
  - Go through all ranges (now keeping track of their category also) and place every valid range number in a `Map()`
    - This time, if the range already exists in the map, we append to the range the category
- Iterate over all the tickets, pruning those that would normally add to the `error rate`
- Now, with only valid tickets
  - For a given index
  - Create an `empty set` that represents the valid categories at this index (from the map above)
    - For all tickets
      - Get the possible categories for this index
      - Either initialize the `empty set` or remove all occurrences from the (no longer empty) `empty set` that don't show up in the next index
  - Store the index and the set
  
- Because of the solution-uniqueness clause above, we KNOW that sorting the sets in ascending order will give us sets increasing in size from 1-N
  - If this were not true, we would not be able to get a unique solution, hence we would not be able to answer the problem
- For a given set that has `size === 1` (call it `single`)
  - Iterate over all other sets, trimming out that which must exist in the `single` and can therefore not exist in any other set
  
- This produces an array of objects that look like:
[ {index<sub>1</sub>, set<sub>1</sub>}, {index<sub>2</sub>, set<sub>2</sub>}, ..., {index<sub>N</sub>, set<sub>N</sub>} ]

- Indices are in no particular order, so iterate over this array and accumulate a product of my ticket at indices where the paired set's only item starts with 'departure'
