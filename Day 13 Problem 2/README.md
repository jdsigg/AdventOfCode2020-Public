Logic

- The prompt suggested that traditional brute force would not work (check a T for all busses, if not, T++)
- A smarter brute force suggests matching conditions for each bus and then preserving that condition while finding subsequent ones
- While looking for the first bus, we `stepBy` 1 and check at `currentT` 1
- While `((currentT + offset) % id) !== 0` we increment `currentT` by `stepBy`
- Once a T is found, change the `stepBy` to be on multiples of that T
- Repeat until all buses are checked
