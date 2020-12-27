Logic

Part 1

- My solution nicely fits what you would logically doing this problem by hand
- Until there are no differences in seats between two iterations:
  - Duplicate the seats into a collection that represents the next iteration
  - Iterate over every seat
    - Check the positions around each index (up left, up, up right, left, right, down left, down, down right)
    - We are checking for the total number of occupied seats that are at these locations
      - We must be careful to not check when it doesn't make sense
        - For example, the upper-left-most seat does not have anything above it or to the left of it
        
  - Upon obtaining this value, perform the checks that are required to change a seat from occupied to vacant, or vice versa
  - At the end of an iteration
    - If no seats have changed, we are finished
    - Otherwise, replace the current seat collection with the next seat collection

Part 2

- The body of the program does not change
- We only change how we check for seats at a given index
- Now, for every index in an iteration:
  - Iteratively search in the appropriate direction for either an empty or an occupied seat
  - Return the number of occupied seats
  - Perform the appropriate checks
