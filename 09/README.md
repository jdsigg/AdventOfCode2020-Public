Logic

Part 1

- Read the file into memory
- Start with pointers at index 0 and 24, while having one at index 25 to search
- Search sum combinations with a nested for loop for the desired number outside the range
- If one is found, that is the answer. If not, repeat the process by incrementing all 3 pointers

Part 2

- Read the file into memory
- Perform a linear traversal of the input while keeping track of
  - An array of "seen" values
  - The sum of those values
- If at any point the sum becomes bigger than our solution, remove all necessary values from the front of the "seen" array until the sum is less than the solution
- Repeat until the solution is found

I can optimize this solution a bit, but the solution will always be O(N).
