# unit-4-game - crystals collector

## game play - 'crystals collector'

there are 4 crystals, each containing a different number value unknown to the player.
    clicking a crystal will add a numeric value randomly assigned to the crystal to the total score.
    the player needs to click on the 4 crystals and get a total score equal to the number on the board.

## in the game 

on the board.
    .instructions, number generated randomly onto the board, wins/losses counter, and total score

understanding the game ... before the code
    1. randomly generated number between 19 and 120 already on the board - starts the game
    2. randomly generated number between 1 and 12 for each crystal image
    3. assign the random number (1-12) to each crystal image
    4. clicking on a crystal will add to the total score.
    5. clicking on another crystal will add onto the new total score
    6. total score keeps adding until the new total score equals or is greater than the random number on the board
        if equal then player wins
        if greater then player loses
    7. whenever player wins or loses, game resets
        reset = total score is zero
                    new random number is generated
                    the 4 crystals are assigned new values

## after generating working code

difficulties ...
   . was assigning the values to the crystal images using the class and img tag (where all the crystal images are the same class but has different sources) 
   instead: used ids and generated values for each image with the same code but selecting their individual id
   
   . knowing whether to put variables in the global scope or local. kept moving variables around
   
   . easier to generate same lines of code that executes the same result for each function. able to see everything and know what the function does ... however it generates more lines of code than needed. 


    
