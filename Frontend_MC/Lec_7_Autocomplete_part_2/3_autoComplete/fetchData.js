/**   make HTTP request fromm browser -> 
it is an promise based API*/
/***
 * Fetch API request ->
 * *  GET request  ->response object 
 * * response = header (metadata)+body(actual data)
 *      * extarct actual -> call response.json() and 
 *       this fn is also promise based 
 * * This  route -> should be public , or you should auth
 * */

// fetch(`https://restcountries.com/v3.1/name/`)
//     .then(
//         function (response) {
//             // response -> data(body)+ metadata(header)
//             console.log("response", response)
//             return response.json();
//         }
//     ).then((data) => {
//         console.log("data", data);
//     }).catch(err => {
//         console.log("in catch");
//         console.log("hello", err);
//     })

let currentFetchController = null;

function cancelPreviousRequest() {
    currentFetchController.abort();
}
async function getCountries(keyword) {
    try {
        if (currentFetchController !== null) {
            cancelPreviousRequest();
        }

        // http response
        const abortcontroller = new AbortController();
        currentFetchController = abortcontroller;
        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`,
            { signal: abortcontroller.signal }
        );
        // i have recieved the response
        currentFetchController = null
        const response = await rawResponse.json();
        // console.log(rawResponse.status);
        if (rawResponse.status == 404) {
            console.log("Page not found");
            return [];
        } else {
            console.log("Data found");;
        }
        console.log("38", response)
        return response;
    } catch (err) {
        if (err.name == "AbortError") {
            // Request was aborted
            console.log('Fetch request was aborted.');
            return err.name;
        } else {
            console.error("Fetch error:", error);
        }
    }

}

export default getCountries;



