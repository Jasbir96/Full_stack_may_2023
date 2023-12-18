const path = require("path");


console.log(__dirname);

// const baseName = path.basename(__dirname);
const fullPath = path.join(__dirname, "abc", "def", "file.md");
// console.log("baseName", baseName);
console.log("fullPath",fullPath);

