'use strict';

const gameBoard = (function () {
  const arrCell = ['', '', '', '', '', '', '', '', ''];

  return { arrCell };
})();

const Players = (name, marker) => {
  return { name, marker };
};

const renderBoardDOM = (function () {
  const _boardDiv = document.querySelector('.container-board');

  const renderCells = gameBoard.arrCell.forEach((element, id) => {
    let _createCell = document.createElement('div');
    _createCell.className = 'cell';
    _createCell.textContent = element;
    _boardDiv.appendChild(_createCell);
    _createCell.setAttribute('data-cell', id);
  });

  return { renderCells };
})();

const gameController = (function () {
  const humanPlayer = Players('Nikita', 'X');
  const AIPlayer = Players('AI-3000', 'O');
  const cells = document.querySelectorAll('.cell');
  let _activePlayer = humanPlayer;

  const _switchActivePlayer = () =>
    _activePlayer === humanPlayer ? (_activePlayer = AIPlayer) : (_activePlayer = humanPlayer);

  cells.forEach(cell => {
    cell.addEventListener('click', e => {
      if (cell.childNodes.length === 0) {
        const targetCell = e.target.dataset.cell;
        gameBoard.arrCell.splice(targetCell, 1, (e.target.textContent = _activePlayer.marker));
        _switchActivePlayer();
      }
    });
  });

  return { humanPlayer, AIPlayer, _activePlayer, cells };
})();

const checkGameOver = (function () {
  // compare not the array but primitives
  // 'some' method may helps when u need create 8 combinations
  const winCondition = [[0, 1, 2]];

  // const win1 = combinationWin[0] === gameBoard.arrCell
  const log = () => {
    const board = gameBoard.arrCell;
    // board.slice(0, 3)
    if (board[0]) return 'win';
  };
  return { winCondition, log };
})();
