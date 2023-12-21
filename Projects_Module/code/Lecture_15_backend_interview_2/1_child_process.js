/***
 * 1. exec -> you can run any shell command no communication
 * 2. execFile -> you can run any compiled  file: windows : exe  
 * 3. spawn : generally used to run  different programs and when you need a lot of interaction 
 * (complete node replica that is created) you can communincate it with each step
 * 4. fork :light ways to create a copy of a process (cpu intensive task )
 * **/

const cp = require("child_process");
// cp.spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",["https://youtube.com","--incognito"]);
// console.log("open -a Users/apple/Applications/Google Chrome");


