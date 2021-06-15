var http = require("http"); 
function demo(){
    /* let x=2;
    let y=5; 
    
    let txyt=x+y;                   -> Arithmetic operation not allowed.  */
    //return document.write(txyt);  ->Server not respond document.write in nodejs. 
    
    let txyt="ram is god";          //->String response working.
    return txyt;     
    } 
http.createServer(function (request, response) { 
 // Send the HTTP header   
   // HTTP Status: 200 : OK  
   // Content Type: text/plain  
   response.writeHead(200, {'Content-Type': 'text/plain'});  
   // Send the response body as "Hello World"  
   response.end(demo()); 
   
    
}).listen(8082);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8082/');  