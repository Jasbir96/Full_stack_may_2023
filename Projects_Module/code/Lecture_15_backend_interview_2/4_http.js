const http = require('http');

const server = http.createServer();

server.on("request", function (req, res) {

    console.log("headers", req.method, req.url);

    if (req.method == "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // actual response
        res.write("1")
        res.write("2");
        res.end("3");
    }
    else if (req.method == "POST") {
        // content in the format of your post
        console.log("recievd post request");
        res.writeHead(200,
            { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ name: "Jasbir" }));
    }

})


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});