Logic

Part 1
- We can use a set to keep track of tiles that we have seen / not seen in a given line of input
- If we think of each traversal from hexagon to hexagon as walking in a 2D space, we can build a set of points that we keep track of as we walk over a line
- At the end, the size of the set will determine how many hexagons are turned over to black (seen an odd number of times)

Part 2
- Another beautiful conception of a conway game of life problem
- I created a massive array (just experimented with size) and placed the points from part 1 into it
- I then iterated over the entire array performing the game of life with the given input conditions
- Each time I iterate, I keep track of the total number of black tiles, then print those after the last iteration
