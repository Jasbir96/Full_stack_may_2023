/**
 * Web socket : 
 *  1. it has small packet size
 *  2. it allows 2 way communication
 *  3. it keep the connection open always
 * 
 * Cons: 
 *  -> socket connection are expensive : client : 256 open sockets (chrome web)
 * -> packet size wrt to http is smaller 
 * 
 * **/


const express = require("express");
const http = require("http");
const socketIo = require("socket.io");


const app = express();
const nodeServer = http.createServer(app);
// this io is responsible for your websocket communication
const io = new socketIo.Server(nodeServer);
// it will  share all the files that are in public folder
app.use(express.static("public"));

let room;
io.on("connection", function (socket) {
    console.log(socket.id, " is connected");


    // setInterval(() => {
    //     socket.emit("message from server");
    // },2000)

    // disconnect
    // socket.on("disconnect",function(){
    //     console.log(socket.id , "got disconnected")
    // })

    // recieve and event from the server
    socket.on("message", (data) => {
        // console.log("message",data)
        socket.broadcast.emit("recived_msg", data);

    })




    // room will created 
    socket.on("create_grp", function (currentRoom) {
        room = currentRoom
        // first particpant is added 
        console.log("grp is cretaed")
        socket.join(currentRoom);
    })

    socket.on("join_room", function () {
        console.log(socket.id, "joined the grp")
        socket.join(room);
    })
    socket.on("grp message", function (data) {
        socket.to(room).emit("serv_grp_message",data);
    })



})
// create normal api , server rendered
// app.get('/', (req, res) => {
//     res.send('<h1>Hello world</h1>');
// });
nodeServer.listen(3000, () => {
    console.log("server is running at port 3000")
})

