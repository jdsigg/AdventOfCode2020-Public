Logic

Part 1

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

Part 2

- Instead of doing the bit-wise extension on memory values, we do it on memory addresses instead
- Keep track of an array of arrays that represents all memory locations to write to
- Now for all bits in the mask (and the extended memory value)
  - Grab the current mask bit
  - Grab the current mem bit
  - If the mask bit is `0`
    - For all memory location arrays, push the mem bit
  - Else if the mask bit is `1`
    - For all memory location arrays, push the mask bit
  - Else (if the mask bit is `X`)
    - For all memory location arrays
      - Duplicate the array
      - Push a `0` onto the original array
      - Push a `1` onto the duplicate array
      - Accumulate duplicates as we go
    - For all accumulated duplicates
      - Push into all memory locations
 
 - Once we finish, we have an array of arrays that represents all memory locations to write to
 - Iterate over all of these
  - Join each of them, parse the binary, and store in the map

- At the end, iterate over all of memory and accumulate the sum
