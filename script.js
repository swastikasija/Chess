const pieces = document.querySelectorAll(".imageBox");
const boxes = document.querySelectorAll(".box");

// Add a dragstart event listener to each piece
pieces.forEach((piece) => {
    piece.addEventListener("dragstart", dragStart);
    piece.setAttribute("draggable", "true");
});

// Add dragover and drop event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("dragover", dragOver);
    box.addEventListener("drop", dragDrop);
});

let draggedPiece = null;

function dragStart(e) {
    draggedPiece = e.target;
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop(e) {
    if (draggedPiece) {
        // Prevent the default drop action
        e.preventDefault();

        // Append the dragged piece to the target box
        e.target.appendChild(draggedPiece);

        // Reset the draggedPiece variable to null
        draggedPiece = null;
    }
}
