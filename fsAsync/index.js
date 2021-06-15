const fs = require("fs");

/* fs.writeFile("readme.txt", "Today we will be create a file with asynchronous version in file system.", 
(err) => { 
    console.log("fine is created"); 
    console.log("Error :)", err);
}); */

// this code called callback function. it must be defile in asynchronous method
/* (err) => { 
    console.log("fine is created"); 
    console.log("Error :)", err);
} */

// add more data in file

/* fs.appendFile("readme.txt", "\r\nAdd more data in file using Asynchronous method in fs", (err) => {
    console.log("task complete");
    console.log("Error :)", err);
}); */

// read file with the help of async method in fs

fs.readFile("readme.txt", "UTF-8", (err, data) => {
    console.log(data);
    console.log("Error :)", err);
});