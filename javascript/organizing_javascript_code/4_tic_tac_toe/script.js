const gameboard = (function () {
    let gameboardArray = [2, 2, 2, 2, 2, 2, 2, 2, 2]
    const individualGrids = document.querySelectorAll('.single_grid')
    return {
        gameboardArray,
        individualGrids
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

            if (checkWin() === true) {
                break;
            }
        }
    }

    const checkWin = function () {
        let gbc = gameboard.gameboardArray;
        if (gbc[0] === gbc[1] && gbc[0] === gbc[2] && gbc[0] !== 2) {
            return true;
        } else if (gbc[3] === gbc[4] && gbc[3] === gbc[5] && gbc[3] !== 2) {
            return true;
        } else if (gbc[6] === gbc[7] && gbc[6] === gbc[8] && gbc[6] !== 2) {
            return true;
        } else if (gbc[0] === gbc[3] && gbc[0] === gbc[6] && gbc[0] !== 2) {
            return true;
        } else if (gbc[1] === gbc[4] && gbc[1] === gbc[7] && gbc[1] !== 2) {
            return true;
        } else if (gbc[2] === gbc[5] && gbc[2] === gbc[8] && gbc[2] !== 2) {
            return true;
        } else if (gbc[0] === gbc[4] && gbc[0] === gbc[8] && gbc[0] !== 2) {
            return true;
        } else if (gbc[2] === gbc[4] && gbc[2] === gbc[6] && gbc[2] !== 2) {
            return true;
        } else {
            return false;
        }
    }

    const playRound = function (player,arrayNum) {
        if ((gameboard.gameboardArray[arrayNum] === 2) && arrayNum <= 9) {
            gameboard.gameboardArray[arrayNum] = player;
        } else {
            playRound (player, Number(prompt('invalid, try again')));
        }
    }
    return {
        playGame,
        playRound,
        checkWin
    };
})()

