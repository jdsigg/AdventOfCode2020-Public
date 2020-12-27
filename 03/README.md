Logic

Part 1

- We can do this in one pass as we scan the data
- We will never hit trees on the first line, so skip it
- For every line after . . .
  - Check the index for a hit
  - Increment the index, wrapping if need be
  
- On close of the file, log the number of hits

Use each line of the file once. For N lines, runtime O(N)

Part 2

- Similar to Day 3 Problem 1, we can do this in one pass of the file
- At the start, create an array of indices, tracking . . .
  - Index where we look in the line (nextSlopes)
  - An increment to check where we look next (slopes)
  - A hit at each index (hits)
  
- Similar to before, skip the first line
- After that, check each of the slopes on each line
  - Don't do this for the slope where we move down 2 instead of one
  - For this, only check for hits every other time

Read N lines once. Do 5 checks on each line. Asymptotic Runtime O(N)
