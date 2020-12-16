Logic
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
