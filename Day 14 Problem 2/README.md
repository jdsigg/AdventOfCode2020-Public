Logic

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
