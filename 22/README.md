Logic

Part 1
- This card game has a nicely defined set of rules
- Translate the rules from the problem input into code
  - Read the input
  - Loop until the game ends (one player runs out of cards)
  - Compare the top card of each player to the other
  - Winner takes both cards in the order [winnerCard, loserCard]
  - Place these on the bottom of the winner's deck
- In the end, sum the winner's deck according to the rules defined in the problem

Part 2
- A "recursive combat" style game format is introduced
- The rules of recursive combat are also nicely defined by the problem input
  - If both player's top card's value is `<` the length of their deck, grab those cards below this card and recurse
  - Keep track of sub-game orientations, as we don't want to recurse infinitely to determine who wins a sub-game
    - I did this with a set of strings for each sub-game `p1:p1deck,p2:p2deck`
  - If sub-games can't be played, do what we did in part 1 to determine the winner
- In the end, perform the same sum as in part 1
