/***
 * Problem statement -> cachedFetch(timer);
 * */


function cachedFetch(expirey) {
    let cache = {};
    return function () {
        // if that request is made before  and the response is not older then expirey 
        //  you will return result from the cache 
    }
}

const cachedFetch = createCachedFetch(10000);
// Example usage
const apiUrl = 'https://api.example.com/data';

cachedFetch(apiUrl)
    .then(data => {
        // Handle the fetched data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });