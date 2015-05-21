// This server should respond to a root-url request with a file called index.html. 
// Do not use Express.js. 
// Your code should have error checking and at least one callback. 
// Put five or more html elements in your index.html. 
// One of the elements should be a link to an external page. 
// Things to research: node.js, callbacks, the fs module, the http module.

var http = require("http"),
    path = require("path"),
    url = require("url"),
    fs = require("fs");

var PORT = 8888,
    host = "127.0.0.1";;

function handleRequest(request, response) {
    // response.end("Success! path at:" + request.url);
    fs.readFile("./index.html", function(error, data) {
        if (error) {
            response.writeHead(404, {
                "Content-type": "text/plain"
            });
            response.end("This page was not found");
        } else {
            response.writeHead(202, {
                "Content-type": "text/html"
            });
            response.end(data);
        }
    });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});