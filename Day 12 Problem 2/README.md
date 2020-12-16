Logic

- Instead of moving the position, we are changing a `waypoint` with each instruction
- Only `F` instructions move the ship in the direction of `waypoint`
- For North, South, East, and West
  - Move `waypoint`
- For Left and Right
  - We must re-define what each direction means (For example, A 90 degree clockwise rotation means North becomes East, East becomes South, South ...)
  - Apply our formulas from Part 1 to each direction
  - With these new directions, re-define the `waypoint`
- For Forward
  - Move the ship in the direction of the `waypoint` however many times it is defined by the instruction
  
Similar to problem 1, calculate the ship's distance
