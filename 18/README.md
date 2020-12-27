Logic

- There are lots of ways to programatically solve a traditional mathematical equation
- However, the rules are different for this problem

Part 1
- Equations sum left to right regardless of operation precedence
  - Parenthesis are the only thing that dictates order
- We can keep track of open and closing parenthesis with a `Stack` and go from there
  - For example, assuming an appropriate formula, we can never see a `)` without having already seeing a `(`
  - If we see a `)` in our formula, perform all operations up to the closest `(`
- In order to go about doing this, we must traverse the formula in reverse (right to left) so that when we `pop` from the `Stack` we are operating left to right
- So, to solve
  - Read the input
  - Trim out spaces from the formula (for the sake of each character meaning something in a given formula)
  - For formula character (in reverse)
    - If a character is not a `)`, push it to the stack
    - Otherwise, `pop` everything from the stack, operating as we go, until we see a the original `(`
  - At the end, the `stack` will only have values and `+ / -` operators in it
  - Accumulate these, `pop`ing from the stack
  - Sum all formula answers
  
  
Part 2
  - Everything from part 1 applies, except now we must give addition precedence over multiplication
    - We can see addition in multiple forms
      1. `num + num`
      2. `expression) + num`
      3. `num + (expression`
      4. `expression) + (expression`
    - If we tackle addition as we go, we can avoid most of the precedence headache
    - However, there will still be cases where our end stack has addition in it
      - For these cases, parse addition before multiplication
  - So, to solve
    - Perform equation parsing similar to part 1
    - Parenthesis have precedence over all, so check those first on the stack
      - By doing this, we can bury additions of forms 3 and 4 above
      - To handle this, loop until those conditions don't exist
    - Next, if we have addition that is not following by a parenthesis
      - Do the addition right away
    - Now, move through the `Stack` and perform all additions
    - Lastly, move through the `Stack` and perform all multiplications
    - Sum all formula answers
