const fs = require("fs");
const path = require("path");


/***
 * all the methods related to 
 *      file system -> directory or file
 * 
 * Note : never use these sync version
 * 
 * */
// create/ replace the file
// fs.writeFileSync("f1.txt", "I have something");
// apppend content inside the file
// fs.appendFileSync("f1.txt", "I have something");
// read content form the file
// const content = fs.readFileSync("f1.txt");
// console.log("content", content);
// fs.mkdirSync(path.join(__dirname, "myFOlder"));
// fs.mkdirSync(path.join(__dirname, "toRemove"));
// i need that directory to be empty
// fs.rmdirSync(path.join("toRemove"));


// it take a file content and add that content two some other file
let srcFilePath = path.join(__dirname, "../", "1_problems", "big.file");
let destFilePath = path.join(__dirname, "mybig.file");
// console.log("srcFilePath",srcFilePath);
fs.copyFileSync(srcFilePath,destFilePath);
