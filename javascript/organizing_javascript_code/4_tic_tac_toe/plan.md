LOGIC

play round

player 1 places piece 1A
player 2 places piece 1B
...
player 2 places piece 4B
player 1 places piece 5A

//////////

Play round (increment i every round)

ONE TURN (LOOP)
    which players turn?
    **place on board
    (check for win)

PLACE ON BOARD
    choose array index to change

function whoseTurn
    i from play round
    modulo i by 2
    if remainder 1, true
    if remainder 2, false

function oneTurn(playerTurn,indexToChange)
    gameboardArray[indexToChange] = playerTurn
    

////////// OBJECTS

GAMEBOARD

gameboardArray : {_11 , _12 , _13 , _21 , _22 , _23 , _31 , _32 , _33}

GAMELOGIC

playround : LOOP oneTurn

