/**
 * 1. Toggle editable behaviour
 * 2. change the color on click
 * */

const ticketContainer = document.
    querySelector(".ticket-cont");
const ticketArea = ticketContainer.querySelector(".ticket-area");
const lockBtn = ticketContainer.querySelector(".lock-unlock");
const ticketColor = document.querySelector(".ticket-color");
const tollBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal-cont");
const prioritySetModal = document.querySelector(".priority-color-cont");
const textArea = modal.querySelector(".textarea-cont");


let isLocked = true;
let colors = ["pink", "blue", "purple", "green"];
let currentColor = "green";


tollBoxPriorityContainer.addEventListener("click", function (e) {

    if (e.target == e.currentTarget) {
        return;
    }

    const curentColorelem = e.target;
    const cColor = curentColorelem.classList[1];
    const ticketArr = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < ticketArr.length; i++) {
        const ticketColorElem = ticketArr[i].querySelector(".ticket-color");
        let cTicketsColor = ticketColorElem.classList[1];
        if (cTicketsColor !== cColor) {
            ticketArr[i].style.display = "none";
        } else {
            ticketArr[i].style.display = "block";

        }
    }




})
tollBoxPriorityContainer.addEventListener("dblclick", function (e) {
    if (e.target == e.currentTarget) {
        return;
    }
    const ticketArr = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < ticketArr.length; i++) {
        ticketArr[i].style.display = "block";
    }
})




// plus -> wala guy
addBtn.addEventListener("click", function () {
    modal.style.display = "flex";
})

//  add event listner -> which color will be intial one
prioritySetModal.addEventListener("click", function (e) {
    // console.log("68", e.target);
    if (e.target == e.currentTarget) {
        return;
    }
    currentColor = e.target.classList[1];
    console.log("currentcolor", currentColor)

})


modal.addEventListener("keypress", function (e) {
    console.log("key", e.key);
    if (e.key !== "Enter") {
        return;
    }
    const content = textArea.value;
    createTicket(content, currentColor);
 // reset it's existence 
    textArea.value = "";
    currentColor = "green";
    modal.style.display = "none";


})
function createTicket(content, currentColor) {
    console.log("ticket with ", content, "and color", currentColor)
}


// 1. make modal -> visible 
// enter the data
// event listener on the button of modal 
// 2. when you press enter  
// set  the color given by  modal and the text -> create ticket
// reset Modal 







// delete -> wala guy 



lockBtn.addEventListener("click", handleLock);
ticketColor.addEventListener("click", toggleColor)

function handleLock() {
    if (isLocked == true) {
        ticketArea.setAttribute("contenteditable", "true");
        lockBtn.children[0].classList.remove("fa-lock")
        lockBtn.children[0].classList.add("fa-lock-open")
    } else {
        ticketArea.setAttribute("contenteditable", "false")
        lockBtn.children[0].classList.remove("fa-lock-open");
        lockBtn.children[0].classList.add("fa-lock");
    }
    isLocked = !isLocked;
}
function toggleColor(e) {
    const cColor = e.target.classList[1];
    let idx = colors.indexOf(cColor);
    let nextIdx = (idx + 1) % colors.length;
    ticketColor.classList.remove(cColor);
    ticketColor.classList.add(colors[nextIdx]);
}






