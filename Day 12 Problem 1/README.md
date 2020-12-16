Logic

- We must iterate over every instruction and perform operations on the ship based on them
  - For North, East, South, and West
    - Increment the ship's position without changing direction
  - For Left and Right
    - We can represent the way we are facing by an integer pointing to one of the following `['N', 'E', 'S' , 'W']`
    - I call this integer `facing`
    - For left
      - We are going counter clockwise (normally subtraction)
      - Instead, we can determine the new position by subtracting the direction from 360
        - We don't have to worry about negative values this way
      - Let's break down this formula: `(facing * 90 + (360 - value)) / 90 % 4`
        - `(facing * 90 + (360 - value))`
          - Turn the current index into a degree, then find the new degree by adding to it `360 - value`
        - This needs to be turned back into an index, so we do that with `/ 90`
        - The index could be outside the array bounds, so we wrap it around with `% 4`
    - For right
      - Similar logic applies here, but clock-wise already represents addition
      - `(facing * 90 + value) / 90 % 4`
        - Turn the current index into a degree, then find the new degree by adding to it `value`
        - This needs to be turned back into an index, so we do that with `/ 90`
        - The index could be outside the array bounds, so we wrap it around with `% 4`
  - For forward
    - Increment the ship's position based on where we are currently facing
    
- After we finish, find the magnitude of the East / West and North / South directions, then add them
