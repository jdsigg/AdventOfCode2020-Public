Logic

Part 1
- We don't really need to know what the board looks like to solve this
- All we care about is what portions of the grid are corners
- Iterate over all tiles, then iterate again ignoring the current tile we are looking at
- Perform all necessary comparisons to find which tiles have only two neighbors (the corners)
- Accumulate a product as we go

Part 2

This part of the problem was a nightmare. It required multiple re-writes. On one occasion, I was able to solve example input without solving my real input.
I am happy with what I come up with. This stalled my AoC 100% completion by a full 24 hours. Let's dive in.

- From part 1, we had the logic required to determine which tiles were corners
- If we modify it a bit, we can find the first corner
- Based on it's neighbors, we can place it in an array at either the top left, top right, bottom left, or bottom right
- Then, we can perform a recursive function to populate our array of what one possible state of the image (almost) looks like
- Here is the functions logic
  - For all input tiles (i)
    - For all input tiles (j) where j != i
      - Find all side comparisons that match
      - Push matches and their respective locations onto an array
      - Rotate / flip matched sides accordingly
      - Place a matched side and recurse to it's spot
      - Do NOT recurse to spaces we have already placed
- In the end, this will produce an array where each tile exists with edges still on them
- These edges need trimmed, so turn each 10x10 tile into an 8x8 tile
- Now, after this trimming, we have one valid iteration of the image stored in one 2x2 array
- Go over all iterations of this array rotated 0, 90, 180, and 270 degrees as well as all those flipped once across a vertical axis (results in 8 possible combinations)
- One of these combinations HAS to be the correctly constructed image
- Traverse each combination and perform the sea monster checking logic described in the problem
