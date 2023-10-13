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
  let _activePlayer = humanPlayer.marker;

  const _switchActivePlayer = () =>
    _activePlayer === humanPlayer.marker
      ? (_activePlayer = AIPlayer.marker)
      : (_activePlayer = humanPlayer.marker);

  cells.forEach(cell => {
    cell.addEventListener('click', e => {
      if (cell.childNodes.length === 0) {
        const targetCell = e.target.dataset.cell;
        gameBoard.arrCell.splice(targetCell, 1, (e.target.textContent = _activePlayer));
        _switchActivePlayer();
      }
    });
  });

  const getActivePlayer = () => _activePlayer;

  return { humanPlayer, AIPlayer, getActivePlayer, cells };
})();

const checkGameOver = (function () {
  // compare not the array but primitives
  const combinationWin = [
    // horisontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const log = () => {
    gameController.cells.forEach(item => {
      const sh = item.getAttribute('data-cell').textContent;
      console.log(sh);
    });
  };

  return { combinationWin, log };
})();
