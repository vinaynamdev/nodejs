const http = require('http');
const fs = require('fs');

console.log(__dirname);

const server = http.createServer((req, res) => {


    const data = fs.readFileSync(`${__dirname}/views/home.html`, "utf-8");
    //const objData = JSON.parse(data);

    if(req.url == "/"){
        res.writeHead(200, {"Content-type" : "text/html"});
        res.end(data);
        //res.end("<center><h1>Home Page</h1></center>");
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