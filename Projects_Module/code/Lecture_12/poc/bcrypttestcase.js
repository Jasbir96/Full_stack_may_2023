/***
 * Password : uniquely identify a user (Authenticate user)
 * 
 * Encrytion algorithm : 
 * input data -> hash (encrytpted) -> decrypt(hash)
 * input data -> alogorithm (input data)-> hash
 * 
 * How people exploit it -> brute force with a dictonary of common password and hashes (MD5)
 * password -> akjsdbjbdvsjk
 * password1 -> askdjfbjbvdshjsdkvbdskj
 * abcdef -> ajkdfhbdjhfbdjhbdbjdb
 * 
 * 
 * Solution : 
 *  1. is to have an algorithm that takes a bit of time to encrypt / decrypt. -> bruteforce
 *  2. if every time for the same input you give different hash   -> you can't do dictionary attack
 * Bcrypt - algorithm is one such algo  
 * */
const bcrypt = require("bcrypt");
const password = "abksjfskdjf";
async function fn() {
    console.time();
    const randomSalt = await bcrypt.genSalt(12);
    console.log(randomSalt);
    const hash = await bcrypt.hash(password, randomSalt);
    console.log(hash);
    console.log("````````````");
    let isMatching = await bcrypt.compare(password, hash);
    console.log(isMatching)
    console.timeEnd();
}
fn();





