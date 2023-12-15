console.log("Working");
// intiating a ws connection
const socket = io("http://localhost:3000");

socket.on("message from server", function () {
    console.log("I am connected to socket")
})

const btn = document.querySelector("#btn");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const grp = document.querySelector("#grp");
const joinGroup = document.querySelector("#join_grp");
const stg = document.querySelector("#stg");

// run for sender
btn.addEventListener("click", function () {
    let value = input.value;
    if (value) {
        const li = document.createElement("li");
        li.textContent = value;
        list.appendChild(li);
        socket.emit("message", value);
        input.value = ""
    }
})
grp.addEventListener("click", function () {
    console.log("group created req")
    socket.emit("create_grp", Math.random(0, 1) * 1000);
})

joinGroup.addEventListener("click", function () {
    console.log("grp join req")
    socket.emit("join_room");
})


stg.addEventListener("click", function () {
    let value = input.value;
    if (value) {

        socket.emit("grp message", value)
    }

})
// this code will run for reciver
socket.on("recived_msg", function (value) {
    const li = document.createElement("li");
    li.textContent = value
    list.appendChild(li);
})

socket.on("serv_grp_message", function (data) {

    console.log("grp message", data);
})










