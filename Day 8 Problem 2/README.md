Logic

- Like problem 1, we read all instructions into an array
- Before running the program, we replace the next `nop` or `jmp` in line with `jmp` or `nop`, respectively
- Attempt to run the program
- If we reach the end of this modified instruction set, we have solved the problem

After revisiting my solution, I realize that I could optimize by not re-running a solution after a certain set of instructions were executed  
For example, if I replaced instruction 2 and ran the program only to find out it looped, I would have to come back and eventually run instructions 0 and 1 in a new attempt  
This slight optimization would allow for quicker program executions down the line, but would not prevent me from having to execute instructions after that which I have replaced  

This program has a similar runtime for K programs run and each K<sub>i</sub> running N<sub>i</sub> instructions  
![equation](https://raw.githubusercontent.com/jdsigg/AdventOfCode2020/main/Day%207%20Problem%201/images/graph_runtime.jpg)
