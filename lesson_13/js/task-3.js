"use strict";
const gameBoard = [
    ["X", " ", "0"],
    ["0", "X", " "],
    [" ", "0", " "],
];
const possibleBoards = [];
function generateMoves(board, player) {
    let isEmptyCellFound = false;
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
            if (board[rowIndex][colIndex] === " ") {
                isEmptyCellFound = true;
                board[rowIndex][colIndex] = player;
                const nextPlayer = player === "X" ? "0" : "X";
                generateMoves(board, nextPlayer);
                board[rowIndex][colIndex] = " ";
            }
        }
    }
    if (!isEmptyCellFound) {
        possibleBoards.push(board.map((row) => [...row]));
    }
}
generateMoves(gameBoard, "X");
function showBoard(board, title) {
    document.write(`<p>${title}</p>`);
    document.write(`<table border="1" cellspacing="0" cellpadding="10">`);
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        document.write(`<tr>`);
        for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
            document.write(`<td>${board[rowIndex][colIndex]}</td>`);
        }
        document.write(`</tr>`);
    }
    document.write(`</table><br>`);
}
showBoard(gameBoard, "Початковий стан");
possibleBoards.forEach((boardVariant, index) => {
    showBoard(boardVariant, `Комбінація ${index + 1}`);
});
document.write(`<p>Всього комбінацій: ${possibleBoards.length}</p>`);
