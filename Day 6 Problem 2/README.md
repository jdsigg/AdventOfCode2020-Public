Logic

- Instead of unique questions answered by each group, we care about frequeny of questions answered by each group
- We can keep track of this with a Map() instead of a Set(), where characters are keys and their values are frequencies in the group
- Traverse the input line by line
- For each line, iterate over every character
- If the character has not been seen in this group yet, add it to the Map() with a value of 1 (first occurrence)
- If the character has been seen in this group, update the value in the Map() to be `= oldValue + 1`
- While we traverse lines, each new line that is not blank represents an individual, so increment a counter on each line to keep track of the number of individuals
- When we see a new line, a group has ended so we must check for each key in the map if everyone has answered that question
- Iterate over the map, incrementing to the total when the value at a given key equals the number of individuals in that group

- Perform this check on file close, as the file does not end with a new line

- Iterate over N lines -> O(N)
- Average line length of M -> O(N*M)
- For G groups, on group end iterate over average K keys -> O(G*K) (I chose to not use the Map.keys() iterator and instead spread the keys into an array. I am ignoring this)

Since we are not doing Group checks on every line, GK is separate from NM

Runtime is O(N*M + G*K)
