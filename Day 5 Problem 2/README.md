Logic

- Reach each line of input -> O(N)
- Sort from smallest to largest -> O(N*LogN) Average, O(N^2) Worst Case
- Traverse sorted array until a given index `i` results in `array[i] + 1 != array[i+1]` -> O(N)
- This signifies the empty seat, hence our id is `array[i] + 1`

Asymptotic Runtime depends on the sort implementation and performance for the given collection.
