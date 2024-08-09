const gameboard = (function () {
    let gameboardArray = [2, 2, 2, 2, 2, 2, 2, 2, 2]
    const individualGrids = document.querySelectorAll('.single_grid');
    return {
        gameboardArray,
        individualGrids
    }
})();

const gameLogic = (function () {

    let playerCount = 0;
    let turnNum = 0

    const increaseTurnNum = function () {
        gameLogic.turnNum = gameLogic.turnNum + 1
    }

    const increasePlayerCount = function (playerObject) {
        gameLogic.playerCount = gameLogic.playerCount + 1;
    }

    const decreasePlayerCount = function () {
        gameLogic.playerCount = gameLogic.playerCount - 1;
    }

    const checkPlayerCount = function () {
        console.log(gameLogic.playerCount);
        return gameLogic.playerCount;
    }

    const playGame = function () {
        for (let i = 0; i < 9; i++) {
            let desiredIndex = Number(prompt('where to place')) /////////////////////////////
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
            gameboard.gameboardArray[arrayNum] = player.marker;
            gameLogic.increaseTurnNum();
            displayFunctions.displayBoard();
        } else {
            playRound (player, Number(prompt('invalid, try again')));
        }
    }
    return {
        playGame,
        playRound,
        checkWin,
        increasePlayerCount,
        decreasePlayerCount,
        increaseTurnNum,
        playerCount,
        turnNum
    };
})()

const displayFunctions = (function () {
    const displayBoard = function () {
        for (let i = 0; i < 9; i++) {
            let currentGrid = gameboard.individualGrids[i];
            currentGrid.textContent = `${gameboard.gameboardArray[i]}`
        }
    }

    return {
        displayBoard
    };
})();

const userInteraction = (function () {
    const enableGridInteraction = function () {
        for (let i = 0; i < 9; i++) {
            let index = Number(gameboard.individualGrids[i].getAttribute('id'));
            gameboard.individualGrids[i].addEventListener('click', () => {
                if (gameLogic.turnNum % 2 === 0) {
                    gameLogic.playRound(players.players[0],index);
                } else if (gameLogic.turnNum % 2 === 1) {
                    gameLogic.playRound(players.players[1],index);
                }
            })
        }
    }

    const addPlayer = function (name, marker) {
        let newPlayer = new Player (name, marker)
        
    }

    return {
        enableGridInteraction,
        addPlayer
    }

    }
)();

const players = (function () {

    let players = []

    const Player = (playerName, marker) => {
        return {
            playerName,
            marker
        }
    }

    const createPlayer = (playerName, marker) => {
        let newPlayer = Player (playerName, marker);
        players.push(newPlayer);
        gameLogic.increasePlayerCount();
    }

    return {
        Player,
        createPlayer,
        players
    }
})();

players.createPlayer('a','X');
players.createPlayer('b','O');
