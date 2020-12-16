Logic

- We can do this in one pass as we scan the data
- We will never hit trees on the first line, so skip it
- For every line after . . .
  - Check the index for a hit
  - Increment the index, wrapping if need be
  
- On close of the file, log the number of hits

Use each line of the file once. For N lines, runtime O(N)
