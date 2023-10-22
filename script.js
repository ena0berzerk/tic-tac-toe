'use strict';

const gameBoard = (function () {
  const arrCell = ['', '', '', '', '', '', '', '', ''];

  return { arrCell };
})();

const Players = (name, marker) => {
 return { name, marker };
}

const renderBoardDOM = (function () {
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

const checkGameOver = (function () {
  const _board = gameBoard.arrCell;
  const _textGameOver = document.querySelector('.gameover-h2');

  const renderWinX = function () {
    _textGameOver.textContent = `${getNamesFromForm._namesXO[0]} is win!`;
    _textGameOver.classList.remove('hidden');
  };

  const renderWinO = function () {
    _textGameOver.textContent = `${getNamesFromForm._namesXO[1]} is win!`;
    _textGameOver.classList.remove('hidden');
  };

  const renderTie = function () {
    _textGameOver.textContent = `Game over! It's tie!`;
    _textGameOver.classList.remove('hidden');
  };

  const win = () => {
    if (
      gameBoard.arrCell[0] === 'X' &&
      gameBoard.arrCell[1] === 'X' &&
      gameBoard.arrCell[2] === 'X'
    ) {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinX();
      return;
    } else if (
      gameBoard.arrCell[3] === 'X' &&
      gameBoard.arrCell[4] === 'X' &&
      gameBoard.arrCell[5] === 'X'
    ) {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinX();
      return;
    } else if (_board[6] === 'X' && _board[7] === 'X' && _board[8] === 'X') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinX();
      return;
    } else if (_board[0] === 'X' && _board[3] === 'X' && _board[6] === 'X') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinX();
      return;
    } else if (_board[1] === 'X' && _board[4] === 'X' && _board[7] === 'X') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinX();
      return;
    } else if (_board[2] === 'X' && _board[5] === 'X' && _board[8] === 'X') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinX();
      return;
    } else if (_board[0] === 'X' && _board[4] === 'X' && _board[8] === 'X') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinX();
      return;
    } else if (_board[2] === 'X' && _board[4] === 'X' && _board[6] === 'X') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinX();
      return;
    } else if (_board[0] === 'O' && _board[1] === 'O' && _board[2] === 'O') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinO();
      return;
    } else if (_board[3] === 'O' && _board[4] === 'O' && _board[5] === 'O') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinO();
      return;
    } else if (_board[6] === 'O' && _board[7] === 'O' && _board[8] === 'O') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinO();
      return;
    } else if (_board[0] === 'O' && _board[3] === 'O' && _board[6] === 'O') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinO();
      return;
    } else if (_board[1] === 'O' && _board[4] === 'O' && _board[7] === 'O') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinO();
      return;
    } else if (_board[2] === 'O' && _board[5] === 'O' && _board[8] === 'O') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinO();
      return;
    } else if (_board[0] === 'O' && _board[4] === 'O' && _board[8] === 'O') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinO();
      return;
    } else if (_board[2] === 'O' && _board[4] === 'O' && _board[6] === 'O') {
      gameController.cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
      renderWinO();
      return;
    }
    return tie();
  };

  const tie = function () {
    if (gameBoard.arrCell.some(cl => cl === '')) {
      return gameController._switchActivePlayer();
    } else {
      renderTie();
    }
  };

  return { win, tie };
})();

const getNamesFromForm = (function () {
  const _form = document.querySelector('.name-form');
  const playersDiv = document.querySelector('.players-name');
  let _xPlayer = document.querySelector('#input-one');
  let _oPlayer = document.querySelector('#input-two');

  const textBottomPlayer1 = document.querySelector('.text-bottom-player1');
  const textBottomPlayer2= document.querySelector('.text-bottom-player2');

  const removeBlurBlock = function () {
    const blurDiv = document.querySelector('.blur-modal-board');
    return blurDiv.remove();
  };

  let _namesXO = [];

  _form.addEventListener('submit', el => {
     el.preventDefault();
     playersDiv.classList.add('hidden');
     removeBlurBlock();
     _namesXO.push(`${_xPlayer.value}`, `${_oPlayer.value}`); 
     renderPlayersName();
   });


  const renderPlayersName = function () {
    textBottomPlayer1.textContent = `X: ${_namesXO[0]}`;
    textBottomPlayer2.textContent = `O: ${_namesXO[1]}`;
    textBottomPlayer1.classList.remove('hidden');
    textBottomPlayer2.classList.remove('hidden');

  };

  return { renderPlayersName, _namesXO };
})();


const gameController = (function () {
  const humanPlayer = Players(`Human Player 1`, `X`);
  const AIPlayer = Players(`Human Player 2`, `O`);
  const cells = document.querySelectorAll('.cell');
  let activePlayer = humanPlayer;

  const _switchActivePlayer = () => {
    if (activePlayer === humanPlayer) {
      return (activePlayer = AIPlayer);
    } else return (activePlayer = humanPlayer);
  };

  cells.forEach(cell => {
    cell.addEventListener('click', e => {
      if (cell.childNodes.length === 0) {
        const targetCell = e.target.dataset.cell;
        gameBoard.arrCell.splice(targetCell, 1, (e.target.textContent = activePlayer.marker));
        checkGameOver.win();
      }
    });
  });

  return { activePlayer, cells, _switchActivePlayer, humanPlayer, AIPlayer };
})();

const restart = (function () {
  const restartBtn = document.querySelector('.restart-btn');
  restartBtn.addEventListener('click', () => {
    window.location.reload();
  });
})();
