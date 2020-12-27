Logic

Part 1

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

Part 2

- Like problem 1, we read all instructions into an array
- Before running the program, we replace the next `nop` or `jmp` in line with `jmp` or `nop`, respectively
- Attempt to run the program
- If we reach the end of this modified instruction set, we have solved the problem

After revisiting my solution, I realize that I could optimize by not re-running a solution after a certain set of instructions were executed  
For example, if I replaced instruction 2 and ran the program only to find out it looped, I would have to come back and eventually run instructions 0 and 1 in a new attempt  
This slight optimization would allow for quicker program executions down the line, but would not prevent me from having to execute instructions after that which I have replaced  

This program has a similar runtime for K programs run and each K<sub>i</sub> running N<sub>i</sub> instructions  
![equation](https://raw.githubusercontent.com/jdsigg/AdventOfCode2020/main/07/images/graph_runtime.jpg?token=AHRLEANRDCVE4OI5QF4GRZC75AA4K)

