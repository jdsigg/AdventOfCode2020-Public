Logic

- The seat numbers here are binary (rows 0 - 127 and columns 0 - 7)
- Parse the file line by line
- Convert the first seven characters of the line to binary
- Convert the last three characters of the line to binary
- Perform the "special math" of row * 8 + col and track the max

We touch N lines of input once each. 
When translating each line of input to their decimal representations, we could linearly traverse a given line and create a new string.
  - For a string of length M (constant 10 in this case), it would take O(M) to obtain the row and column representations
In my solution, I use global regular expression replacement. I am unsure as to its runtime.

Considering it may be comparable to the O(M) approach, the total runtime of this for generic line lengths M would be O(M*N)
