// the http.createServer() method includes request and response parameters which is supplied by node.js
// the request object can be used to get information about the current HTTP request
// e.g, url, request header, and data.

// the response object can be used to send  a response for a current HTTP request.

// if the response form the HTTP Server is supposed to be displayed as html
// you should include an HTTP header with the correct content type:

const http = require('http'); // require http core module
const fs = require('fs'); // require http core module

const server = http.createServer((req, res) => {


    const data = fs.readFileSync(`${__dirname}/userApi/userdata.json`, "utf-8");
    const objData = JSON.parse(data);

    //res.end("Hello form the other sides");
    //console.log(req.url);
    if(req.url == "/"){
        res.end("<center><h1>Home Page</h1></center>");
    }
    else if(req.url == "/about"){
        res.end("<center><h1>About Page</h1></center>");
    }
    else if(req.url == "/contact"){
        res.end("<center><h1>Contact Us Page</h1></center>");
    }
    else if(req.url == "/userapi"){
        
        res.writeHead(200, {"Content-type" : "application/json"});
        res.end(objData[2].name);
        //res.end("<center><h1>User API Page</h1></center>");
        
    }
    else {
        res.writeHead(400, {"Content-type" : "text/html"});
        res.end("<center><h1>404 Page Not Found</h1></center>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});