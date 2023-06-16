// how do you know that i want to select a color : -> click
// give a color -> add a class

console.log("Hello");

// sure -> in html is loaded 

// window ->inbuilt obj that reperesents the browser window
// listen -> load even -> html , css and all the assets are loaded
window.addEventListener("load", init);


function init() {
    // i am sure that page is loaded;
    // html -> document
    const heroNavContainer = document.querySelector(".hero_nav--container");
    const colorPickerArr = document.querySelectorAll(".color_picker");;

    heroNavContainer.addEventListener("click", handleColorUpdate);

    function handleColorUpdate(eventObj) {
        // console.log("elem",eventObj.target);
        let currentColorElem = eventObj.target;
        if (!currentColorElem.classList.contains("color_picker"))
            return;

        // remove from  all pickers
        for (let i = 0; i < colorPickerArr.length; i++) {
            let alltheclasses = colorPickerArr[i].classList;
            alltheclasses.remove("selected--color");
        }

        // add to my target elem
        currentColorElem.classList.add("selected--color");


    }

}