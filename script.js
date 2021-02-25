const board = document.querySelector('#board-container');
const clearBtn = document.querySelector('#clear-btn');
const changeBtn = document.querySelector('#change-btn');
let boardSize = document.querySelector('#size-list').value;

makeBoard(boardSize);

board.addEventListener('mouseover', changeBackground);
clearBtn.addEventListener('click', clearItems);
changeBtn.addEventListener('click', changeBoardSize);

function changeBackground (e) {
    if (e.target.className !== 'grid-item') {
        return;
      }
    e.target.setAttribute('style', `background: rgb(${random(0, 220)}, ${random(0, 220)}, ${random(0, 220)});`);
}

function clearItems() {
    const items = board.childNodes;
    for (let i =0; i < items.length; i++) {
        items[i].style.background = 'white';
    }
}

function changeBoardSize(){
    boardSize = document.querySelector('#size-list').value;
    board.textContent = '';
    makeBoard(boardSize);
}

function makeBoard (boardSize){
    board.setAttribute('style', `grid-template-columns: repeat(${boardSize}, ${720/boardSize}px)`);

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++){
            const boardItem = document.createElement("div");
            boardItem.className = 'grid-item';
            board.appendChild(boardItem);
        }
    }
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
