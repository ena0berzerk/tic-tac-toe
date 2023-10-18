'use strict';

const gameBoard = (function() {
    const arrCell = ['', '', '', '', '', '', '', '', ''];

    return { arrCell };
})();

const Players = (name, marker) => {
    return { name, marker };
};

const renderBoardDOM = (function() {
    const _boardDiv = document.querySelector('.container-board');

    const renderCells = gameBoard.arrCell.forEach((element, id) => {
        let _createCell = document.createElement('div');
        _createCell.className = 'cell';
        _createCell.textContent = element;
        _boardDiv.appendChild(_createCell);
        _createCell.setAttribute('data-cell', id);
    });

    return { renderCells, _boardDiv };
})();

const gameController = (function() {
    const humanPlayer = Players('Nikita', 'X');
    const AIPlayer = Players('AI-3000', 'O');
    const cells = document.querySelectorAll('.cell');
    let activePlayer = humanPlayer;

    const _switchActivePlayer = () =>
        activePlayer === humanPlayer ? (activePlayer = AIPlayer) : (activePlayer = humanPlayer);


    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {     
            if (cell.childNodes.length === 0) {    
              const targetCell = e.target.dataset.cell;
              gameBoard.arrCell.splice(targetCell, 1, (e.target.textContent = activePlayer.marker));
              _switchActivePlayer();
              checkGameOver.xWin();
              checkGameOver.oWin();
            };
        });
    });

    return { humanPlayer, AIPlayer, activePlayer, cells };
})();

const checkGameOver = (function() {
    const _board = gameBoard.arrCell   
    

    const xWin = () => {
        if (_board[0] === 'X' && _board[1] === 'X' && _board[2] === 'X') {
            console.log(`${gameController.humanPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
            return;
        } else if (_board[3] === 'X' && _board[4] === 'X' && _board[5] === 'X') {
            console.log(`${gameController.humanPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[6] === 'X' && _board[7] === 'X' && _board[8] === 'X') {
            console.log(`${gameController.humanPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[0] === 'X' && _board[3] === 'X' && _board[6] === 'X') {
            console.log(`${gameController.humanPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[1] === 'X' && _board[4] === 'X' && _board[7] === 'X') {
            console.log(`${gameController.humanPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[2] === 'X' && _board[5] === 'X' && _board[8] === 'X') {
            console.log(`${gameController.humanPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[0] === 'X' && _board[4] === 'X' && _board[8] === 'X') {
            console.log(`${gameController.humanPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[2] === 'X' && _board[4] === 'X' && _board[6] === 'X') {
            console.log(`${gameController.humanPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else tie();
    };

    const oWin = () => {
        if (_board[0] === 'O' && _board[1] === 'O' && _board[2] === 'O') {
            console.log(`${gameController.AIPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[3] === 'O' && _board[4] === 'O' && _board[5] === 'O') {
            console.log(`${gameController.AIPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[6] === 'O' && _board[7] === 'O' && _board[8] === 'O') {
            console.log(`${gameController.AIPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[0] === 'O' && _board[3] === 'O' && _board[6] === 'O') {
            console.log(`${gameController.AIPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[1] === 'O' && _board[4] === 'O' && _board[7] === 'O') {
            console.log(`${gameController.AIPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[2] === 'O' && _board[5] === 'O' && _board[8] === 'O') {
            console.log(`${gameController.AIPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[0] === 'O' && _board[4] === 'O' && _board[8] === 'O') {
            console.log(`${gameController.AIPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else if (_board[2] === 'O' && _board[4] === 'O' && _board[6] === 'O') {
            console.log(`${gameController.AIPlayer.name} is win!`);
            gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        } else tie();
    };

    const tie = () => {
       const _isFullBoard = _board.some(cell => cell === '');
       if (!_isFullBoard && !xWin && !oWin) {
         console.log('tie');
        };
    };

    return { xWin, oWin, tie };
})();

