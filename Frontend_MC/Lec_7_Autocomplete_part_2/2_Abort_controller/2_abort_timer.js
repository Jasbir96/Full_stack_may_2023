// timout after 2 seconds
// inbuilt API 
// 1 create a instance from AbortController
const abortcontroller = new AbortController();
(async function () {
    // fetch -> url , options
    try {
        // 2 attach signal to a fetch request 
        const responsePromise = fetch("https://restcountries.com/v3.1/name/ind",
            { signal: abortcontroller.signal });
        console.log("request is send");
        // 3 call abort 
        setTimeout(() => {
            // 2second
            try{
                console.log(" calling abort")
                abortcontroller.abort();
            }catch(err){
                if (err.name == "AbortError") {
                    // Request was aborted
                    console.log('Fetch request was aborted.');
                    return err.name;
                } else {
                    console.error("Fetch error:", error);
                }
            }
        }, 2000);
        const response = await responsePromise;
        const ans = await response.json();
        console.log("ans", ans);

    } catch (err) {
       
    }
})();



//  implement -> request timeout -> response -> 2sec -> abort it 

