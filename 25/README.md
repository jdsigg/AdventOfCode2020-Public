Logic

This problem only has one part :)
Part two is achieved by completing all other problems

Understanding what the problem was asking for was the hardest part

- We can perform the process with both public keys, but the answers will be the same and only serve to verify the other
- I chose to find the `loop size` for the card
- With that, perform the same process to find the encryption key

Each process
- start with a value of 1
- `value = value * subject number % 20201227`

Do this repeatedly to find the loop size  
Do this loop size times to find the encryption key

Thanks AoC 2020!
