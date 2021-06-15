const fs = require('fs');

// createing a foler/directory using async method in fs

/* fs.mkdir("./vinay/", (err) => {
    console.log("folder create successfully.");
    console.log("Error :) ",err);
}); */

// create a file in it named bio.txt and data into it

/* fs.writeFile("./vinay/bio.txt", "Hi, my name is vinay namdev.", (err) => {
    console.log("bio.txt file create and data into it.");
    console.log("Error :) ",err);
}); */

// add mone data into the file at the end of the exitsing data

/* fs.appendFile("./vinay/bio.txt", "\r\nI live in Faridabad city, Haryana.", (err) => {
    console.log("add more data into bio.txt");
    console.log("Error :) ",err);
}); */

//read the data without geeting the buffer data at first

/* fs.readFile("./vinay/bio.txt", "utf-8", (err, data) => {
    console.log("Reading File");
    console.log(data);
    console.log("Error :) ",err);
}); */

//rename the file name to mybai.txt

/* fs.rename("./vinay/bio.txt", "./vinay/mybio.txt", (err) => {
    console.log("Rename File name with mybio.txt");
    console.log("Error :) ",err);
}); */

// delete file 

/* fs.unlink("./vinay/mybio.txt", (err) => {
    console.log("delete file");
    console.log("Error :) ",err);
}); */

// delete folder/directory

fs.rmdir("./vinay/", (err) => {
    console.log("delete folder");
    console.log("Error :) ",err);
})