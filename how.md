# What we should compare?
Массив должен быть не пустой и не выигрышним

Cell.AddEventListener by click +
IF win condition +
  then 
    print('win message') +
    block gameboard +
  end
ELSE NOT WIN COMBO 
  IF arr full
    then    
      print('tie')
      block gameboard
    end
  ELSE NOT FULL ARR
    make X draw marker
    turn to O
    *again call click listener*
    make O draw marker
    turn to X
    *again call click listener*


turn X
check if in cell no symbols
if not make a marker X
turn O
check if in cell no symbols
if not make a marker O
turn X
repeat
check if arr is full
if not full check if win combination?
if no win combo and not full then next turn
if full and no combination then tie


how check if board (arr) is has no spaces? (Full of X or O?)

Что такое полный массив (игровая доска)? Это массив (игровая доска) в котором не осталось '' и есть только Х или О

start game
board is empty from ''? false ['', '', '', '', '', '', '', '', '']
player1 marker X on cell of board //  ['X', '', '', '', '', '', '', '', ''] 
board is empty from ''? false 
player2 marker O on cell of board // ['X', '', 'O', '', '', '', '', '', ''] 
board is empty from ''? false
repeat til pre-end
player1 marker X on cell of board  ['X', 'O', 'O', 'O', 'X', 'X', 'O', 'X', 'O'] 
boars is empty from ''? true
then log 'it's a tie!'

how check if board (arr) is empty from ' '?

Нужно каждую ячейку проверить на нахождение этого символа ' '
После каждого хода нужно проверять доску на заполненность " "

const isFullBoard = board.some(cell => cell === ' ') 
Эта логика задает вопрос: "В доске еще остался элемент ' '?" 
Таким образом если some найдет хоть одну ' ', то он кидает true и игра продолжается

if (isFullBoard) {     
    game continue
} else 'its tie!'

activePlayer = X
x is marker on board
active player = O 
o marked board 
active player x 
// left 1 turn to win 
x marked board 
x is win 
activePlayer = O? 







