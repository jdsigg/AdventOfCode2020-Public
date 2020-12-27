Logic

Part 1

- This problem is mainly comprised of reading and traversing input
- There are lots of ways to find matches
- In my solution, I traverse each string to completion when looking for matches. I could realistically exit early if I find too many

REFACTOR
- After refactoring, I solve the problem as I traverse input. This saves a bit on memory and saves the extra traversals done with `.map` and the subsequent `for` I originally had.

For a string of average length M and N total strings, this solution requires a runtime of O(N*M)

Part 2

- I didn't change my approach much with this solution
- Instead of looking at each character in each string, I only need to look at the characters defined by input
- Then, we only want one character to match on each index. These character look-ups should be constant.

REFACTOR
- After refactoring, I solve the problem as I traverse input. This saves a bit on memory and saves the extra traversals done with `.map` and the subsequent `for` I originally had.

Therefore, this solution touches each input element once and does constant time look-up on each element. This is O(N) runtime.

