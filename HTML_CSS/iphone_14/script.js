// load event is fired when html and all the external resources -> images , styles are loaded
window.addEventListener("load", init);

function init() {
    // console.log("Hello");
    const colors = ["midnight", "starlight", "red", "blue", "yellow"];
    const heroNavContainer = document.querySelector(".hero_nav--container");
    const colorPickerArray = document.querySelectorAll(".color_picker");
    const crouselIphoneArray = document.querySelectorAll(".crousel_iphone");
    const heroCrouselContainer = document.querySelector(".hero_crousel_container");
    let prevColor = "";
    heroNavContainer.addEventListener("click", handlecolorUpdate);


    function handlecolorUpdate(e) {

        console.log("e",e,e.target)
        const currentColorOption = e.target;

        if (!e.target.classList.contains("color_picker")) {
            return
        }
        addBorderToColorPickers(currentColorOption, colorPickerArray);
        selectIphone(currentColorOption, crouselIphoneArray);
    }


    function selectIphone(currentColorOption, crouselIphoneArray) {
        const currentColor = currentColorOption.classList[1];
        console.log("currentColor", currentColor);
        // ****************scaling and translating of individual iphones***/
        for (let i = 0; i < crouselIphoneArray.length; i++) {
            crouselIphoneArray[i].classList.remove("selected--iphone");
        }

        for (let i = 0; i < crouselIphoneArray.length; i++) {
            const cIphoneColor = crouselIphoneArray[i].classList[1];
            if (cIphoneColor == currentColor) {
                crouselIphoneArray[i].classList.add("selected--iphone");
            }
        }

        //***** move background*****/ 
        if (heroCrouselContainer.classList.length == 1) {
            heroCrouselContainer.classList.add(currentColor);
            prevColor = currentColor;
        } else {
            heroCrouselContainer.classList.replace(prevColor, currentColor);
            prevColor = currentColor;
        }



    }



    function addBorderToColorPickers(currentColorOption, colorPickerArray) {
        //    console.log( currentColorOption.classList);

        for (let i = 0; i < colorPickerArray.length; i++) {
            colorPickerArray[i].classList.remove("selected--color");
        }
        currentColorOption.classList.add("selected--color");
    }

}