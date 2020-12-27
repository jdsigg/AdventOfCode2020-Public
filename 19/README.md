Logic

Part 1 - No Loops

- I can recursively build a massive regular expression that will represent all strings that match Key `0`
- Rules have three different structures
  - `'x': 'a'`
    - Matching a single character in RegEx is just matching the character itself -> `a` in this case
  - `'x': 1 2`
    - Matching two expressions next to each other is just placing two expressions together -> `(1)(2)` in this case
  - `'x': 1 2 | 3 4`
    - Matching two expressions OR another two is just placing an OR `|` in between them -> `((1)(2))|((3)(4))` in this case
- Grabbing the regular expression at `0` allows me to check all input lines against it in one pass

Part 2 - Loops

- While I can still recursively build a massive RegEx, I can't do it the same way as before
- Two grammar rules have been re-defined that introduce loops to the problem
- The rules are
  - `8: 42 | 42 8`
  - `11: 42 31 | 42 11 31`
- We can break down these rules to individually define a RegEx for them, replace them, then build our RegEx like normal
- For `8: 42 | 42 8`
  - At the first level, this means "we can have expression 42, or expression 42 followed by expression 8"
  - At the level below, this means "we can have expression 42 followed by expression 42, or expression 42 followed by expression 42 followed by expression 8"
  - This goes on forever, but what does it really mean?
  - Looking at the base level, we must have <b>at least one</b> expression 42 followed by any number after that
  - In RegEx, this is accomplished by the operator `+`
  - So, in our program, we can calculate the RegEx for one expression 42, then wrap that with `(42)+` to achieve our goal
- For `11: 42 31 | 42 11 31`
  - At the first level, this means "we can have expression 42 followed by expression 31, or we can have expression 42 followed by expression 11 followed by expression 31"
  - At the level below, this means "we can have expression 42 followed by expression 42 followed by expression 31 followed by expression 31, or ..."
  - This goes on forever, but what does it really mean?
  - Looking at the base level, we must have any 1 42 followed by 1 31, or 2 42 followed by 2 31, ...
  - In RegEx, this is accomplished by defining operator repetition via `{n}` where n is an integer
  - We can't just arbitrarily define n, though. We need a cutoff for when to stop
  - I couldn't fit a larger string into the RegEx constructor after joining ~20 of these together
  
- Similar to part 1, iterate over all input strings and check for RegEx match
