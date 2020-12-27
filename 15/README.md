Logic

- For this problem, we are scanning input and calculating based off that which we had just last seen
- Both problems are the same solution (except the sequence end)

- Accumulate the input into memory (a `Map()`)
- Iterate `N - input.length` times until we reach the end of the sequence
  - Retrieve that which was last spoken
  - Find the next spoken based off of it
  - Update the next spoken in memory
