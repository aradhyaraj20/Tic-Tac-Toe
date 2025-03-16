let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    updateBoard();
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if (gameActive) {
        document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;
    }
}

function updateBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.innerText = board[index];
    });
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById("status").innerText = `Player ${board[a]} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        document.getElementById("status").innerText = "It's a draw!";
        gameActive = false;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    updateBoard();
    document.getElementById("status").innerText = "Player X's turn";
}
