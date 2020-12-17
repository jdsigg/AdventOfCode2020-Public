Logic

Part 1

- I decided to brute force this solution
- Read input
- Mark pointers that mark the range at which we will check values in the "infinite plane"
  - Since the range of valid points to check from shouldn't change by more than + / - 1 per cycle, we can keep track of the area of X, Y, and Z values that we are checking with 2 pointers coordinate
- After that . . .

For every cycle
  Change pointers
  Make a blank object of accumulated points: `pointsNew`
  Set a total counter to 0
  For all x in xRange
  | For all y in yRange
  |   For all z in zRange
  |     For all pX within 1 of x
  |     | For all pY within 1 of y
  |     |   For all pZ within 1 of z
  |     |     if the pX,pY,pZ is not x,y,z and pX,pY,pZ is occupied
  |     |       increment occupied around x,y,z
  |     Perform the "should x,y,z switch from occupied to vacant" logic
  |     Store the new x,y,z in `pointsNew`
  Move `pointsNew` into `points`
  
At the end this will print the appropriate total after 6 cycles

Part 2
- My solution is exactly the same with and extra nested loop based on a fourth dimension `w` and it's nested values to check `pW`
