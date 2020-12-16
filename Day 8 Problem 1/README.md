Logic

- The solution can be found as the input is read, but the sake of simple code, I decide to read the file into an array first
- Systematically follow the rules of the puzzle for each instruction
  - Read instruction from the set
  - If the instruction is a `nop`, skip it
  - If the instruction is a `jmp`, jump forward that many instructions
  - If the instruction is a `acc`, accumulate counter
- For each parsed line, add that line to `Set()`. If we ever see this line again, the set will tell us (and we exit)

We cannot determine whether or not an arbitrary program will finish execution  
Because of this, we must run the program given to us until the "loop" condition is met  
For a program that executes N instructions to match this condition, the runtime is O(N)
