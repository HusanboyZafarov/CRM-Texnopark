const draggableElements = document.querySelectorAll('.leads-list_item');
const subContainers = document.querySelectorAll('.leads-list_wrapper');


let draggedElement = null;

draggableElements.forEach((element) => {
    element.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        e.dataTransfer.setData('text/plain', ''); // Necessary for Firefox
        element.classList.add('dragging');
    });

    element.addEventListener('dragend', () => {
        draggedElement = null;
        element.classList.remove('dragging');
    });
});

// containers.forEach((container) => {
//     container.addEventListener('dragover', (e) => {
//         e.preventDefault();
//     });

//     container.addEventListener('drop', (e) => {
//         if (draggedElement) {
//             container.appendChild(draggedElement);
//         }
//     });
// });

subContainers.forEach((subContainer) => {
    subContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        subContainer.classList.add('dragover');
    });

    subContainer.addEventListener('dragenter', (e) => {
        e.preventDefault();
        subContainer.classList.add('dragover');
    });

    subContainer.addEventListener('dragleave', () => {
        subContainer.classList.remove('dragover');
    });

    subContainer.addEventListener('drop', (e) => {
        if (draggedElement) {
            subContainer.appendChild(draggedElement);
            subContainer.classList.remove('dragover');
            subContainer.style.maxHeight = `${subContainer.scrollHeight}px`
        }
    });

    setInterval(() => {
        if (subContainer.childElementCount == 0) {
            subContainer.classList.add("alone")
            subContainer.previousElementSibling.lastElementChild.firstElementChild.classList.add("noned")
        } else {
            subContainer.previousElementSibling.lastElementChild.firstElementChild.classList.remove("noned")
            subContainer.classList.remove("alone")
        }
    }, 100);
});