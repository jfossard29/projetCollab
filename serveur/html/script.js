const board = document.getElementById("chessboard");

// Configuration initiale des pièces (Unicode des symboles d'échecs)
const initialSetup = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

// Crée l'échiquier
function createBoard() {
    let isLightSquare = false;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square", isLightSquare ? "light" : "dark");
            square.dataset.row = row;
            square.dataset.col = col;

            // Ajoute les pièces
            if (initialSetup[row][col]) {
                const piece = document.createElement("span");
                piece.textContent = initialSetup[row][col];
                piece.classList.add("piece");
                square.appendChild(piece);
            }

            board.appendChild(square);
            isLightSquare = !isLightSquare;
        }
        isLightSquare = !isLightSquare;
    }
}

// Gère les déplacements des pièces
let selectedPiece = null;

board.addEventListener("click", (e) => {
    const target = e.target;

    // Si on clique sur une pièce
    if (target.classList.contains("piece")) {
        // Sélectionne la pièce
        if (!selectedPiece) {
            selectedPiece = target;
            selectedPiece.style.backgroundColor = "#ff0"; // Highlight
        } else {
            selectedPiece.style.backgroundColor = "";
            selectedPiece = null; // Désélectionne
        }
    } 
    // Si on clique sur une case vide
    else if (target.classList.contains("square") && selectedPiece) {
        target.appendChild(selectedPiece); // Déplace la pièce
        selectedPiece.style.backgroundColor = "";
        selectedPiece = null;
    }
});

// Initialisation
createBoard();
