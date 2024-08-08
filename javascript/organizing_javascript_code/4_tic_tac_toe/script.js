const gameboard = (function () {
    let gameboardArray = [2, 2, 2, 2, 2, 2, 2, 2, 2]
    return {
        gameboardArray
    }
})()

const gameLogic = (function () {
    const playGame = function () {
        for (let i = 0; i < 9; i++) {
            let desiredIndex = Number(prompt('where to place'))
            if (i % 2 === 0) {
                playRound(0,desiredIndex);
            } else if (i % 2 === 1) {
                playRound(1,desiredIndex)
            }
        }
    }
    const playRound = function (player,arrayNum) {
        gameboard.gameboardArray[arrayNum] = player;
    }
    return {
        playGame,
        playRound
    };
})()
