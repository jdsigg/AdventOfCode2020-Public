Logic

- Here, we could achieve the solution from brute approach with three nested loops -> O(N^3)
- Instead, if we sort the data first, we can take advantage of the collection's new nature to improve performance
- Sorts vary on time and space complexity, but on average we are doing this in
  - Runtime: N*LogN. Worst case N^2.
  - Memory: 2*N if we read the data in, then merge the data back together in a new collection
- Now, with the sorted data, use a "two-pointers" after a fixed point to find the triplet
- At most, we will pick N-2 fixed points and for each fixed point, we will touch the remaining set of numbers
  - Runtime: N^2
  
Asymptotic Runtime: N^2
Memory Complexity: N
