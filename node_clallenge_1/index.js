const fs = require("fs");

// create a folder named in vinay

// fs.mkdirSync("vinay");

// create a file in it named bio.txt and data into it.

//fs.writeFileSync("bio.txt", "My Name is Vinay Namdev.");

// add mone data into the file at the end of the exitsing data

//fs.appendFileSync('bio.txt', '\r\nI live in faridabad city.');

//read the data without geeting the buffer data at first

// const data = fs.readFileSync('mybio.txt', 'utf8');

// console.log(data);

//rename the file name to mybai.txt

// fs.renameSync('bio.txt', 'mybio.txt');

// now delete bothe file and folder

// firstly we remove file after that remove folder

//fs.unlinkSync('mybio.txt');

fs.rmdirSync('vinay');





