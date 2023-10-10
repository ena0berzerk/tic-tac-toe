'use strict';

const gameBoard = (function () {
  const cells = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return { cells };
})();

const displayController = (function () {
  return 'hello';
})();

const Players = (name, mark) => {
  return { name, mark };
};

const renderBoard = (function () {
  const boardDiv = document.querySelector('.container-board');

  for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 3; j++) {
      const column = document.createElement('div');
      column.className = 'column';

      row.appendChild(column);
    }
    boardDiv.appendChild(row);
  }
  const boardCells = gameBoard.cells;
  boardCells.forEach(cell => {
    column.textContent = cell;
  });
})();
