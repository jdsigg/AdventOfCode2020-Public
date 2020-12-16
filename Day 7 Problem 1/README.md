Logic

- To my knowledge, this problem cannot be solved parsing line by line without parsing the entire input first
- In this case, we create a map entry for a given bag and set its value as an array of all bags that it could hold
- Then, we iterate over the map's keys and perform recursive logic on them as such:
  - Grab the value associated with a key
  - If the value (array) includes the beloved 'shiny gold' bag, return `true` signifying a find
  - Otherwise, iterate over all indices and repeat this logic for each of them
  - If no indices return a find, return `false`
  - If an index has no children, return `false`
- Accumulate successes for every `true` returned

Re-factor
- Instead of using arrays in the map, we use a set
  - This way, we don't have to linearly find 'shiny gold' with `arr.includes()` and can instead say `set.has()`
- For overall runtime, we can look at the structure of a DFS algorithm
- Consider the following tree
![Graph](https://raw.githubusercontent.com/jdsigg/AdventOfCode2020/main/Day%207%20Problem%201/images/graph.png)
- Where each level's data belongs to a set that includes all data at that level for a given key
  - For example, `bright green`, `bright yellow`, and `bright pink` are all in the same set but are separated for illustration's sake
- The traversal of this tree with DFS looks something like this
![Graph Traverse](https://raw.githubusercontent.com/jdsigg/AdventOfCode2020/main/Day%207%20Problem%201/images/graph-traverse.png)
- This is generally how map traversal would go in this problem. The tree is not simplified, and repeated nodes are duplicated
- Due to this, at worst we touch all (N) nodes of the tree once
  - There is a small performance optimization I added to my code where if a true value is found, it is bubbled up and prevents all other recursion
  - Chances are that this will optimize a large number of our recursive traversals

We will say there are K keys in the graph
For every key K there are N nodes. For a given key K<sub>i</sub>, there are N<sub>i</sub> nodes to traverse at worst

So, the worst case runtime for this algorithm is:  
![equation](https://raw.githubusercontent.com/jdsigg/AdventOfCode2020/main/Day%207%20Problem%201/images/graph_runtime.jpg)
