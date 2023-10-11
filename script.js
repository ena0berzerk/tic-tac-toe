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

const displayController = (function () {
  const humanPlayer = Players('Nikita', 'X');
  const AIPlayer = Players('AI-3000', 'O');
  const cells = document.querySelectorAll('.cell');
  let _activePlayer = humanPlayer.marker;

  cells.forEach(cell => {
    cell.addEventListener('click', e => {
      const targetCell = e.target.dataset.cell;
      gameBoard.arrCell.splice(targetCell, 1, (e.target.textContent = _activePlayer));
    });
  });

  const _checkActivePlayer =
    _activePlayer === humanPlayer.marker ? AIPlayer.marker : humanPlayer.marker;

  return { humanPlayer, AIPlayer };
})();

// const findTargetCell = gameBoard.arrCell.indexOf(e.target); save for future to check if mark is already paint on board cell
