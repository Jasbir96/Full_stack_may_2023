/**
 * 1. Toggle editable behaviour
 * 2. change the color on click
 * */
/*****************Given ticket selection****************************/




const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");

const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");

const modal = document.querySelector(".modal-cont");
const prioritySetModal = modal.querySelector(".priority-color-cont");
const textArea = modal.querySelector(".textarea-cont");
const priorityColorArray = modal.querySelectorAll(".priority-color");


const pendingContainer = document.querySelector(".pending-cont");
const finishedContainer = document.querySelector(".finished-cont");



let colors = ["pink", "blue", "purple", "green"];
let currentColor = "green";
const uid = new ShortUniqueId();
let deleteFlag = false;
let allTickets= localStorage.getItem("localTickets")||[];
let isFromLocalStorage =false;
if(typeof allTickets=="string"){
    allTickets=JSON.parse(allTickets);
    populateUI();
}




function populateUI(){
    isFromLocalStorage=true;
    for(let i=0;i<allTickets.length;i++){
      let ticketObj=  allTickets[i];
        createTicket(ticketObj.content, ticketObj.color,ticketObj.id, ticketObj.isPending);
    }

    isFromLocalStorage=false;
}

/************change color /filter ticket****************************************/
toolBoxPriorityContainer.addEventListener("click", function (e) {
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
toolBoxPriorityContainer.addEventListener("dblclick", function (e) {
    if (e.target == e.currentTarget) {
        return;
    }
    const ticketArr = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < ticketArr.length; i++) {
        ticketArr[i].style.display = "block";
    }
})
/******************** modal and ticket creation********************************/

// plus -> wala guy
addBtn.addEventListener("click", function () {
    // display's modal
    modal.style.display = "flex";
})
deleteBtn.addEventListener("click",()=>{
    deleteBtn.style.color="red";
   deleteFlag=!deleteFlag;
})

// 1. make modal -> visible 
// enter the data
// event listener on the button of modal 
// 2. when you press enter  
// set  the color given by  modal and the text -> create ticket
// reset Modal 
//  add event lisetner -> which color will be intial one
prioritySetModal.addEventListener("click", function (e) {
    // console.log("68", e.target);
    if (e.target == e.currentTarget) {
        return;
    }
    currentColor = e.target.classList[1];

    // console.log("currentcolor", currentColor);
    // remove active 
    for (let i = 0; i < priorityColorArray.length; i++) {
        priorityColorArray[i].classList.remove("active")
    }
    // add active to required element
    e.target.classList.add("active");


})



modal.addEventListener("keydown", function (e) {
    console.log("key", e.key);
    if (e.key =="Escape"){
        textArea.value = "";
        currentColor = "green";
        modal.style.display = "none";
        return;
    }
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
// create ticket fn
function createTicket(content, currentColor,cId, isPending) {
    console.log("ticket with ", content, "and color", currentColor)
    // create a static UI with an Id
    if (content == "")
        return;
    const id = cId||uid();

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.setAttribute("draggable","true");
    ticketContainer.innerHTML = `<div class="ticket-cont">
            <div class="ticket-color ${currentColor}"></div>
            <div class="ticket-id">#${id}</div>
            <div class="ticket-area">${content}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>
        </div>`;

    if (isFromLocalStorage && isPending == false){
        finishedContainer.appendChild(ticketContainer);
        }else{
            pendingContainer.appendChild(ticketContainer);

        }

    /************************************************/

    const ticketColorElem = ticketContainer.querySelector(".ticket-color")
    AddcolorChangeListeners(ticketColorElem,id);

    const ticketArea = ticketContainer.querySelector(".ticket-area")
    const lockBtn = ticketContainer.querySelector(".lock-unlock")
    AddLocknUnlock(ticketArea, lockBtn,id)
    deleteListeners(ticketContainer,id);

    if (isFromLocalStorage)
        return;
    /********save it to localStorage********/ 
    
    let ticketObj={
        id:id,
        content:content,
        color:currentColor,
        isPending:true
    }
allTickets.push(ticketObj);
    updateLocalStorage();
}
//  helper fns of create Ticket
function AddcolorChangeListeners(ticketColorElem,currentId) {
    ticketColorElem.addEventListener("click", toggleColor);
    function toggleColor(e) {
        const cColor = e.target.classList[1];
        let idx = colors.indexOf(cColor);
        let nextIdx = (idx + 1) % colors.length;
        e.target.classList.remove(cColor);
        e.target.classList.add(colors[nextIdx]);
        // set color change in local storage
     let ticketObj= allTickets.find((ticketObject)=>{
         return ticketObject.id == currentId;
        })
        // console.log("Hello", ticketidx);
        ticketObj.color=cColor;
        updateLocalStorage();
    }
}

function AddLocknUnlock(ticketArea, lockBtn, currentId) {
    lockBtn.addEventListener("click", handleLock);
    function handleLock() {
        let isLocked = lockBtn.children[0].classList.contains("fa-lock");
        if (isLocked == true) {
            ticketArea.setAttribute("contenteditable", "true");
            lockBtn.children[0].classList.remove("fa-lock")
            lockBtn.children[0].classList.add("fa-lock-open")
        } else {
            ticketArea.setAttribute("contenteditable", "false")
            lockBtn.children[0].classList.remove("fa-lock-open");
            lockBtn.children[0].classList.add("fa-lock");
        }
        let ticketObj = allTickets.find((ticketObject) => {
            return ticketObject.id == currentId;
        })
        ticketObj.content = ticketArea.textContent;
        updateLocalStorage();
        
    }
}

function deleteListeners(ticketContainer,currentId) {
    ticketContainer.addEventListener("click", function () {
        if (deleteFlag) {
            ticketContainer.remove();
            const restofTickets = allTickets.filter((ticketObject) => {
                return ticketObject.id != currentId;
            })
            allTickets=restofTickets;
            updateLocalStorage();

        }
    })

}

function updateLocalStorage(){
    localStorage.setItem(  "localTickets" ,JSON.stringify( allTickets));
}

/*********************************************/ 




// function toggleColor(e) {
//     const cColor = e.target.classList[1];
//     let idx = colors.indexOf(cColor);
//     let nextIdx = (idx + 1) % colors.length;
//     ticketColor.classList.remove(cColor);
//     ticketColor.classList.add(colors[nextIdx]);
// }













// delete -> wala guy 
















/*********
 * 1. We have to save the ticket -> Data Available  regardles of reload.
 * 2. Properties  Given Ticket ->  color, content, id
 * 3. Action Ticket -> create , delete, update content, update color 
 * 
 *  curent iteration : local storage -> holds updated data 
 * next Iteration : first check the local storage , create UIs with that 
 * 
 * 
 * ****/ 