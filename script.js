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
    let _cell = document.createElement('div');
    _cell.className = 'cells';
    _cell.textContent = element;
    _boardDiv.appendChild(_cell);
    _cell.setAttribute('data-cell', id);
  });

  // const getCellId = () => {};

  return { renderCells };
})();

const displayController = (function () {
  const humanPlayer = Players('Nikita', 'X');
  const AIPlayer = Players('AI-3000', 'O');
  let _activePlayer = humanPlayer.marker;

  // code to allow draw 'X' on board by _activePlayer

  return { humanPlayer, AIPlayer };
})();
