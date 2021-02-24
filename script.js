const board = document.querySelector('#board-container');
let boardSize = document.querySelector('#size-list'); // TO nie to
console.log(boardSize);
boardSize = 64;

board.setAttribute('style', `grid-template-columns: repeat(${boardSize}, ${720/boardSize}px)`);

for (let i =0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++){
        const boardItem = document.createElement("div");
        boardItem.className = 'grid-item';
        board.appendChild(boardItem);
    }
}

board.addEventListener('mouseover', changeBackground);

function changeBackground (e) {
    if (e.target.className !== 'grid-item') {
        return;
      }
    e.target.setAttribute('style', `background: rgb(${random(50, 256)}, ${random(50, 256)}, ${random(50, 256)});`);
}

// function random(max) {
//     return Math.floor(Math.random() * max - 1) + 1;
// }

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
