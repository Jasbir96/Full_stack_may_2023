
/***
 * // [1,2,...........10000]; -> nodejs
 * 
 * ## Tasks
 * fs -> stream 
 *  1. read  file -> getting the data (chunks)
 *  2. write file -> setting the data (chunks)
 * HTTP  -> stream
 *  3. HTTP -> (req,res)
 *      -> recieveing data in packets
 *      -> sending data in packets
 * //z-lib -> stream
 *  4. compression / Transform 
 *              ->compress -> in chunks
 *              ->decompress -> in chunks
 *  //crypto -> stream
 *  5. encrypt /decrypt
 *          -> encrypt -> in chunks
 *          -> decrypt -> in chunks
 * 
 * First principles of  Nodejs -> 
 *      * event based-> Event Emitter
 *      *  Doing thinks in chunks-> stream 
 * 
 * Stream -> flowing stream of river(data) 
 * * readable:  form where you can read the data (fs.createReadStream) | req
 * * Writable: from where you can write the data (fs.writeStream) |  res
 * * Duplex: where you read and write also | sockets  
 * * Tranformative : that can change one from to another form | zlib and crypto
 * **/



/****
 * fs 
 * 
 * */

const fs = require('fs');
const path = require("path");
let srcFilePath = path.join(__dirname, "../", "1_problems", "big.file");
let destFilePath = path.join(__dirname, "streaMbig.file");
// i cam creating a stream 


const fileReadStream = fs.createReadStream(srcFilePath);
const fileWriteStream = fs.createWriteStream(destFilePath);

// // some data get's into
// fileReadStream.on("data", function (chunk) {

//     fileWriteStream.write(chunk)
// })
// // end
fileReadStream.on("end", function () {
    // console.log("last chunk  of data", data)
    fileWriteStream.end();
})
// fileWriteStream.on("finish", function () {
    //     console.log("File is written")
    // })
    //  sending readable to writable 
    fileReadStream.pipe(fileWriteStream);
    fileReadStream.on("error", function (data) {
        console.log("error", data)
    })
    fileWriteStream.on("error", function (data) {
        
        console.log("last chnk of data", data)
    })



/****
 * big task =>input factory -> inform you using an event
 * 
 * **/


