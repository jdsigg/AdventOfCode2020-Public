Logic

- In this problem, we care about how many unique questions were answered for a given group of individuals
- To solve, we read each line of input once, parsing each character by character
- When we see a character, add it to a Set(). This handles the duplications for us (collisions don't get added again)
- After we see a new line, the size of the set represents the unique number of questions that were answered
- Increment our total by said number
- This check must be done on the file's end, as it does not end in a new line

For N lines of input, whom we traverse character by character once with an average length of M, this solution's runtime is O(N*M)
