Logic

Part 1

- First we read the input in and sort it
  - By doing so, we can check every adapter in order for the +1 / +3 condition
- Iterate over all the data, accumulating the conditions

Runtime varies based on the data set and sort implementation.

Part 2

- If we sort the input first, we can traverse it recursively to find all combinations
- The recursive traversal goes something like this for a given index:
  - If this index is the last index in the array, return 1
  - Iterate over all indices after it and recursively traverse them if they are <= the current index + 3 (the appropriate adapter range)
  - Accumulate all total possibilites from the above recursion and return them
  
- This logic works, but will cause us to iterate (near) indefinitely, as we will end up counting every possible combination programatically
- This is where Dynamic Programming comes in (this part took me a while to figure out)
- If we ever get to an index where we know all possible routes to the end of the array from it, don't repeat the recursion
- Instead, skip the recursion and just return the number of ways
- To accumulate this, before we return a recursive sum, store it in a map (our memo)

Now, the logic looks like this for a given index:
  - If this index is the last index in the array, return 1
  - If we have know the number of traversable paths from this index, return it
  - Iterate over all indices after it and recursively traverse them if they are <= the current index + 3 (the appropriate adapter range)
  - Accumulate all total possibilites from the above recursion, store them in the memo, then return them
  
This drastically improves runtime and makes the problem solvable in a reasonable amount of time
