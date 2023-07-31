// * you have listen to three events
// click -> give the rating 
//                         update star upto that level 
//                         update Rating count
// mouseover -> we have change the stars upto that 
//                 level to yellow
//     * edge cases
// mouseleave -> move it gray stars
// -->


// let allStars = document.querySelectorAll(".star");
// for (let i = 0; i < allStars.length; i++) {
//     // event listeners are async -> it's handler fn -> 5 copies 
//     allStars[i].addEventListener("click", function () {
//         console.log("I am clicked");
//     })
// }


const starContainer = document.querySelector("#star_container");
const countSpan = document.querySelector("#count");
const starsArr = document.querySelectorAll(".star");
let pidx = 0;

/****
 * saved memory -> bubbling
 * Edge case -> only process the event coming from the start
 * 
 * */


// event bubbble
starContainer.addEventListener("click", function (e) {
    // console.log(e.target);
    let elem = e.target;
    let isrequired = elem.hasAttribute("idx");
    if (!isrequired)
        return;
    // console.log(elem);
    pidx = elem.getAttribute("idx");
    fillStars(pidx);
})

starContainer.addEventListener("mouseover", function (e) {
    let elem = e.target;
    let isrequired = elem.hasAttribute("idx");
    if (!isrequired)
        return;
    let cidx = elem.getAttribute("idx");
    changeStars(cidx);
})

starContainer.addEventListener("mouseleave", function (e) {
    // whe need to reste
    changeStars(pidx);
})



function fillStars(idx) {
    // update the count
    countSpan.textContent = idx;
    changeStars(idx);
}
function changeStars(idx) {
    // reset all the stars
    for (let i = 0; i < starsArr.length; i++) {
        // classList -> all the classes on an elmem
        starsArr[i].classList.remove("yellow");
    }
    // update the color to cidx 
    for (let i = 0; i < idx; i++) {
        // classList -> all the classes on an elmem
        starsArr[i].classList.add("yellow");
    }
}















