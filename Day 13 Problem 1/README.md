Logic

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
