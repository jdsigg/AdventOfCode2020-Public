Logic

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
