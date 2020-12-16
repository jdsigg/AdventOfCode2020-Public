Logic

- I didn't change my approach much with this solution
- Instead of looking at each character in each string, I only need to look at the characters defined by input
- Then, we only want one character to match on each index. These character look-ups should be constant.

REFACTOR
- After refactoring, I solve the problem as I traverse input. This saves a bit on memory and saves the extra traversals done with `.map` and the subsequent `for` I originally had.

Therefore, this solution touches each input element once and does constant time look-up on each element. This is O(N) runtime.
