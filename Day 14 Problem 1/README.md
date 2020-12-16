Logic

- Read the whole file into an array
- Since memory addresses are unique, we can represent them with a `Map()`
- For every item in the array
  - If it is a mask, set it as the current mask
  - Otherwise
    - Parse the `memory location`
    - Parse the `value` as a binary string
    - Extend `value` out to contain 36 bits of information
    - Create an array to keep track of `new values`
    - For every bit in the mask (and the value)
      - If the mask bit is an `'X'`, push the value bit to `new values`
      - Else, push the mask bit to `new values`
    - When we finish, join the `new values` together, parse the decimal from binary, and store it in memory

- Iterate over memory and sum all values
