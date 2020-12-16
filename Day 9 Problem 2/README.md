Logic

- Read the file into memory
- Perform a linear traversal of the input while keeping track of
  - An array of "seen" values
  - The sum of those values
- If at any point the sum becomes bigger than our solution, remove all necessary values from the front of the "seen" array until the sum is less than the solution
- Repeat until the solution is found

I can optimize this solution a bit, but the solution will always be O(N).
