// console.log("Js attached");
const containers = document.querySelectorAll('.container');
let draggedBox = null;
containers.forEach((container) => {
    // info whenver drag behaviour starts 
    container.addEventListener("dragstart", (event) => {
        console.log("Drag is started on ", container);
        draggedBox = event.target;
        event.target.style.opacity="0.5";
    })
    // when you are dragging over a drop point , only triggered when you are in draggable area  
    container.addEventListener("dragover", (event) => {
        event.preventDefault();
        // console.log("Dragging is going on ", container);
    })
    // when you either leave the draggable container / press esc
    container.addEventListener("dragend", (event) => {
        console.log("Dragging is finished", container);
        event.target.style.opacity = "1";

    })
    // drop represent -> when you drop a draggable element in a drop zone
    container.addEventListener("drop", (event) => {
        console.log("Drop happened");
        if (draggedBox) {
            container.appendChild(draggedBox);
        }
    })

})
