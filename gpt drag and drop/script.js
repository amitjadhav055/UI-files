// Select draggable items and containers
const draggables = document.querySelectorAll('.draggable');
const boxes = document.querySelectorAll('.box');

// Add drag event listeners to each draggable item
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragend', dragEnd);
});

// Add drag event listeners to each box
boxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

let draggedItem = null;

function dragStart(e) {
    draggedItem = this; // Store reference to the dragged item
    setTimeout(() => {
        this.style.display = 'none'; // Hide item temporarily
    }, 0);
}

function dragEnd(e) {
    this.style.display = 'block'; // Restore item visibility
    draggedItem = null;
}

function dragOver(e) {
    e.preventDefault(); // Allow dropping
}

function dragEnter(e) {
    e.preventDefault(); // Highlight the container
    this.classList.add('drag-over');
}

function dragLeave(e) {
    this.classList.remove('drag-over'); // Remove highlight
}

function drop(e) {
    this.classList.remove('drag-over'); // Reset container style
    const list = this.querySelector('.list'); // Find the list inside the container
    if (draggedItem && list) {
        list.appendChild(draggedItem); // Add dragged item to the new list
    }
}
