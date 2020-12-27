Logic

Part 1

- In this solution, all we need to do is check for each of the 7 required keys in a given passport
  - 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'
- To do this, parse the file line by line
  - Since passports are separated by blank lines, continue accumulating validity for a given passport until a blank line is seen
- If we find a key that is valid and we haven't seen it yet for a given passport, mark it as seen for the current passport
- Once a new line is reached, check if we have seen all 7 of the required keys
- Edge Case: The file does NOT end in a new line, so we must check to make sure the last passport is valid once the file is closed

I do not read key-value pairs from the file one by one.
I read the whole line in, then split the line into pairs, then iterate over those pairs.

For an input of length N and average number of pairs per line of P (realistically, there are 8 pairs max), the runtime here is O(N*P)

Part 2
- The file parsing for this part is exactly the same as that from part 1, so we do not change it
- Instead, we create 7 validator functions for the values associated with keys that come in
- Instead of checking keys against a set, we check them against a map whose values correspond to a given key's validator
- The validators vary in how they operate per the problem's description, so please check the functions for their behavior

- As said before, the file parsing is identical, so we just put a conditional in to check a value with its validator before marking it as seen
- We perform the same checks for 7 keys (if they did not pass their validator, they won't make it to the key set) before incrementing the number of valid passports

REFACTOR
- My regular expression for color matching included the characters A-F. This was not defined in the problem, but luckily I did not run into any test cases that had these letters. I removed this for the sake of correctness.

This runtime is similar to part 1. N lines of the file, P pairs that are iterated over per line, constant time validations and lookups.
Runtime: O(N*P)

