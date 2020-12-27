Logic

Part 1

- We need to find the bus that will have us waiting the least amount of time
- The answer is that bus's ID times how many minutes we spend waiting for it

- For every bus
 - Calculate how many minutes off it is from our time
 - Calculate the first arrival that will work for us
 - If this arrival time is the smallest so far
  - Store the time
  - Store the ID
  - Store the difference
  
- Multiply the ID by the difference after scanning all busses

Part 2


- The prompt suggested that traditional brute force would not work (check a T for all busses, if not, T++)
- A smarter brute force suggests matching conditions for each bus and then preserving that condition while finding subsequent ones
- While looking for the first bus, we `stepBy` 1 and check at `currentT` 1
- While `((currentT + offset) % id) !== 0` we increment `currentT` by `stepBy`
- Once a T is found, change the `stepBy` to be on multiples of that T
- Repeat until all buses are checked

