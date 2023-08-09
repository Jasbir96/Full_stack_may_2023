import getCountries from "./fetchData.js";

// getCountries("india").then(function (res) {
//     console.log(res)
// })
const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

const handleSearch = async (keyword) => {
    const response = await getCountries(keyword);
    console.log(typeof response);
    if (typeof response == "string" && response == "AbortError") {
        return "AbortError";
    }
    const countryNameArr = response.map((country) => country.name.common);
    return countryNameArr;

}

const populateSuggestionBox = (countryNameArr) => {
    if (countryNameArr.length) {
        suggestionBox.classList.add("visible");
    } else {
        suggestionBox.classList.remove("visible");
    }
    // before showing any result -> reste you suggestion box
    suggestionBox.innerHTML = "";

    const fragment = document.createDocumentFragment();
    // add all the lis to that fragment
    countryNameArr.forEach((countryName) => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    })
    suggestionBox.appendChild(fragment);

}

const handleSuggestions = async (e) => {
    console.log(e.target.value);
    const keyword = e.target.value;
    const response = await handleSearch(keyword);
    if (typeof response == "string" && response == "AbortError") {
        return;
    }

    populateSuggestionBox(response);
}

function debounce(fn, delay = 1000) {
    // intial 
    let timerId;
    return function (...args) {
        //grumpy 
        if (timerId) {
            console.log("I am reseting you now wait again from the start")
            clearTimeout(timerId)
        }
        // they want to call the fn after a delay
        timerId = setTimeout(function () {
            fn(...args);
        }, delay)
    }
}

inputBox.addEventListener("input", debounce(handleSuggestions));

// if interval b/w two subseqnet key press is more than delay then only i will call it again




// setTimout -> calls it self 
// clearTimout kill it 
