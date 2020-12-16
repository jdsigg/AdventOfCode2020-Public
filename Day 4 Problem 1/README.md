Logic
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
