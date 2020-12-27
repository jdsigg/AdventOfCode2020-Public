Logic

Part 1
- By brute forcing this problem, we are taking advantage of the fact that the input size is really small
- We can write a function to determine the index of a given value in the input with a linear traversal
- Perform the 100 cup orientation shifts and print them starting from 1

Part 2
- We can't brute force this by constantly traversing 1,000,000 items
- We have to perform 10,000,000 iterations. One interation of 1,000,000 is doable, but not 10,000,000 with multiple traversals per iteration (like done in part 1)
- We can creatively use a JavaScript Object to store key, value pairs where the key represents a cup and it's value represents another key in the object
- This allows for constant look-ups while managing, what is essentially, a circular linked list
- We creatively move pointers around instead of constantly slicing and splicing arrays together
- This runs really fast compared to the solution from Part 1
