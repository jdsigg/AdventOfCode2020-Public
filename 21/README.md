Logic

Part 1
- Every line of the file we read represents a set of information where one item from that set HAS to be an allergen
- The more we read lines, the more this specific "one item" rule is repeated
- This is essentially layering venn diagrams on top of one another over and over until the remaining diagrams hold the information you need
- As we iterate over the file, grab the allergen information and trim from that which we've already seen
  - If we've seen this allergen already, preserve the overlap of this line and that which was seen before it
  - Otherwise, any of this line could be the allergen, so save them all for future checking
- In the end, sum the number of times an allergen ingredient appears in the input

Part 2
- The object we produce from part 1 contains allergens and their possible ingredient candidates
- There has to be at least one allergen -> ingredient mapping that is 1 to 1
- Starting with this, remove this ingredient from all allergen lists
- After this, there are more allergen -> ingredient mappings that are 1 to 1
- Repeat this process until all mappings are 1 to 1
- Combine the data together as stated in the problem to get the answer
